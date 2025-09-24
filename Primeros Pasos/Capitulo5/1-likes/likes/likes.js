let votosMinecraft=0;
let votosRoblox=0;

sumarLikeMinecraft=function(){
    let compResultadoMinecraft
    compResultadoMinecraft=document.getElementById("lblMinecraft")
    votosMinecraft=votosMinecraft+1
    compResultadoMinecraft.innerText=votosMinecraft

    
}
sumarCorazonMinecraft=function(){
    let compResultadoMinecraft
    compResultadoMinecraft=document.getElementById("lblMinecraft")
    votosMinecraft=votosMinecraft+5
    compResultadoMinecraft.innerText=votosMinecraft
  
}
restarLikeMinecraft=function(){
    let compResultadoMinecraft
    compResultadoMinecraft=document.getElementById("lblMinecraft")
    votosMinecraft=votosMinecraft-1
    compResultadoMinecraft.innerText=votosMinecraft
  
}
sumarLikeRoblox=function(){
    let compResultadoRoblox
    compResultadoRoblox=document.getElementById("lblRoblox")
    votosRoblox=votosRoblox+1
    compResultadoRoblox.innerText=votosRoblox
   
}
sumarCorazonRoblox=function(){
    let compResultadoRoblox
    compResultadoRoblox=document.getElementById("lblRoblox")
    votosRoblox=votosRoblox+5
    compResultadoRoblox.innerText=votosRoblox
   
}
restarLikeRoblox=function(){
  let compResultadoRoblox
    compResultadoRoblox=document.getElementById("lblRoblox")
    votosRoblox=votosRoblox-1
    compResultadoRoblox.innerText=votosRoblox
}