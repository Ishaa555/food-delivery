import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {

    console.log("HEADERS:", req.headers);

    const { token } = req.headers;

    console.log("TOKEN RECEIVED:", token);

    if (!token) {
        return res.json({success:false,message:'Not Authorized Login Again'})
    }

    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);

        console.log("DECODED TOKEN:", token_decode);

        req.userId = token_decode.id;
        next();

    }catch (error) {
        console.log("JWT ERROR:", error);
        res.json({success:false,message:'Error'});
    }
};

export default authMiddleware;