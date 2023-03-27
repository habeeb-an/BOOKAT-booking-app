const express= require('express')
var cors = require('cors');
const { default: mongoose } = require('mongoose');
const User=require('./models/User.js')
require('dotenv').config()
const bcrypt = require('bcryptjs');
const bcryptSalt=bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken');
const jwtSecret='qwertyuiop'
const cookieParser=require('cookie-parser')
const imageDownloader = require('image-downloader');
const { dirname } = require('path');

const app= express();


app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));
mongoose.connect(process.env.MONGOURI);
app.get('/test',(req,res)=>{
    res.json('okei')
});

app.post('/register',async (req,res)=>{
    const {name,email,password}=req.body
    try{
        const userDoc=await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
        })
res.json(userDoc);

    }catch(e){
        res.status(422).json(e);
    }
});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const userDoc=await User.findOne({email})
    if(userDoc){
        const passOk=bcrypt.compareSync(password,userDoc.password)
        if(passOk){
            jwt.sign({
                email:userDoc.email, 
                id:userDoc._id,
               }, jwtSecret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token,{secure:false,sameSite:'none'}).json(userDoc)

            })
        }else{
            res.status(422).json('pass not ok')
        }
    }else{
        res.json("not found")
    }
})

//profile

app.get('/profile',(req,res)=>{
      const {token}= req.cookies;
      if(token){
        jwt.verify(token,jwtSecret,{},async (err,userData)=>{
                if(err) throw err;
                const {name,email,_id}= await User.findById(userData.id)
                res.json({name,email,_id})
        })
      }else{
        res.json(null)
      }
})

//logout
app.post ('/logout',(req,res)=>{
    res.cookie('token','').json(true)
})


//uploads

app.post('/upload-by-link',async (req,res)=>{
    const {link}=req.body;
    const newName=Date.now()+'.jpg'
    await imageDownloader.image({
        url: link,
        dest: __dirname+'/uploads',
    });
})
app.listen(4000)
