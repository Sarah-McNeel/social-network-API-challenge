const { Schema, model, Types } = require("mongoose");
const { thoughtSchema } = require("./Thought");
const { reactionSchema } = require("./Reaction")

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "Please provide a Username",
            trim: true,
        },
        email: {
            type: String,
            required: "Please provide an Email",
            unique: true,
            match: [
                /^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})$/,
            ],
        },
        thoughts: [thoughtSchema],
        friends: [this],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual("FriendCount").get(function () {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;