document.getElementById("ingresar").addEventListener("click", iniciarSesion);
document.getElementById("btnlogin").addEventListener("click", register);
document.getElementById("cancel").addEventListener("click", cancelar);

//Declarando variables
let btnlogin = document.querySelector(".formcontainer");
let formcontainer = document.querySelector(".formulario");
let logincontainer = document.querySelector(".logincontainer");
let usuario = document.getElementById("username");
let password = document.getElementById("password");

//FUNCIONES

    function iniciarSesion(){
        document.getElementById("seis").style.display = "block";
    }

    function register(){
        if(password.type == "password")
        {
            password.type = "text";
        }
        else
        {
            tipo.type = "password";
        }
}


function cancelar(){
    document.getElementById("seis").style.display = "none";
}