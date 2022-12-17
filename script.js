let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
};

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
};


function cambiar_parrafo(){
    document.getElementById("edit-quiensoy").style.display="block";
    let texto = document.getElementById("texto-quiensoy").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("texto-quiensoy").innerText=valor;
};

/*function typeWriter() {
    var i=0;
    var txt= "#YoProgramo";
    var speed= 30;

    if (i < txt.length) {
      document.getElementById("logotyping").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
 }*/

 