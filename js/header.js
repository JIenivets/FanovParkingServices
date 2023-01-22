fetch("https://jienivets.github.io/FanovParkingServices/font/assets/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

// fetch("./footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
//   });
