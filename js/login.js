var logInEmailInput= document.getElementById("yourEmail");
var logInPasswordInput= document.getElementById("yourPassword") ;
var btnlogin= document.getElementById("login") ;
var error= document.getElementById("error") ;

var usersArray=[];
if(localStorage.getItem("ACC")!==null){
   usersArray =JSON.stringify(localStorage.getItem("ACC"));
   console.log(usersArray);
   
};

function login(){
    error.classList.replace("d-block","d-none");
    for(var i=0 ; i<usersArray.length;i++){
       if(usersArray[i].email===logInEmailInput.value&&usersArray[i].password===logInPasswordInput.value){
         localStorage.setItem("usersname", usersArray[i].name)
         setTimeout(function(){
            
         } ,1000);
         window.location.href ="Home.html"
        return;
       };

    }
    error.classList.replace("d-none","d-block");

}

btnlogin.addEventListener("click" ,login )

