var form = document.querySelector("form");
var movieData=JSON.parse(localStorage.getItem("movieData"))||[]
form.addEventListener("submit",function(event){
    event.preventDefault();
    movieData.innerHTML=null;
    
    var data={
        movieName:form.name.value,
        date:form.date.value,
        image:form.ImgUrl.value,
        rating:form.rating.value,
       
    }
    console.log(data)
    movieData.push(data)
    localStorage.setItem("movieData",JSON.stringify(movieData));
   
    
    
})