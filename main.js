function cliente(){
    cliente = prompt("Ingrese su nombre");
}

function genero(){
    genero = prompt("Cual es su genero? \n M para masculino \n F para femenino");
} 

function saludar(){
    if(genero === "M"){
        alert("Bienvenido " + cliente)
    } else{
        alert("Bienvenida " + cliente)
    }
}

function seleccionarProducto(){
    producto = prompt("Elija su producto \n 1: Creatina 300mg \n 2: Proteina 1kg \n 3: Post Training");

    if (producto === "1"){
        alert("Usted selecciono Creatina 300mg")
    } else if (producto === "2") {
        alert("Usted selecciono Proteina 1kg")
    } else {
        alert("Usted selecciono Post training")
    }
}


cliente()
genero()
saludar()
seleccionarProducto()