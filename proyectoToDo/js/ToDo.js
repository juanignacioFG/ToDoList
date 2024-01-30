
//CREAMOS VARIABLE CONTADOR


let idCounter =0;   //esta variable global la usaremos despues con el co
 
//CREAMOS CONSTANTE INPUT QUE USAREMOS DESPUES PARA LLAMAR AL INPUT "TEXT" DENTRO DEL FORMULARIO



const input=document.querySelector('input[type="text"]');  //seleccionamos el input del texto


//CREAMOS UNA FUNCION LLAMANDO AL FORMULARIO USERINPUT Y LE ASIGNAMOS AL INPUT QUE ESTA DENTRO DEL FORMULARIO LLAMADO SUBMIT LA FUNCION DE QUE CADA VEZ QUE DEMOS A ENTER O AL INPUT SUBMIT, EN CONSOLA NOS APAREZCA "HOLA GUAPI"


userInput.addEventListener("submit",(event)=>{

    console.log("hola GUAPI");

    addTask();                  //llamamos a la funcion que creamos mas abajo llamada addtask
});


list.addEventListener('click',(event)=>{
   // console.log(event.srcElement.nodeName);

   if(event.srcElement.nodeName=="INPUT"){

    actualizarStats();
   }
    else if(event.srcElement.nodeName=="IMG"){
        borra(event.target.parentNode.id);


    }
    function borra(id){
        let borrartarea= document.getElementById(id);
        list.removeChild(borrartarea);
        actualizarStats();
    }
   
})

//funcion que crea un div en html con con una imagen, un checkbox y que pone tarea uno
//con el += anñadimos tantas veces el div, como usemos la funcion de submit de arriba
//aqui hemos creado una funcion que se llama desde la funcion de arriba

function addTask(){
    idCounter++;                            //creamos contador
    let newvalue= input.value;            //creamos una variable para llamar a input 
    if (input.value !="") {                 //si input value no esta vacio, haz lo siguiente
        

    
   list.innerHTML+=` <div class="task-container" id='${idCounter}'>     

   <label>
       <input type="checkbox">
         ${newvalue}
   </label>

   <img src="img/cubo-de-basura.png" class="close-btn">
   </div>
`
        input.value="";

        actualizarStats();

}
};   

function actualizarStats(){

    let listElement= list.querySelectorAll("div");
    let checkbox= list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML=`tareas pendientes: ${listElement.length} tareas completadas: ${checkbox.length}`;

}