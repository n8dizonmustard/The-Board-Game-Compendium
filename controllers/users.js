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
  const newBg = req.body.boardgame

  try {
    // if favs are NOT EMPTY
    if (user.favorites.length > 0 && user.favorites.find(game => game.id === newBg.id)){
      user.favorites.remove(user.favorites.find(game => game.id === newBg.id)) // remove the game in favs
      console.log('WE FOUND A MATCH -REMOVED!')

/////////////////////////////////////////////////////////////
    
    // if favs ARE EMPTY
    } else {
      console.log('NO MATCH FOUND')
      user.favorites.push(newBg)
      console.log(`${newBg.handle}, ${newBg.id} -ADDED!`)
    }

/////////////////////////////////////////////////////////////

    // save the user and send back data
    await user.save()
    console.log('user saved!')
    res.status(201).json(user.favorites)
    console.log('successful response!')

    // LOG WHAT'S IN FAVS
    if (user.favorites.length > 0){
      for(let game of user.favorites){
        console.log('IN FAVS:', game.handle, '...END CODE!')
      }
    } else {
      console.log('FAVS EMPTY...END CODE!')
    }
    
    
  } catch(err){
    res.json({data: err})
    console.log('ERROR:', err)
  }  
}













/*

  try {

    // IF THERE IS/ARE GAME(S) IN FAVS
    if(user.favorites.length > 0){
      for(let i=0; i<user.favorites.length; i++){
        // console.log(user.favorites[i].handle)

        // if match or null, then remove!
        if(user.favorites[i].id === req.body.boardgame.id || user.favorites[i] === null){
          user.favorites.remove(user.favorites[i]) // remove the game in favs
          console.log(`${user.favorites[i].handle}, ${user.favorites[i].id} ~MATCHED~ ${req.body.boardgame.handle}, ${req.body.boardgame.id} -REMOVED`)
          await user.save()
          res.status(201).json(user.favorites)

          //CHECK A
          if(user.favorites.length < 1){
            console.log('USER FAVS EMPTY! END CHECK A1')
          } else {
            for(let game of user.favorites) {
              console.log('IN FAVS:', game.handle, '...END CHECK A2')
            }
          }

//////////////////////////////////////////////////////////////////////////////////////////////
        // if no match, then add!
        } else if (user.favorites.length {
          user.favorites.push(req.body.boardgame)
          console.log(`Favs empty! ${req.body.boardgame.handle}, ${req.body.boardgame.id} -ADDED! (from loop)`)
          await user.save()
          res.status(201).json(user.favorites)

          //CHECK B
          if(user.favorites.length < 1){
            console.log('USER FAVS EMPTY! END CHECK B1')
          } else {
            for(let game of user.favorites) {
              console.log('IN FAVS:', game.handle, '...END CHECK B2')
            }
          }


        }
      }

//////////////////////////////////////////////////////////////////////////////////////////////
    // IF FAVS ARE EMPTY
    } else {
      user.favorites.push(req.body.boardgame)
      console.log(`Favs empty! ${req.body.boardgame.handle}, ${req.body.boardgame.id} -ADDED!`)
      await user.save()
      res.status(201).json(user.favorites)
      

      //CHECK C
      for(let game of user.favorites) {
        console.log('IN FAVS:', game.handle, '...END CHECK C')
      }
    }


*/