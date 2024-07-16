const container = document.querySelector(".container");
const coffees = [


  {
	  ir: "inicio1.html",
    name: "PORTADA_musical",
    image: "images/coffee12.webp"
  },
  {
	  ir: "inicio1.html",
    name: "Perspiciatis",
    image: "images/coffee8.webp"
  },
  {
	  ir: "inicio1.html",
    name: "Voluptatem",
    image: "images/coffee9.webp"
  },
  {
	  ir: "inicio1.html",
    name: "Explicabo",
    image: "images/coffee10.webp"
  },
  {
	  ir: "inicio1.html",
    name: "Rchitecto",
    image: "images/coffee11.webp"
  },

  {
	  ir: "inicio1.html",
    name: " Vitae",
    image: "images/coffee13.webp"
  }







];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ ir, name, image }) =>
      (output += `
              <div class="card">
			  <a class="link" href="${ir}">
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
