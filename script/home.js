var slideIndex = 0,present,myVar;
let matters = ["<p>Located in the most desired area of <br>Manikonda, Mahalakshmi’s Avasa has <br>3-Bedroom and 2-Bedroom flats ranging <br>from 1100 sft to 1700 sft. The apartment is <br>nearby Gachibowli IT corridor and Financial <br>District 1.</p>" ,
               "<p>Located in the most desired area of <br>Manikonda, Mahalakshmi’s Avasa has <br>3-Bedroom and 2-Bedroom flats ranging <br>from 1100 sft to 1700 sft. The apartment is <br>nearby Gachibowli IT corridor and Financial <br>District 2.</p>",
               "<p>Located in the most desired area of <br>Manikonda, Mahalakshmi’s Avasa has <br>3-Bedroom and 2-Bedroom flats ranging <br>from 1100 sft to 1700 sft. The apartment is <br>nearby Gachibowli IT corridor and Financial <br>District 3.</p>"];
let images = ["./images/sideshow1.png","./images/two.png","./images/three.png"];
showSlides();


function plusSlides()
{
  clearTimeout(myVar);
  slideIndex = (slideIndex-1)+ 1;
  showSlides();
}


function showSlides()
{
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByName("dots");
  var matter = document.getElementById("description");
  var main_image = document.getElementById("main_image");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++)
   {
      dots[i].className = "dot";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className = "dot-selected";

  matter.innerHTML = matters[slideIndex-1];
  console.log(images[slideIndex-1]);
  main_image.src = images[slideIndex-1];

  document.getElementById("value").innerHTML = ((slideIndex-1)+1)+"/3";

  myVar = setTimeout(showSlides, 5000);
}
