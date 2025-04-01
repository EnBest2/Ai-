// Egyszerű példamodellezés magyar tételekhez
function generateFlashcards(text) {
  const sentences = text
    .split(/\n|\.|\!/).map(s => s.trim()).filter(s => s.length > 30);
  const cards = [];
  for (let i = 0; i < sentences.length && cards.length < 20; i++) {
    const s = sentences[i];
    const q = "Miről szól ez a részlet?";
    cards.push({ question: q, answer: s });
  }
  return cards;
}
