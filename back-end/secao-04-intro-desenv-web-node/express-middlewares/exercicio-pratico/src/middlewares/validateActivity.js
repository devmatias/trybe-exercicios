const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "O campo name é obrigatório" });
  if (name.length < 5) return res.status(400).json({ message: "O campo name deve ter pelo menos 4 caracteres" });
  return next();
}

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) return res.status(400).json({ message: "O campo price é obrigatório" });
  if (price >= 0) return res.status(400).json({ message: "O campo price deve ser um número maior ou igual a zero" });
  return next();
}

const validateDescription = (req, res, next) => {
  const { description: {
    createdAt,
    rating,
    difficulty
  } } = req.body;
  if (!description) return res.status(400).json({ message: "O campo description é obrigatório" });
  if (!createdAt) return res.status(400).json({ message: "O createdAt price é obrigatório" });
  if (!rating) return res.status(400).json({ message: "O campo rating é obrigatório" });
  if (!difficulty) return res.status(400).json({ message: "O campo difficulty é obrigatório" });
  const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (pattern.test(createdAt)) return res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  if (rating < 0 || rating > 5) return res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" });
  const difficultyTypes = ["Fácil", "Médio", "Difícil"];
  const isDifficultyValid = difficultyTypes.some((type) => difficulty === type)
  if (isDifficultyValid) return res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });

  return next();
}

module.exports = {
  validateName,
  validatePrice,
  validateDescription
}