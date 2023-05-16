const validateSignUp = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) return res.status(401).json({ message: "Campos ausentes!" });
  if (name.length < 5) return res.status(400).json({ message: "O campo name deve ter pelo menos 4 caracteres" });
  return next();
}