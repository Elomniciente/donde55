const container = document.querySelector(".container");
const coffees = [


  {
	  ir: "#myModal1",
    name: "Menu Musical",
    image: "images/24/coffee1.webp"
  },
  {
	  ir: "#myModal2",
    name: "Hamburgueza",
    image: "images/24/coffee2.webp"
  },
  {
	  ir: "#myModal3",
    name: "Burritos",
    image: "images/24/coffee3.webp"
  },
  {
	  ir: "#myModal4",
    name: "Snack",
    image: "images/24/coffee4.webp"
  },
  {
	  ir: "#myModal5",
    name: "Perros Calientes",
    image: "images/24/coffee5.webp"
  },
  {
	  ir: "#myModal6",
    name: "Papa Fritas",
    image: "images/24/coffee6.webp"
  },
  {
	  ir: "#myModal7",
    name: "Bebidas/Postres",
    image: "images/24/coffee7.webp"
  },

  {
	  ir: "#myModal8",
    name: "Accusantium",
    image: "images/24/coffee8.webp"
  },

  {
	  ir: "#myModal9",	  
    name: "Servicios",
    image: "images/24/coffee9.webp"
  }











];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ ir, name, image }) =>
      (output += `
              <div class="card">
		<a href="#!" class="btn btn-primary" data-toggle="modal" data-target=${ir}> 
                <img class="card--avatar" src=${image} /> 
				</a>
                <h1 class="card--title">${name}</h1>
               
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
