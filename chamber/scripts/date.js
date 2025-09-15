const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastmodified.innerHTML = document.lastModified;
