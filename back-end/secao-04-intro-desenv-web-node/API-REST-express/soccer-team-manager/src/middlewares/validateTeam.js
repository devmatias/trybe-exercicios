const { teams } = require('../files/teams.json')

const validateTeam = (req, res, next) => {
  const requiredProperties = ['name', 'initials'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.sendStatus(400); 
  }
};

const existingId = (req, res, next) => {
  const { id } = req.params;
  const existsId = teams.some((team) => team.id === Number(id))
  if(existsId) next()
  res.status(404).json({ message: 'Time não encontrado!' })
}

module.exports = {
  existingId,
  validateTeam
}