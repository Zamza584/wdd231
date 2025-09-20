const memberCards = document.querySelector("#member-cards");

const retrieveMembers = async () => {
  try {
    const response = await fetch("./data/members.json");
    const result = await response.json();

    //filters member list level 2 or 3
    let members = result.members.filter(
      (member) => member.membership_level == 2 || member.membership_level == 3
    );

    let rMembers = members
      .sort(() => {
        return 0.5 - Math.random(); //got inspiration from https://stackoverflow.com/questions/65386313/js-how-can-i-randomly-pull-3-unique-elements-from-an-array-except-for-the-0th#:~:text=The%20following%20should%20do%20it%20for%20you.%20slice(1)%20will%20return%20an%20array%20without%20the%20first%20element.%20The%20sort%20method%20will%20generally%20randomize%20the%20sorting%20of%20the%20array.%20Finally%2C%20slice(0%2C%203)%20will%20grab%20the%20first%20three%20elements%20of%20the%20randomly%20sorted%20array.
      })
      .slice(0, 3);

    displaySpotlightMemberCards(rMembers);
  } catch (err) {
    console.log(err.message);
  }
};

retrieveMembers();

function displaySpotlightMemberCards(membersList) {
  membersList.forEach((member) => {
    if (member.membership_level == 2 || member.membership_level == 3) {
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
      logo.setAttribute("alt", `${member.name} logo`);

      companyName.innerHTML = `<strong>${member.name}</strong>`;
      address.innerHTML = `${member.address}`;
      phoneNumber.innerHTML = `${member.phone_number}`;
      websiteUrl.innerHTML = `${member.website_url}`;
      websiteUrl.setAttribute("href", member.website_url);
      memberShipLevel.innerHTML = `Membership level: ${member.membership_level}`;

      memberCard.appendChild(logo);
      memberCard.appendChild(companyName);
      memberCard.appendChild(address);
      memberCard.appendChild(phoneNumber);
      memberCard.appendChild(websiteUrl);
      memberCard.appendChild(memberShipLevel);

      memberCards.appendChild(memberCard);
    }
  });
}
