AFRAME.registerComponent("enemies" , {
    init:function(){
       var posx = [2 , -1 ,0] 
       var posz = [-1, -3, -2]
       for(var i=0;i<posx.length;i++){
        var entity = document.createElement("a-entity")
        entity.setAttribute("position" , {x:posx[i] , y:0 ,z:posz[i]})
        entity.setAttribute("gltf-model" , "assets/player/scene.gltf")
        entity.setAttribute("scale",{x:200 ,y:200 ,z:200})
        var scene = document.querySelector("#scene")
        scene.appendChild(entity)
       }
    }
})