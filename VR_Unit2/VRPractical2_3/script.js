let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 200; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let a = rnd(0,360)
    let cloud = new Cloud(x, 0 , z);
    // cloud.obj.setAttribute("rotation",{x:x, y:y, z:z});
  }

})
