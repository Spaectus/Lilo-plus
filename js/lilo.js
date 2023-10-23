function main_liloplus() {
  const search = document.querySelector('input[name="q"]').value;
  const a = document.querySelector('#tabs>a[href^="https://google."]');
  a.href = "https://www.startpage.com/do/dsearch?query="+encodeURIComponent(search);
  a.querySelector("span").innerText = "Startpage";

}
//console.log("Lilo+");
main_liloplus();
