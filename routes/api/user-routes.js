const router = require("express").Router();
const {
    getAllUsers,
    postNewUser,
    getUserById,
    updateUserById,
    deleteUserById,
    postNewFriend,
    deleteFriendById,
} = require("../../controllers/user-controller");

// api/users/
router.route("/").get(getAllUsers).post(postNewUser);

// api/users/ get, update and delete users by id 
router
    .route("/:id")
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

// api/users/ add and delete friends by id 
router
    .route("/:userId/friends/:friendId")
    .post(postNewFriend)
    .delete(deleteFriendById);

module.exports = router;
