let images=["https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/doctorstrangeinthemultiverseofmadness-20220407154639-20765.jpg","https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/fantasticbeaststhesecretsofdumbledore-20220106135936-20667.jpg","https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/avatar-2-titled-avatar:-the-way-of-water-6037-20220428185916.jpg","https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/theadamproject-20220311195514-20811.jpg"]
let images1=["https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/new-poster-of-bhool-bhulaiyaa-2-6025-20220423115236.jpg","https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/theconversion-20211004154306-20432.jpg","https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/meredeshkidharti-20211230120913-19830.jpg","https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/prithviraj-release-date-is-locked-6042-20220504111227.jpg"]

let i=0;
let id;
let container=document.getElementById("container");
let img1=document.createElement("img")
img1.src=images[0];
container.append(img1)
let container2=document.getElementById("container2");
let img2=document.createElement("img")
img2.src=images1[0];
container2.append(img2)
 i=i+1;

function start(){

let container=document.getElementById("container");

 let container2=document.getElementById("container2")
 id=setInterval(function(){
     container.innerHTML=null;
     container2.innerHTML=null;
   if(i===images.length&& i===images1.length){
       i=0;
   }
   


 let image=images[i]
 let image1=images1[i]
 console.log("i:",i)
//  console.log(image)

 let img1=document.createElement("img")
 img1.src=image;
 container.append(img1)
 let img2=document.createElement("img")
 img2.src=image1
 container2.append(img2)
 i++;
},1000)
}



















function pause(){
    clearInterval(id)
}