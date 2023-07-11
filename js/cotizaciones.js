const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const btnEnviar = document.getElementById('btn-enviar');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    cedulaid: /^[0-9]+$/, //Solo números del 0 al 9
    direccion: /^[a-zA-Z0-9_.+-]+[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/,
    precVehiculo: /^[0-9]+$/
}

const campos = {
    nombre: false,
    apellido: false,
    cedulaid: false,
    direccion: false,
    precVehiculo: false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombres');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellidos');
            break;
        case "cedulaid":
            validarCampo(expresiones.cedulaid, e.target, 'cedula');
            break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "precvehiculo":
            validarCampo(expresiones.precVehiculo, e.target, 'precvehiculo');
            break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`${campo}Ingr`).style.backgroundColor = "rgba(60, 229, 75, 0.5)";
    }else{
        document.getElementById(`${campo}Ingr`).style.backgroundColor = "rgba(255, 99, 71, 0.8)";
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
}); 

const obtenerDatos = ()=>{
    const nombre = document.getElementById('nombresIngr').value;
    const apellido = document.getElementById('apellidosIngr').value;
    const cedula = document.getElementById('cedulaIngr').value;
    const tipoVehiculo = document.getElementById('vehiculoSelect').value;
    const precio = document.getElementById('precvehiculoIngr').value;

    const pre = parseFloat(precio);
    let preFinal;

    if(tipoVehiculo === "Ford Fiesta"){
        preFinal = pre - (pre * 0.05);
    }else{
        preFinal = pre - (pre * 0.10);
    }

    alert(`Datos del cliente:\nNombre: ${nombre}\nApellido: ${apellido}\nCedula: ${cedula}\nPrecio Final: ${preFinal}`);
}

btnEnviar.addEventListener('click', obtenerDatos);