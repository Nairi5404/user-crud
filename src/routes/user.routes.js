const { Router } = require("express");
const {
 getUsers,
 getUserDetails,
 updateUserDetails,
 deleteUser,
 createUser,
} = require("../controllers/user/user.controller");
const { userValidation } = require("../controllers/user/user.validator");

const router = Router();

router.post("/create", userValidation, createUser);
router.post("/", getUsers);
router.get("/:id", getUserDetails);
router.put("/update/:id", updateUserDetails);
router.delete("/delete/:id", deleteUser);

module.exports = router;
