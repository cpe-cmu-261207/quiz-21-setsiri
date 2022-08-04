const spanGenderIcon = document.getElementById("span-gender-icon");
const divUserCard = document.getElementById("div-user-card");
const imgProfile = document.getElementById("img-profile");
const pName = document.getElementById("p-name");
const pEmail = document.getElementById("p-email");
const pAddress = document.getElementById("p-address");
const btnRandom = document.getElementById("btn-random");
const divLoadingCard = document.getElementById("div-loading-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.result[].picture.large;
}

divUserCard.style.display = "none";

imgProfile.onload = () => {
  divUserCard.style.display = "";
};
