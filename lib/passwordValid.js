const passwordHash = require('password-hash');

module.exports={
    chechkPassword:(password, hash, salt)=>{
        return passwordHash.verify(password, hash)
    },
    genPassword:(password)=>{
        hashPassword=passwordHash.generate(password)
        console.log(hashPassword)
        return hashPassword;
    }
}