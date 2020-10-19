const Mongoose = require("mongoose");
const Shortid = require('shortid');
let Dayjs = require("dayjs");
const { Schema } = Mongoose;
Dayjs().format();

/* 
Might have collisions 
https://www.npmjs.com/package/shortid
*/

const urlSchema = new Schema({
    id: {
        type: String
    },
    entireUrl: {
        type: String, 
        required: true
    },
    shortenedUrl: {
        type: String,
        default: Shortid.generate
    },
    clicks:{
        type: Number,
        default: 0,
        required: true
    },
    date: {
        type: String,
        default: Dayjs().format('DD/MM/YYYY')
    }
});

module.exports = Mongoose.model('ShortUrl', urlSchema)
