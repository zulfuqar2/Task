let facts = [];
for (let index = 1; index < 6; index++) {
  facts.push(document.querySelector(`#fact${index}`));
  console.log(facts);
}
function getRandomFact() {
  return fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.fact;
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      return "Failed to fetch a cat fact";
    });
}

facts.map(async (elm, index) => {
  elm.textContent = "Loading some interesting fact about cats 🐱...";
  let fact = await getRandomFact()
  elm.textContent = `${index+1}. ${fact}`;
});

