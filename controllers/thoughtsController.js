const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
  },
  async createThoughts(req, res) {
        try {
        const thoughts = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { posts: thoughts._id } },
            { new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'There is no user to associate this thought with' });
        }

        res.json('A thought has been added to your user profile');

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteThoughts(req, res) {
        try {
            const thoughts = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'This thought does not exist.' });
            }

            res.json({ message: 'thought deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
