import jwt from 'jsonwebtoken';

async function auth(req, res, next) {
    try{
        const token = req.cookies.token;

        if(!token){
            return res.json({
                success: false,
                message: "Please login for access"
            });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        //console.log(decoded);
        next();
    } catch(e){
        console.log(e);
        res.json({
            success:false,
            message: "Some error occured"
        })
    }
}

export {auth};