const router = require('express').Router();
const {
  getThoughts,
  createThoughts,
  deleteThoughts,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtsId').delete(deleteThoughts);

module.exports = router;
