let scene, car, rocket, pokeball;
window.addEventListener("DOMContentLoaded",function() {
scene= document.querySelector("a-scene");
car= document.querySelector("#car"); 
rocket= document.querySelector("#rocket"); 

car.x=0;
car.dx=0.01;

  loop();    
})

function loop(){
  car.a += box.da;
  car.setAttribute("position",{x:0, y:car.a, z:0});
  window.requestAnimationFrame(loop);
}
