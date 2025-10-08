const discoverCards = document.querySelector("#discover-cards");

const retrieveSite = async () => {
  try {
    const response = await fetch("./data/sites.json");
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

//localstorage code

//current time
const currentTime = new Date();
localStorage.setItem("Time Visited", currentTime);

//set time visted  --- got help from https://stackoverflow.com/questions/49304457/check-if-it-is-user-is-visiting-first-time-with-javascript#:~:text=function%20userfirstcheck(,%3D%22userfirstcheck
let visited = localStorage.getItem("visited");
if (visited == null) {
  localStorage.setItem("visited", 1);
  document.querySelector("#user-message").innerHTML =
    "Welcome! to the discover page! ";
  visited++;
  localStorage.setItem("visited", visited);
} else {
  document.querySelector("#user-message").innerHTML =
    "We are glad to see you again! ";
  visited++;
  localStorage.setItem("visited", visited);
}
