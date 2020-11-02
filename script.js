 //Animations
AOS.init({
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });

//scrollBar
  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("shadowBlur").style.display = "block";
  document.getElementById("shadowBlur").style.position = "fixed"
  document.getElementById("dee").style.display = "none";
  document.getElementById("navigation").style.display = "none";
  document.getElementById("myHeader").setAttribute("style","-webkit-backdrop-filter: blur(0px)");
  document.getElementById("myHeader").setAttribute("style","backdrop-filter: blur(0px)");

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("shadowBlur").style.display = "none";
  document.getElementById("dee").style.display = "block";
  document.getElementById("navigation").style.display = "block";
  document.getElementById("myHeader").setAttribute("style","-webkit-backdrop-filter: blur(10px)");
  document.getElementById("myHeader").setAttribute("style","backdrop-filter: blur(10px)");
}


