const ingresatext= document.getElementById("ingresatext");
const encri= document.getElementById("encri");
const desen= document.getElementById("desen");
const copi= document.getElementById("copi");
const msjf= document.getElementById("msjf");
const muñe = document.getElementById("muñe");
const info= document.getElementById("info");
const dereajust= document.getElementById("dereajust");
let remplazo = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a", "ai"],
    ["u", "ufat"],]

const remplace= (nuevoval)=>{
    msjf.innerHTML = nuevoval;
    muñe.classList.add("oculto")
    muñe.style.display="none";
    ingresatext.value =""
    info.style.display= "none"; 

    copi.style.display="block";

    dereajust.classList.add("ajustar");

    msjf.classList.add("ajustar");

}
encri.addEventListener("click",()=> {
    const texto=ingresatext.value.toLowerCase();
    if (texto != ""){
    function encriptar(newText){
    for( let i = 0; i < remplazo.length; i++ ){
    if (newText.includes(remplazo[i][0])){
        newText = newText.replaceAll(remplazo[i][0], remplazo[i][1]);
        
             };  
        };
    return newText
    };
    remplace(encriptar(texto));
    const textencriptado = encriptar(texto)
}  else {
    alert("ingrese un texto" )
}
    
 });
 desen.addEventListener("click",()=>{
    const texto = ingresatext.value.toLowerCase();
    if (texto != ""){
    function desencriptar(newText){
        for (let i = 0 ; i < remplazo.length; i ++ ){
            if (newText.includes(remplazo[i][1]))
            newText = newText.replaceAll(remplazo[i][1],remplazo[i][0]);
        };
        return newText;
    };
} else {
    alert("ingrese teto")
}
   
    remplace(desencriptar(texto))
 });
 copi.addEventListener("click",()=> {
    let texto=msjf;
    texto.select();
    document.execCommand("copy");
    alert("texto copiado");
    msjf.classList.remove.add("oculto")
    msjf.innerHTML= "";
    muñe.style.display="block";
    info.style.display="block";
    copi.style.display="none";

    dereajust.classList.remove("ajustar");
    msjf.classList.remove("ajustar");
 })