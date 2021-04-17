  // --bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-light:#f8f9fa;--bs-dark:#212529;
  var donen = document.querySelector(':root');

  const changedefault  = [["--lab-main-100","#CFE2FF"],["--lab-main-200","#9EC5FE"],["--lab-main-300","#6EA8FE"],["--lab-main-400","#3D8BFD"],["--lab-main-500","#0D6EFD"],["--lab-main-600","#0A58CA"],["--lab-main-700","#052C65"],["--lab-main-800","#052C65"],["--lab-main-900","#D63384"],["--lab-white","#fff"],["--lab-black","#000"]];
  const greenmode  = [["--lab-main-100","#D2F4EA"],["--lab-main-200","#A6E9D5"],["--lab-main-300","#4DD4AC"],["--lab-main-400","#20C997"],["--lab-main-500","#1AA179"],["--lab-main-600","#1AA179"],["--lab-main-700","#0D503C"],["--lab-main-800","#06281E"],["--lab-main-900","#000000"],["--lab-white","#fff"],["--lab-black","#000"]];
  const redmode  = [["--lab-main-100","#F8D7DA"],["--lab-main-200","#EA868F"],["--lab-main-300","#EA868F"],["--lab-main-400","#E35D6A"],["--lab-main-500","#DC3545"],["--lab-main-600","#842029"],["--lab-main-700","#842029"],["--lab-main-800","#2C0B0E"],["--lab-main-900","#198754"],["--lab-white","#fff"],["--lab-black","#000"]];
  const pinkmode  = [["--lab-main-100","#F7D6E6"],["--lab-main-200","#EFADCE"],["--lab-main-300","#DE5C9D"],["--lab-main-400","#DE5C9D"],["--lab-main-500","#AB296A"],["--lab-main-600","#AB296A"],["--lab-main-700","#801F4F"],["--lab-main-800","#2B0A1A"],["--lab-main-900","#FFFFFF"],["--lab-white","#fff"],["--lab-black","#000"]];
  const orangemode  = [["--lab-main-100","#FECBA1"],["--lab-main-200","#FEB272"],["--lab-main-300","#FEB272"],["--lab-main-400","#FD7E14"],["--lab-main-500","#FD7E14"],["--lab-main-600","#984C0C"],["--lab-main-700","#653208"],["--lab-main-800","#331904"],["--lab-main-900","#FFFFFF"],["--lab-white","#fff"],["--lab-black","#000"]];
  const purplemode  = [["--lab-main-100","#C5B3E6"],["--lab-main-200","#A98EDA"],["--lab-main-300","#8C68CD"],["--lab-main-400","#6F42C1"],["--lab-main-500","#59359A"],["--lab-main-600","#432874"],["--lab-main-700","#2C1A4D"],["--lab-main-800","#160D27"],["--lab-main-900","#FFFFFF"],["--lab-white","#fff"],["--lab-black","#000"]];
  const darkmode = [["--lab-main-100","#212529"],["--lab-main-200","#343A40"],["--lab-main-300","#495057"],["--lab-main-400","#6C757D"],["--lab-main-500","#ADB5BD"],["--lab-main-600","#CED4DA"],["--lab-main-700","#DEE2E6"],["--lab-main-800","#E9ECEF"],["--lab-main-900","#F8F9FA"],["--lab-white","#000"],["--lab-black","#fff"]];
  function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(donen);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--bs_dark'));
  }
  
  // myFunction_get();
  function set(){
      for (let i = 0; i < changeBlue.length; i++) {
          donen.style.setProperty(changeBlue[i][0], changeBlue[i][1]);
      }
  }
  function darkMode(){
    changeTheme(darkmode);
    document.body.style.background="#000";
  }
  function defaultMode(){
    changeTheme(changedefault);
    document.body.style.background="#fff";
  }

  function greenMode(){
    changeTheme(greenmode);
    document.body.style.background="#fff";
  }

  function redMode(){
    changeTheme(redmode);
    document.body.style.background="#fff";
  }

  function pinkMode(){
    changeTheme(pinkmode);
    document.body.style.background="#fff";
  }
  function orangeMode(){
    changeTheme(orangemode);
    document.body.style.background="#fff";
  }
  function purpleMode(){
    changeTheme(purplemode);
    document.body.style.background="#fff";
  }

  function changeTheme(changetheme){
    for (let i = 0; i < changetheme.length; i++) {
        donen.style.setProperty(changetheme[i][0],changetheme[i][1]);
    }
  }
  // set();