class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let fog = document.createElement("a-sphere");
    fog.setAttribute("color","white");
    fog.setAttribute("opacity",0.9);
    fog.setAttribute("position","0 10.5 0");
    fog.setAttribute("height","2");
    this.obj.append( fog );

    let fog1 = document.createElement("a-sphere");
    fog1.setAttribute("color","white");
    fog1.setAttribute("opacity",0.9);
    fog1.setAttribute("position","1 10.5 0");
    fog1.setAttribute("height","2");
    this.obj.append( fog1 );

    let fog2 = document.createElement("a-sphere");
    fog2.setAttribute("color","white");
    fog2.setAttribute("opacity",0.9);
    fog2.setAttribute("position","-1 10.5 0");
    fog2.setAttribute("height","2");
    this.obj.append( fog2 );
  
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}