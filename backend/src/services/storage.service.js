const Imagekit = require('@imagekit/nodejs');
require('dotenv').config();

const imagekit = new Imagekit({
    
    privateKey: process.env.IMAGEKITPRIVATEKEY
})

async function uploadImage(buffer) {
   const result = await imagekit.files.upload({
        file: buffer.toString('base64') ,
        fileName: "image.jpg",
    });
    return result;  
}   
module.exports =uploadImage;