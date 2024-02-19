//https://auovcezakqpcoioboayh.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b3ZjZXpha3FwY29pb2JvYXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDgwODMsImV4cCI6MjAyMzMyNDA4M30.ZxCJpVXosrQH-OGiUf8i4eqp40d9J5cephOQLbwVyPc
fetch("https://auovcezakqpcoioboayh.supabase.co/rest/v1/seasons", {
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
  data.forEach(seasons);
}

function seasons(season) {
  console.log(season);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".category").href = `svampeliste.html?Season=${season.season}`;

  clone.querySelector("h2").textContent = season.season;

  const parentElement = document.querySelector("main");
  parentElement.appendChild(clone);
}
