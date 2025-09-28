const myInfo = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

results.innerHTML = `<p>Your current information:</p>
                    <p>${myInfo.get("first")} ${myInfo.get("last")}</p>
                    <p>Organization: ${myInfo.get("organization Title")}</p>
                    <p>Email Address: ${myInfo.get("email address")}</p>
                    <p>Phone number: ${myInfo.get("phone number")}</p>
                    <p>Business name: ${myInfo.get("business name")}</p>
                    <p>Membership: ${myInfo.get("membership")}</p>
                    <p>Description: ${myInfo.get("description")}</p>
`;

// http://127.0.0.1:59169/chamber/thankyou.html?first=qwe&last=qweqw&organization+Title=eqweqweee&email+address=qweqw%40gmail.com&phone+number=22313131&business+name=qweqweqweqwe&membership=np-membership&description=+eee
