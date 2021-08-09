var slideIndex = 0,present,myVar;
let matters = ["<p>Located in the most desired area of <br>Manikonda, Mahalakshmi’s Avasa has <br>3-Bedroom and 2-Bedroom flats ranging <br>from 1100 sft to 1700 sft. The apartment is <br>nearby Gachibowli IT corridor and Financial <br>District 1.</p>" ,
               "<p>Located in Bachupally, Mahalakshmi’s <br>Astoria offers 3-Bedroom and 2- Bedroom <br>flats ranging from 1125 sft to 1350 sft. <br>The apartment’s proximity to engineering <br>colleges and international schools makes it a <br>very desirable location and an easy <br>commute to Hi-Tech city.</p>",
               "<p>Spread across 8 Acres, located on <br>Karakambadi Road, Tirupati has 50 luxurious <br>villas that are East, West and North <br>Facing ranging from 2200sft to 3600sft. <br>Conveniently located within 10 mins from Bus <br>stand and has all the amenities including <br>a club house, swimming pool and <br>children’s play area.</p>"];
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
