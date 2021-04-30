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

// HANDLE FAVORITE FUNCTION
async function addOrRemoveFavorite(req, res){

  const user = await User.findById(req.user._id)
 
  user.favorites.map(x => console.log(x.handle, 'TITLES IN FAVS'))
  
  // console.log(req.body.boardgame.id, 'REQ.BODY')

  try {
    // CODE 1A
    if (user.favorites.length < 1){ // if user favs is empty
      user.favorites.push(req.body.boardgame) // add new game to user favs
      console.log(`FAVS EMPTY. ADDING ${req.body.boardgame.handle} TO FAVS`)
      await user.save() // save the user
      for(let game of user.favorites) {
          console.log(game.handle, 'IS IN FAVS. END CODE 1A')
      }

    // CODE 1B
    } else { // if user favs is not empty
      for (let game of user.favorites){ // loop through each game in favs

        // CODE 1Bi
        if(game.handle === req.body.boardgame.handle || game === null){ // if game = new game 
          user.favorites.remove(game) // remove game from user favs
          console.log(`REMOVING ${req.body.boardgame.handle} FROM FAVS`)
          await user.save() // save the user

          if(user.favorites < 1){
            console.log('USER FAVS EMPTY! END CODE 1Bi-A')
          } else {
            for(let game of user.favorites) {
              console.log(game.handle, 'IS IN FAVS. END CODE 1Bi-B')
            }
          }
          

        // CODE 1Bii  
        } else { // if game != new game
          user.favorites.push(req.body.boardgame) // add new game to favs
          console.log(`ADDING ${req.body.boardgame.handle} TO FAVS`)
          await user.save() // save user

          if(user.favorites < 1){
            console.log('USER FAVS EMPTY! END CODE 1Bii-A')
          } else {
            for(let game of user.favorites) {
              console.log(game.handle, 'IS IN FAVS. END CODE 1Bii-B')
            }
          }
        }
        return
      }
    }
    
    
  } catch(err){
    res.json({data: err})
    console.log('ERROR:', err)
  }  
}
