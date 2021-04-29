const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr
// now s3 can crud on our s3 buckets

module.exports = {
  signup,
  login,
  addOrRemoveFavorite
};

function signup(req, res) {
  console.log(req.body, req.file)

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // FilePath unique name to be saved to our butckt
  const filePath = `${uuidv4()}/${req.file.originalname}`
  const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
  //your bucket name goes where collectorcat is 
  //////////////////////////////////////////////////////////////////////////////////
  s3.upload(params, async function(err, data){
    console.log(data, 'from aws') // data.Location is our photoUrl that exists on aws
    const user = new User({...req.body, photoUrl: data.Location});
    try {
      await user.save();
      const token = createJWT(user); // user is the payload so this is the object in our jwt
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }



  })
  //////////////////////////////////////////////////////////////////////////////////
 
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({err: 'bad credentials'});
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
        
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

//////////////////////////////////////////////////////////////////////////////////

// ADD FAVORITE FUNCTION
async function addOrRemoveFavorite(req, res){
  console.log('addOrRemoveFavorite controller FIRING')
  // console.log('THE USER:', req.user)
  // let bgId = req.body.gameId
  // let usersFavs = req.user.favorites

  const user = await User.findById(req.user._id)
  console.log('USER FAVS', user.favorites)
  
  try {
    
    if(user.favorites.includes(req.body.gameId)){
      console.log('GAME ALREADY EXISTS IN USERS FAVS')
    } else {
      user.favorites.push(req.body.gameId)
      console.log(user.favorites, 'USERS FAVS IN CTRL1')
      await user.save()
      console.log('SAVED!')
      console.log(user.favorites, 'USERS FAVS IN CTRL2')
      res.status(201).json({data: `${req.body.gameId} added to favorites!`})
    }
    
  } catch(err){
    res.json({data: err})
    console.log('ERROR:', err)
  }  
}
