const User = require("../models/UserModel");

module.exports = {
  // criando um usuário
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

  //listando todos
  async listUsers(req, res) {
    const users = await User.find().sort("-createdAt");

    if (!users == "") {
      return res.send(users);
    }
  },

  //listando apenas 1
  async getUser(req, res) {
    const user = await User.findById(req.params.id);

    return res.send(user);
  },

  //deletando usuários
  async deleteUser(req, res) {
    const user = await User.findById(req.params.id);

    await user.remove();

    return res.send({ ok: true });
  },

  //atualizando usuário
  async updateUser(req, res) {
    const { name, age, office } = req.body;
    const user = await User.findById(req.params.id);

    await user.updateOne({
      name,
      age,
      office
    });
    return res.send({ menssage: "Atualizado com sucesso!" });
  }
};
