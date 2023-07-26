let menu = async () => {
  let menu = "";
  let res = await fetch("http://localhost:3004/menu");
  let data = await res.json();
  menu += `<div class="menu">
    <nav>
        <ul>`;
  data.forEach((element) => {
    menu += `
    <li><a href=${element.link}>${element.title}</a></li>
  `;
  });
  menu += `</ul>
    </nav>
    </div>`;
  document.querySelector("section#menuapi").innerHTML = menu;
  document.querySelector("#menutoggle").innerHTML = menu;
};
export default menu;
