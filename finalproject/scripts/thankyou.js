const myInfo = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

results.innerHTML = `<h2>Information Saved:</h2>
                    <p>first name: ${myInfo.get("first")}</p> 
                    <p>last name: ${myInfo.get("last")}</p> 
                    <p>email: ${myInfo.get("email address")}</p> 
                    <p>phone number: ${myInfo.get("phone number")}</p> 
                    `;
