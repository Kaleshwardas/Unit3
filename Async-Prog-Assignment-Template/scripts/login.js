var form=document.querySelector("form")

var userData=JSON.parse(localStorage.getItem("userData"));
form.addEventListener("submit", function(event){
         event.preventDefault();
         var data={
             email:form.email.value,
             firstPass:form.firstPass.value,
         }
         if(userData==null){
             alert("Please create an account")
         }
        else if (userData.email==data.email && userData.password==data.password){
          alert("Login  Successful")
          localStorage.setItem("signin",JSON.stringify(userData));
           window.location.href="dummy.html"
         }
         else{
             alert("User Does not exit")
         }
         

})