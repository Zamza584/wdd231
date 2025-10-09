const discoverCards = document.querySelector("#discover-cards");

const retrieveSite = async () => {
  try {
    const response = await fetch("./data/sites.json"); // note: I used chat gpt to get description for each of the locations
    const result = await response.json();
    result.forEach((item) => {
      createDiscoverCard(item);
    });
  } catch (error) {
    console.log(error);
  }
};

function createDiscoverCard(site) {
  const card = document.createElement("div");
  card.classList.add("discover-card");
  const title = document.createElement("h2");
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const address = document.createElement("address");
  const description = document.createElement("p");
  const btn = document.createElement("button");

  title.innerHTML = `${site.name}`;
  figure.appendChild(image);

  image.setAttribute("src", `${site.url}`);
  image.setAttribute("alt", `${site.name}`);
  image.width = 300;
  image.height = 200;
  address.innerHTML = `${site.address}`;
  address.setAttribute("class", "address");
  description.innerHTML = `${site.description}`;
  description.setAttribute("class", "description");
  btn.setAttribute("class", "btn");
  btn.innerHTML = "Learn More";

  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(address);
  card.appendChild(description);
  card.appendChild(btn);

  discoverCards.appendChild(card);
}

retrieveSite();

//set current time when visited the site

const currentTime = new Date();

function checkLastVisited(currentTime) {
  const msToDays = 86400000;

  const lastVisited = localStorage.getItem("date-last-visited");

  if (lastVisited == null) {
    localStorage.setItem("date-last-visited", currentTime.getTime());
  }

  const visited = new Date(parseInt(lastVisited));

  const daysSinceLastVisit = (visited.getTime() - Date.now()) / msToDays;

  if (daysSinceLastVisit.toFixed(0) < 1) {
    document.querySelector("#user-message").innerHTML =
      "Back so soon! Awesome!";
  } else {
    document.querySelector(
      "#user-message"
    ).innerHTML = `Your last visited ${daysSinceLastVisit.toFixed(0)} days ago`;
  }
}

checkLastVisited(currentTime);

//set time visted  --- got help from https://stackoverflow.com/questions/49304457/check-if-it-is-user-is-visiting-first-time-with-javascript#:~:text=function%20userfirstcheck(,%3D%22userfirstcheck

let visited = localStorage.getItem("visited");

if (visited == null) {
  localStorage.setItem("visited", 1);
  document.querySelector("#user-message").innerHTML =
    "Welcome! Let us know if you have any questions.";
  visited++;
  localStorage.setItem("visited", visited);
} else {
  visited++;
  localStorage.setItem("visited", visited);
}
