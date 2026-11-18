let maze = [
  "xTTTTTTTTT--TTTTTTTTTx",
  "x-------------x------x",
  "x--x----xxoToox------x",
  "x----oo--------------x",
  "x--------------T-----x",
  "x---xoT---x-----x----x",
  "x--------------------x",
  "x-----T------TTo-----x",
  "x-----------xxxxx----x",
  "x--xx----o-------xx--x",
  "ooo---xx--TT--xx---ooo",
  "T--T--T--T--T--T--T--T",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})