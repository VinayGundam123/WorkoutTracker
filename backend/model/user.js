const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
          validator: function(value){
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
          },
          message: (props) => `${props.value} is not a valid email!`
        },
    },
    password: { type: String, minLength: 6, required: true },
    booleanMatrix: {
        type: [[Boolean]], // 2D array of numbers
        default: function () {
            const dataGroup = [
                [1, 2, 3, 4],  // Example structure (replace with actual data)
                [5, 6, 7, 8],
                [9, 10,11]
            ];
            return dataGroup.map(row => new Array(row.length).fill(false));
        }
    },
    token:String
});

exports.User = mongoose.model('User', UserSchema);

