const container = document.querySelector(".container");
const coffees = [






    {
	  ir: "images/coffee50.webp",
    name: "Inventore",
    image: "images/coffee50.webp"
  },
  {
	  ir: "images/coffee51.webp",
    name: "Perspiciatis",
    image: "images/coffee51.webp"
  },
  {
	  ir: "images/coffee52.webp",
    name: "Voluptatem",
    image: "images/coffee52.webp"
  },
  {
	  ir: "images/coffee53.webp",
    name: "Explicabo",
    image: "images/coffee53.webp"
  },
  {
	  ir: "images/coffee54.webp",
    name: "Rchitecto",
    image: "images/coffee54.webp"
  },
  {
	  ir: "images/coffee55.webp",
    name: " Beatae",
    image: "images/coffee55.webp"
  },
  {
	  ir: "images/coffee56.webp",
    name: " Vitae",
    image: "images/coffee56.webp"
  },
  {
	  ir: "images/coffee57.webp",
    name: "Inventore",
    image: "images/coffee57.webp"
  },
  {
	  ir: "images/coffee58.webp",	  
    name: "Veritatis",
    image: "images/coffee58.webp"
  }
  
  
  






];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ ir, name, image }) =>
      (output += `
              <div class="card">
			  <a class="link" href="${image}">
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
