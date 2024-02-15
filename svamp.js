const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://auovcezakqpcoioboayh.supabase.co/rest/v1/mushrooms?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b3ZjZXpha3FwY29pb2JvYXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDgwODMsImV4cCI6MjAyMzMyNDA4M30.ZxCJpVXosrQH-OGiUf8i4eqp40d9J5cephOQLbwVyPc",
  },
})
  .then((response) => response.json())
  .then((data) => singleSvamp(data));

function singleSvamp(enkeltSvamp) {
  const svamp = enkeltSvamp[0];
  console.log(svamp);
}
