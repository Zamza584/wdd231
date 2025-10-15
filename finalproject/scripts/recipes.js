const retrieveData = async () => {
  try {
    const res = await fetch("data/recipes.json");
    const data = await res.json();

    data.forEach((recipe) => {
      createRecipeCard(recipe);
    });
  } catch (error) {
    console.log(error);
  }
};

retrieveData();

const recipes = document.querySelector("#recipes-cards");

function createRecipeCard(recipe) {
  const card = document.createElement("div");
  card.setAttribute("class", "recipe-card");

  const title = document.createElement("h2");
  const description = document.createElement("p");
  const image = document.createElement("img");
  const author = document.createElement("p");
  const preptime = document.createElement("p");

  title.innerHTML = `${recipe.name}`;
  description.innerHTML = `${recipe.short_description}`;
  image.setAttribute("src", `${recipe.url_img}`);
  image.setAttribute("alt", `${recipe.name}`);
  author.innerHTML = `Author: ${recipe.author}`;
  preptime.innerHTML = `Preperation time: ${recipe.prep_time}`;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(image);
  card.appendChild(author);
  card.appendChild(preptime);

  recipes.appendChild(card);
}
