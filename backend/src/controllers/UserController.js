const User = require('../models/UserModel');

module.exports = {

  async creteUser(req, res) {
    const { name, age, office } = req.body;

    const user = await User.create({
      name,
      age,
      office
    });

    return res.json(user);
  },

  async listUsers(req, res) {
    const users = await User.find().sort('-createdAt');

    return res.send(users);
  },

  async deleteUser(req, res) {
    const user = await User.findById(req.params.id);

    await user.remove();

    return res.send({ok: true});
  },

  async updateUser(req, res) {
    const { name, age, office } = req.body;
    const user = await User.findById(req.params.id);

    await user.update({
      name,
      age,
      office
    });

    return res.send({ok: true});
  }

}