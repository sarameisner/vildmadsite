const urlParams = new URLSearchParams(window.location.search);

const season = urlParams.get("Season");

console.log(season);

//fetch(`https://auovcezakqpcoioboayh.supabase.co/rest/v1/mushrooms?season=eg.${season[0]}`, {
fetch(`https://auovcezakqpcoioboayh.supabase.co/rest/v1/mushrooms?season=cs.%5B%22${season}%22%5D`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b3ZjZXpha3FwY29pb2JvYXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDgwODMsImV4cCI6MjAyMzMyNDA4M30.ZxCJpVXosrQH-OGiUf8i4eqp40d9J5cephOQLbwVyPc",
  },
})
  .then((response) => response.json())
  .then(dateRecevied);

function dateRecevied(data) {
  //We have date
  console.log(data);
  data.forEach(svampeliste);
}

function svampeliste(svampe) {
  console.log(svampe);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  const id = svampe.id;

  clone.querySelector(".enkeltesvampe").href = `svamp.html?id=${id}`;
  clone.querySelector("h2").textContent = svampe.name;
  clone.querySelector("img").src = svampe.image;

  const parentElement = document.querySelector("main");
  parentElement.appendChild(clone);
}
