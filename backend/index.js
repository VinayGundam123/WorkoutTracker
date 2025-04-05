const express=require('express');
const server=express();
const mongoose = require('mongoose');
const cors=require('cors');
const userRouter=require('./routes/user');
const authRouter=require('./routes/auth');
const communityRouter=require('./routes/community');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const path = require('path');

main().catch(err => console.log(err));
async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB')
    }catch(err){
        console.error("Database connection error:", err);
        res.status(503).json({ message: "Service Unavailable: DB not connected" });
    }
}

const auth=(req,res,next)=>{
    try{
        // console.log(req.get('Authorization').split(' ')[0],"----",req.get('Authorization').split('Bearer ')[1]);
        const token=req.get('Authorization').split(' ')[1];
        var decoded = jwt.verify(token, 'shhhhh');
        
        if(decoded.email){
            console.log(decoded)
            next();
        }else{
            res.status(401).json({message:'Unauthorized'});
        }
    }
    catch(err){
        res.status(401).json({message:'Unauthorized'});
        // console.log(err)
    }
}

server.use(cors());
server.use(express.json()); //bodyParser
server.use(express.static(path.join(__dirname, 'build')));
server.use('/',authRouter.router);
server.use('/user',auth,userRouter.router);
server.use('/community',auth,communityRouter.router);
server.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
});
server.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${5000}`)
})


