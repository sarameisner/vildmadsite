// Opretter en URLSearchParams-objekt baseret på de parametre, der er til stede i URL'en for den aktuelle side.
const urlParams = new URLSearchParams(window.location.search);

// Henter værdien af parameteren "Season" fra URL'en.
const season = urlParams.get("Season");

// Opretter en GET-anmodning til en ekstern API for at hente svampe data baseret på sæsonen.
fetch(`https://auovcezakqpcoioboayh.supabase.co/rest/v1/mushrooms?season=cs.%5B%22${season}%22%5D`, {
  method: "GET",
  headers: {
    // Angiver API-nøglen for at få adgang til API'en.
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b3ZjZXpha3FwY29pb2JvYXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDgwODMsImV4cCI6MjAyMzMyNDA4M30.ZxCJpVXosrQH-OGiUf8i4eqp40d9J5cephOQLbwVyPc",
  },
})
  // Behandler svaret fra API'en som JSON.
  .then((response) => response.json())

  // Kalder funktionen 'dateRecevied' med de modtagne data.
  .then(dateRecevied);

// Funktionen, der udføres, når dataene modtages fra API'en.
function dateRecevied(data) {
  // Udskriver de modtagne data til konsollen.
  console.log(data);

  // Kalder funktionen 'svampeliste' for hvert element i de modtagne data.
  data.forEach(svampeliste);

  document.querySelector(".heading").textContent = season;
}

// Funktionen, der bruges til at generere HTML-elementer baseret på svampedataene og tilføje dem til DOM'en.
function svampeliste(svampe) {
  // Udskriver svampe-dataene til konsollen.
  console.log(svampe);

  // Henter en klon af et HTML-template fra DOM'en.
  const template = document.querySelector("template").content;

  // Kloner det valgte template.
  const clone = template.cloneNode(true);

  // Gemmer ID'en på svampen i en variabel.
  const id = svampe.id;

  // Opdaterer linket for hver svamp for at pege på en individuel side for den pågældende svamp.
  clone.querySelector(".enkeltesvampe").href = `svamp.html?Season=${season}&id=${id}`;

  // Opdaterer titlen for hver svamp.
  clone.querySelector("h2").textContent = svampe.name;

  // Opdaterer billedkilden for hver svamp.
  clone.querySelector("img").src = svampe.image;

  // Tilføjer det klonede HTML-element til DOM'en.
  const parentElement = document.querySelector(".main_svampeliste");
  parentElement.appendChild(clone);
}
