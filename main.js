//funções identificador () {}
function ola(){
   console.log("Seja bem vindo a sala de aula!")
}
//...
//...
//...
//...
//...

// camelCase --> sempre que tiver uma nova palavra começa com MAIUSCULO
function fnValidarIdade(){
   var idade = document.getElementById("idadeUsuario").value

console.log(idade)

   if(idade >= 18){
      alert("Você pode Dirigir!!!")
   }else{
      alert("Você não pode dirigir!!!")
   }
}


function fnValidarVogal(){

   var vogal = document.getElementById("vogalUsuario").value
   

   switch (vogal){

      case "a":
          case "A":
      case "e":
          case "E":
      case "i":
          case "I":
      case "o":
          case "O":
      case "u":
          case "U":
          alert("VOCÊ DIGITOU UMA VOGAL") 
          break;

          default:
            alert("VOCÊ DIGITOU UMA CONSOANTE")
            break;
   }

}

