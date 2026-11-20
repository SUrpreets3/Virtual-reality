class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","#569693");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("height",10);
    scene.append(this.obj);

  }
}