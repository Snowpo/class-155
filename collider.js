// Registering component in Target.js

AFRAME.registerComponent("flying-birds", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createHurdle(id, position);
      }
    } ,
  
    createHurdle: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var hurdleEl = document.createElement("a-entity");
  
      hurdleEl.setAttribute("id",id);
      hurdleEl.setAttribute("position",position);
      
      hurdleEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");
      
      hurdleEl.setAttribute("scale",{ x:500, y:500, z:500 });   
      hurdleEl.setAttribute("static-body",{shape: "sphere",sphereRadius: 5});
      hurdleEl.setAttribute("animation-mixer",{
      
      })
      ringEl.setAttribute("game-play",{elementId:`#${id}`})
      terrainEl.appendChild(hurdleEl);
    }
  });
  
  