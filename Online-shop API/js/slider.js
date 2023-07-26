// Select the root elements
const root1 = document.querySelector(".root1");
const root2 = document.querySelector(".root2");
const root3 = document.querySelector(".root3");

// Fetch the data
const fetchData = async () => {
  const response = await fetch("http://localhost:3004/slider");
  const data = await response.json();
  return data;
};

// Populate the HTML for root1
const populateRoot1 = (data) => {
  let html = "";
  data.forEach((elem) => {
    html += `<image src="${elem.id1}" alt="" />`;
  });
  root1.innerHTML = html;
};

// Populate the HTML for root2
const populateRoot2 = (data) => {
  let html = "";
  data.forEach((elem) => {
    html += `<image src="${elem.id2}" alt="" />`;
  });
  root2.innerHTML = html;
};

// Populate the HTML for root3
const populateRoot3 = (data) => {
  let html = "";
  data.forEach((elem) => {
    html += `<image src="${elem.id3}" alt="" />`;
  });
  root3.innerHTML = html;
};


// Fetch the data and populate the HTML
fetchData().then((data) => {
  populateRoot1(data);
  populateRoot2(data);
  populateRoot3(data);
});

