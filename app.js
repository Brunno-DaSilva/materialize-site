console.log("Ciao Bella!");

//Initializing the sideNav from Materialize
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

//Initializing the slider from Materialize

const elems = document.querySelectorAll(".slider");
M.Slider.init(elems, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000,
});

// // Or with jQuery

// $(document).ready(function () {
//   $(".slider").slider();
// });
