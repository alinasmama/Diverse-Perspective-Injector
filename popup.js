document.getElementById('inject').addEventListener('click', () => {
  const prompt = document.getElementById('prompt').value;

  // Call a future function or API to get a diverse perspective
  const diversePerspective = getDiversePerspective(prompt);

  document.getElementById('results').innerText = diversePerspective;
});

function getDiversePerspective(prompt) {
  // Simple example logic
  if (prompt.toLowerCase().includes("leadership")) {
    return "From a Black feminist lens, leadership centers collective care, not hierarchy. — bell hooks";
  }
  return "Diverse perspective not yet available for this topic.";
}
