const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const getProphetData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
};

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector("#cards");

  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const dateBirth = document.createElement("p");
    const placeBirth = document.createElement("p");

    card.classList.add("card");

    fullName.innerHTML = `${prophet.name} ${prophet.lastname} `;
    dateBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    placeBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute("src", `${prophet.imageurl}`);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(dateBirth);
    card.appendChild(placeBirth);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
