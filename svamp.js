const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("Season");
const id = urlParams.get("id");

fetch(`https://auovcezakqpcoioboayh.supabase.co/rest/v1/mushrooms?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b3ZjZXpha3FwY29pb2JvYXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDgwODMsImV4cCI6MjAyMzMyNDA4M30.ZxCJpVXosrQH-OGiUf8i4eqp40d9J5cephOQLbwVyPc",
  },
})
  .then((response) => response.json())
  .then((data) => singleSvamp(data));

document.querySelector(".backbuttonlink").href = `svampeliste.html?Season=${season}`;

function singleSvamp(enkeltSvamp) {
  const svamp = enkeltSvamp[0];
  console.log(svamp);

  document.querySelector("h1").textContent = svamp.name;
  document.querySelector(".season").textContent = svamp.season.join(", ");
  document.querySelector(".description").textContent = svamp.description;
  document.querySelector(".location_description").textContent = svamp.location_description;
  document.querySelector(".location").textContent = svamp.location.join(", ");
  document.querySelector(".months").textContent = svamp.months.join(", ");
  document.querySelector(".sankning").textContent = svamp.sankning;
  document.querySelector(".handling").textContent = svamp.handling;
  document.querySelector(".application").textContent = svamp.application;
  document.querySelector(".storage").textContent = svamp.storage;
  document.querySelector(".replacement").textContent = svamp.replacement;
  document.querySelector(".recipes_image").src = svamp.recipe_image;
}
