
const bcrypt = require('bcrypt');

const  comparePassword = async ( userPassword, dbPassword) => {

    const result = await bcrypt.compare(userPassword, dbPassword);

    return result
}


const  hashPassword = async ( password ) => {

    const result = await bcrypt.hash(password, 10);

    return result
}




module.exports = {
    comparePassword , hashPassword
}