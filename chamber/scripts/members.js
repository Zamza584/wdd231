const memberCards = document.querySelector("#member-cards");

const retrieveMembers = async () => {
  try {
    const response = await fetch("./data/members.json");
    const result = await response.json();
    displayMemberCards(result.members);
  } catch (err) {
    console.error(err.message);
  }
};

retrieveMembers();

function displayMemberCards(membersList) {
  membersList.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");

    const logo = document.createElement("img");
    const companyName = document.createElement("p");
    const address = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const websiteUrl = document.createElement("a");
    const memberShipLevel = document.createElement("p");

    logo.setAttribute("src", member.logo_url);
    logo.setAttribute("width", 100);
    logo.setAttribute("height", 100);
    companyName.innerHTML = `<strong>${member.name}</strong>`;
    address.innerHTML = `${member.address}`;
    phoneNumber.innerHTML = `${member.phone_number}`;
    websiteUrl.innerHTML = `${member.website_url}`;
    websiteUrl.setAttribute("href", member.website_url);
    memberShipLevel.innerHTML = `${member.membership_level}`;

    memberCard.appendChild(logo);
    memberCard.appendChild(companyName);
    memberCard.appendChild(address);
    memberCard.appendChild(phoneNumber);
    memberCard.appendChild(websiteUrl);
    memberCard.appendChild(memberShipLevel);

    console.log(memberCard);

    memberCards.appendChild(memberCard);
  });
}
