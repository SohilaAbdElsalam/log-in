var logInNameInput= document.getElementById("yourName");
var logInEmailInput= document.getElementById("yourEmail");
var logInPasswordInput= document.getElementById("yourPassword") ;
var btn= document.getElementById("button") ;
var massage= document.getElementById("massage") ;
var error= document.getElementById("error") ;


var usersArray=[];
if(localStorage.getItem("ACC")!==null){
   usersArray =JSON.stringify(localStorage.getItem("ACC"));
   console.log(usersArray);
   
}
 function signUpUser (){
   massage.classList.replace("d-block","d-none");
   error.classList.replace("d-block","d-none");
   for(var i=0 ; i<usersArray.length;i++){
      if(usersArray[i].email===logInEmailInput.value){
         error.classList.replace("d-none","d-block");
         return;
      };
   }
   var usersAcc = {
    name: logInNameInput.value,
    email: logInEmailInput.value,
    password: logInPasswordInput.value,
   };
   usersArray.push(usersAcc);
   console.log(usersArray);
   localStorage.setItem("ACC",JSON.stringify(usersArray))
   massage.classList.replace("d-none","d-block")
}
btn.addEventListener("click" ,signUpUser )