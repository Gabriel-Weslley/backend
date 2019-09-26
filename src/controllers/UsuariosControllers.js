const Usuarios = require("../models/Usuarios");
module.exports = {
  async store(req, res) {
    const user = await Usuarios.create(req.body);
    return res.json(user);
  },
  async index(req, res) {
    const user = await Usuarios.findOne({ email: req.params.email });
    return res.json(user);
  }
};
