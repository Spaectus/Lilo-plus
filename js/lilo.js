function main_liloplus() {
  const f=document.querySelector("#search-tab-btn__google")
  f.title = f.title.replaceAll("Google", "Startpage")
  f.innerText = "Startpage"
  f.onclick = function(){
    window.location.href = "https://www.startpage.com/do/dsearch?query="+encodeURIComponent(document.querySelector("#lilo-search").value);
  };

}
console.log("Lilo+");
main_liloplus();
