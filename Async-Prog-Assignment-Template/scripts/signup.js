var form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    var data={
        username:form.name.value,
        email:form.email.value,
        firstPassword:form.firstPass.value,
       
    }
    console.log(data)
    localStorage.setItem("userData",JSON.stringify(data));
    alert("Account created Successfully")
    window.location.href="login.html"
    
})