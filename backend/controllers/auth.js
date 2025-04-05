const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const model=require('../model/user');
const User=model.User;

exports.signUp = async (req, res) => {  
  try {
    const user = await User.create(req.body);
    var token = jwt.sign({ email: req.body.email },process.env.SECRECT, {
      expiresIn: '30d',
    });
    const hash = bcrypt.hashSync(req.body.password, 10);
    user.token = token;
    user.password = hash;
    user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}
exports.login = async (req, res) => {  
    try {
        const user = await User.findOne({email:req.body.email});
        console.log(user);
        const isAuth=bcrypt.compareSync(req.body.password, user.password);
        if(isAuth){
            const token = jwt.sign({ email: req.body.email }, process.env.SECRECT, {
                expiresIn: '30d',
            });
            user.token = token;
            user.save();
            res.status(201).json(user);
        }else{
            res.status(400).json({message:'Wrong password'});
        }
    } catch (err) {
      res.status(400).json(err);
    }
}