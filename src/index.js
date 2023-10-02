const messages = [
    "El motas",
    "La Paola",
    "Con la wera",
    "Mejor Dupla",
    "Gucas and Join",
    "Sobrino legitimo",
    "Ya o todavía",
    "La mas mongola",
    "Las chamomarmotas",
    "Ekuiko",
    "Kuor juagor",
    "Motin",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };