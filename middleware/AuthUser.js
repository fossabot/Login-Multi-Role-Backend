import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) =>{
    console.log(req.session.name);
    if(!req.session.name){
        return res.status(401).json({msg: "Please login to your account!"});
    }
    const user = await User.findOne({
        where: {
            name: req.session.name
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
    req.name = user.name;
    next();
}

export const adminOnly = async (req, res, next) =>{
    const user = await User.findOne({
        where: {
            name: req.session.name
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
    if(user.role !== "admin") return res.status(403).json({msg: "forbidden access"});
    next();
}

export const userchek = async (req, res, next) =>{
    console.log(req.body.name);
    const user = await User.findOne({
        where: {
            username: req.body.name,
            Password: req.body.Password

        }
    });
    console.log(user);
    if(!user) 
    {req.name = user.name;
    next();
    }
    else return res.status(404).json({msg: "User Exist"});
   
}