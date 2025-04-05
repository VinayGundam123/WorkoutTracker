const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommunitySchema = new Schema({
    username: { type: String, required: true },
    level:{type:String},
    text: { type: String, required: true },
    likes: { type: Number,default:0},
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [
        {
          userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          username: String,
          comment: String,
          timestamp: { type: Date, default: Date.now }
        }
    ],
    tags:{type:[String]},
    timestamp: { type: Date, default: Date.now }
});

exports.Community=mongoose.model('Community',CommunitySchema);

