function verificarNombre() {
    let nombreIngresado = document.getElementById("nombre").value.trim();  
    if (nombreIngresado === "") {
      document.getElementById("mensaje1").textContent = "Por favor, ingresa tu nombre.";
    } else {
      let confirmar = confirm("¿El nombre ingresado es correcto: " + nombreIngresado + "?");
  
      if (confirmar) {
        document.getElementById("mensaje1").textContent = "¡Bienvenido, " + nombreIngresado + "!";
        localStorage.setItem("nombre" , nombreIngresado)
      } else {
        document.getElementById("nombre").value = "";
        document.getElementById("mensaje1").textContent = "Por favor, ingresa tu nombre nuevamente.";
      }
    }
  }

  function claseSeleccionada() {
      let selectElement = document.getElementById("clases");
      let claseElegida = selectElement.value;
      document.getElementById("mensaje2").textContent = "Has elegido la clase de " + claseElegida;
   }
   let arrayMascota = []
   let mascotaElegida2 
   function mascotaSeleccionada(){
      let selectElement2 = document.getElementById("mascotas");
      let mascotaElegida = selectElement2.value;
      document.getElementById("mensaje3").textContent = "Genial, este sera tu compañero por el resto de tu aventura. ¿Cual es su nombre?"
      mascotaElegida2 = mascotaElegida
      guardarMascota()
   }
  let mascotaIngresada2
  function nombreMascota(){
      let mascotaIngresada = document.getElementById("nombre2").value.trim();
      mascotaIngresada2 = mascotaIngresada
      document.getElementById("mensaje4").textContent = mascotaIngresada + ", que nombre interesante."
      guardarMascota()
  }
  function guardarMascota(){ 
    let datoMascota = {"tipo" : mascotaElegida2, "nombre" : mascotaIngresada2};
    arrayMascota.push(datoMascota);
    localStorage.setItem("mascotas", JSON.stringify(arrayMascota));
  }

 let arrayClases = [
    {
        clase : "Mago",
        mana : 470,
        fuerza : 120,
        inteligecia : 380,
        destreza : 140,
        resistencia : 270,
    },
    {
        clase : "Guerrero",
        mana : 190,
        fuerza : 390,
        inteligencia : 180,
        destreza : 255,
        resistencia : 430,
    },
    {
        clase : "Arquero",
        mana : 285,
        fuerza : 270,
        inteligencia : 285,
        destreza : 420,
        resistencia : 95,
    },
    {
        clase : "Ladron",
        mana : 100,
        fuerza : 160,
        inteligencia : 470,
        destreza : 440,
        resistencia : 130,
    }
 ]
switch (claseSeleccionada){
  case "Mago" :
    document.textContent = arrayClases[0]
    break;
}
