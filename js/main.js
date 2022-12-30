const api = "https://thronesapi.com/api/v2/Characters";
const w = document.querySelector(".w");
w.style.display = "none";

async function get() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    display(data);
  } catch (e) {
    console.log("Error", e.message);
  }
}
function display(data) {
  const select = document.querySelector("select");
  select.innerHTML = `
  <option value="">choose your character</option>
${data.map(
  (e) => `<option value="${e.id}">${e.id + 1}- ${e.fullName} </option>`
)}
 `;
}
async function getchar(e) {
  if (e === "") {
    w.style.display = "none";
  } else {
    w.style.display = "block";
    const response = await fetch(api + `/${e}`);
    const data = await response.json();
    document.querySelector("div h2").innerHTML = data.fullName;
    document.querySelector("div span").innerHTML = `  ${data.family}`;
    document.querySelector("div p").innerHTML = ` ${data.title}`;
    document.querySelector("div IMG").src = data.imageUrl;
  }
}

get();
