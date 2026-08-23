import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("Mongo_uri does not define in environmental variables");
}
if(!process.env.JWT_SECRET){
    throw new Error("JWT_secret does not define in environmental variables");
}

const config = {
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET
}

export default config;