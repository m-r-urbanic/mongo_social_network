const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  deleteUser,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId').delete(deleteUser);

module.exports = router;
