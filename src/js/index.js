const { default: axios } = require("axios");

const serverurl = process.env.SERVER_API;
axios.defaults.baseURL = "http://localhost:5000";

axios.get("/products?_page=1&_limit=9").then((response) => {
  const { data, status } = response;
  console.log(data, status);
  if (status < 300) {
    data.forEach((item) => {
      document.getElementById("products").innerHTML += `
         <div class="item">
         <img src="${item.image}">
         <h1 class="product-title">${item.name}</h1>
         <p class="product-price">R$ ${item.price} </p>
         <p class="product-condition">até ${item.parcelamento.join(
           " x de R$ "
         )}</p>
         <button class="product-button">COMPRAR</button>
         </div>
          `;
    });
  }
});

console.log("Dev m3", serverurl);
