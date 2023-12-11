function main_liloplus() {
  const search = document.querySelector('input[name="q"]').value;
  const a = document.querySelector('#tabs>a[href^="https://google."]');
  if (a!=null) {
    // new version of lilo

    if (document.title.startsWith("https://search.lilo.org/?q=")) {
      document.title = search // change page title if irrelevant
    }
    
    a.href = "https://www.startpage.com/do/dsearch?query="+encodeURIComponent(search);
    a.querySelector("span").innerText = "Startpage";
  } else {
    const f = document.querySelector("#search-tab-btn__google")
    f.title = f.title.replaceAll("Google", "Startpage")
    f.innerText = "Startpage"
    f.onclick = function(){
      window.location.href = "https://www.startpage.com/do/dsearch?query="+encodeURIComponent(document.querySelector("#lilo-search").value);
    };
  }

}

main_liloplus();
