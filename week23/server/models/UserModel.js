import mongoose from "Mongoose";

const UserSchema = new mongoose.Schema ( {
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique:true
    },
    password : {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true}
);

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;