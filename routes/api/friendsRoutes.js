const router = require('express').Router();
const {
  getFriends,
  createFriends,
  deleteFriends,
} = require('../../controllers/friendsController');

router.route('/').get(getFriends).post(createFriends);

router.route('/:friendsId').delete(deleteFriends);

module.exports = router;
