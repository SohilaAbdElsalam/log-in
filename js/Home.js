var weluser= document.getElementById("weluser");
var logoutt= document.getElementById("logout");



if( localStorage.getItem("usersname")){
    var username =localStorage.getItem("usersname");
    weluser.innerHTML =` welcome ${username}!`
}
else{
    window.location.href="index.html";
}
function logout(){
    localStorage.removeItem("usersname")
    window.location.href="index.html";
}
logoutt.addEventListener("click" ,login )