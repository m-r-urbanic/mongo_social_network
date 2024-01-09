const { Friend, User } = require('../models');

module.exports = {
  async getFriends(req, res) {
        try {
            const friends = await User.find();
            res.json(friends);
        } catch (err) {
            res.status(500).json(err);
        }
  },
  async createFriends(req, res) {
        try {
        const friends = await Friend.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { posts: friends._id } },
            { new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'There is no user to associate this friend with' });
        }

        res.json('A friend has been added to the users list');

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteFriends(req, res) {
        try {
            const friends = await Friend.findOneAndRemove({ _id: req.params.friendId });

            if (!friends) {
                return res.status(404).json({ message: 'This friend does not exist.' });
            }

            res.json({ message: 'Friend deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
