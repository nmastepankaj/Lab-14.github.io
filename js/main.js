function openNav() {
    document.getElementById("mySidenav").style.width = "50vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function backDrop(){
      document.getElementById("backdrop_theme").style.display = "none";
      document.getElementById("lab_website_theme").style.display = "none";
  }
  function showTheme(){
    document.getElementById("backdrop_theme").style.display = "block";
    document.getElementById("lab_website_theme").style.display = "block";
}