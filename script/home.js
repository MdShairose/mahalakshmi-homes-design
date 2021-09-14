let slideIndex = 0,present,myVar;
let matters = ["<p>Located in the most desired area of <br>Manikonda, Mahalakshmi’s Avasa has <br>3-Bedroom and 2-Bedroom flats ranging <br>from 1100 sft to 1700 sft. The apartment is <br>nearby Gachibowli IT corridor and Financial <br>District 1.</p>" ,
               "<p>Located in Bachupally, Mahalakshmi’s <br>Astoria offers 3-Bedroom and 2- Bedroom <br>flats ranging from 1125 sft to 1350 sft. <br>The apartment’s proximity to engineering <br>colleges and international schools makes it a <br>very desirable location and an easy <br>commute to Hi-Tech city.</p>",
               "<p>Spread across 8 Acres, located on <br>Karakambadi Road, Tirupati has 50 luxurious <br>villas that are East, West and North <br>Facing ranging from 2200sft to 3600sft. <br>Conveniently located within 10 mins from Bus <br>stand and has all the amenities including <br>a club house, swimming pool and <br>children’s play area.</p>"];

let i=1;

var counter = 1;
setInterval(function(){
  next();
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 10000);


function next()
{
  let one,two,three,des;
  one = document.getElementById('image_one');
  two = document.getElementById('image_two');
  three = document.getElementById('image_three');
  des = document.getElementById('description');
  value = document.getElementById('value');
  switch (slideIndex)
  {
    case 0: three.style.opacity="0";
            three.className ="third_image";
            one.className ="first_image";
            one.style.opacity="1.0";
            two.className ="second_image";
            des.innerHTML = matters[0];
            value.innerHTML ='1/3';
            three.style.opacity="0.5";
            slideIndex++;
      break;
    case 1: one.style.opacity="0";
            one.className ="third_image";
            two.className ="first_image";
            two.style.opacity="1.0";
            three.className ="second_image";
            des.innerHTML = matters[1];
            value.innerHTML ='2/3';
            one.style.opacity="0";
            one.style.opacity="0.2";
            one.style.opacity="0.5";
            slideIndex++;
            break;
    case 2: two.style.opacity="0";
            two.className ="third_image";
            one.className ="second_image";
            three.className ="first_image";
            three.style.opacity="1.0";
            des.innerHTML = matters[2];
            value.innerHTML ='3/3';
            two.style.opacity="0";
            two.style.opacity="0.2";
            two.style.opacity="0.5";
            slideIndex=0;
            break;
  }


}
