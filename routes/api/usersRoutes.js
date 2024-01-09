const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  deleteUser,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);

router.route('/:usersId').get(getSingleUser);

router.route('/:usersId').delete(deleteUser);

module.exports = router;
