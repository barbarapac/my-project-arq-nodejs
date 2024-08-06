var express = require('express');
var router = express.Router();

let users = { items: [] }

router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/cadastrar', (req, res) => {
  users.items.push(req.body)
  res.send('Usuário cadastrado!');
});

router.delete('/:name', (req, res) => {
  const { name } = req.params;
  const index = users.items.findIndex(user => user.name === name);

  index !== -1
    ? res.json({ message: 'Usuário removido com sucesso', user: users.items.splice(index, 1)[0] })
    : res.status(404).json({ message: 'Usuário não encontrado' });
});

module.exports = router;