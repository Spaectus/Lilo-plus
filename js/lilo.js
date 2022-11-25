function main_liloplus() {
  const div_error = document.querySelector("div.hidden>div.cf-error-details")
  if (div_error!==null){
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    window.location.href = "https://www.startpage.com/do/dsearch?query="+encodeURIComponent(urlParams.get("q"))
    return null
  }
  const f=document.querySelector("#search-tab-btn__google")
  f.title = f.title.replaceAll("Google", "Startpage")
  f.innerText = "Startpage"
  f.onclick = function(){
    window.location.href = "https://www.startpage.com/do/dsearch?query="+encodeURIComponent(document.querySelector("#lilo-search").value);
  };



}
//console.log("Lilo+");
main_liloplus();
