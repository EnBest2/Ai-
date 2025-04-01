const input = document.getElementById("tetelInput");
const btn = document.getElementById("generateBtn");
const container = document.getElementById("cardsContainer");

btn.onclick = () => {
  const text = input.value.trim();
  if (!text) return alert("Írj be egy tételt!");
  const cards = generateFlashcards(text);
  container.innerHTML = "";
  cards.forEach(card => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `<strong>${card.question}</strong><br>${card.answer}`;
    container.appendChild(el);
  });
};
