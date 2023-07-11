const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const btnEnviar = document.getElementById('btn-enviar');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    hExtras: /^[0-9]+([,][0-9]+)?$/,
}

const campos = {
    nombre: false,
    hExtras: false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombres');
            break;
        case "hExtras":
            validarCampo(expresiones.hExtras, e.target, 'hExtras');
            break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`${campo}Emp`).style.backgroundColor = "rgba(60, 229, 75, 0.5)";
    }else{
        document.getElementById(`${campo}Emp`).style.backgroundColor = "rgba(255, 99, 71, 0.8)";
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
}); 

const obtenerDatos = ()=>{
    const nombre = document.getElementById('nombresEmp').value;
    const cargo = document.getElementById('cargoSelect').value;
    const horasExtras = document.getElementById('hExtrasEmp').value;

    const hExtras = parseFloat(horasExtras);
    let sueldoBase = 0;
    let sueldoTotal;

    if(cargo === "Administrativo"){
        sueldoBase = 700;
    }else if(cargo === "Supervisor"){
        sueldoBase = 650;
    }else if(cargo === "Operario"){
        sueldoBase = 440;
    }else if(cargo === "Control de calidad"){
        sueldoBase = 490;
    }

    sueldoTotal = sueldoBase + (hExtras * 10);

    alert(`Datos del empleado:\nNombre: ${nombre}\nCargo: ${cargo}\nSueldo a recibir: ${sueldoTotal}`);
}

btnEnviar.addEventListener('click', obtenerDatos);