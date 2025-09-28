const membership = [
  {
    title: "Non Profit Membership Level",
    desription:
      "This level is for non profit organizations or business searching for better opportunities and support in there area.",
  },
  {
    title: "Bronze Membership Level",
    desription: "Bronze level membership have access to the main ...",
  },
  {
    title: "Silver Membership Level",
    desription: "With a silver member.... ",
  },
  {
    title: "Gold Membership Level",
    desription: "In the gold membership program ...",
  },
];

const memberCards = document.querySelector("#member-cards");
const memberModal = document.querySelector("#member-modal");

membership.forEach((member) => {
  displayCard(member);
});

function displayCard(member) {
  const card = document.createElement("div");
  const title = document.createElement("p");
  const button = document.createElement("button");

  title.innerHTML = `${member.title}`;
  button.innerHTML = "Learn More";
  button.setAttribute("class", "btn");
  button.addEventListener("click", () => {
    displayModal(member);
  });

  card.setAttribute("class", "member-card");
  card.appendChild(title);
  card.appendChild(button);

  memberCards.appendChild(card);
}

function displayModal(member) {
  memberModal.innerHTML = "";
  memberModal.showModal();
  const title = document.createElement("h3");
  const desription = document.createElement("p");
  const closeBtn = document.createElement("button");

  closeBtn.innerHTML = "X";
  title.innerHTML = `${member.title}`;
  desription.innerHTML = `${member.desription}`;

  memberModal.appendChild(title);
  memberModal.appendChild(closeBtn);
  memberModal.appendChild(desription);

  closeBtn.addEventListener("click", () => {
    memberModal.close();
  });
}
