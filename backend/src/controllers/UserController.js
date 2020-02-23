const User = require('../models/UserModel');

module.exports = {

  async creteUser(req, res) {
    const { name, age, office } = req.body;

    let user = await User.findOne({ name });

    if (!user) {
      user = await User.create({
        name,
        age,
        office
      });
    } else {
      return res.send({ menssage: "Usuário já cadastrado" });
    }

    return res.json(user);
  },

  async listUsers(req, res) {
    const users = await User.find().sort('-createdAt');

    if (!users == '') {
      return res.send(users);
    }

  },

  async deleteUser(req, res) {
    const user = await User.findById(req.params.id);

    await user.remove();

    return res.send({ ok: true });
  },

  async updateUser(req, res) {
    const { name, age, office } = req.body;
    const user = await User.findById(req.params.id);

    await user.update({
      name,
      age,
      office
    });
    return res.send({ menssage: "Atualizado com sucesso!" });
  }
}