export const validateAuthor = (req, res, next) => {
  const { name, email } = req.body;

if (!name || !email) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({ error: "Datos inválidos" });
  }

if (name.trim() === "" || email.trim() === "") {
    return res.status(400).json({ error: "Los campos no pueden estar vacíos" });
  }

if (!email.includes("@")) {
    return res.status(400).json({ error: "Email inválido" });
  }

  next();
};