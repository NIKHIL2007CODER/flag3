AFRAME.registerComponent("player-movement",{
    init:function(){
        this.walking()
    },
    walking:function(){
        window.addEventListener("keydown",(e)=>{
            var element = document.querySelector("#char").getAttribute("position")
            if(e.key === "w"){
                document.querySelector("#char").setAttribute("position" , {
                    x:element.x , 
                    y:element.y , 
                    z:element.z-=0.06
                })
            }
            if(e.key === "a"){
                document.querySelector("#char").setAttribute("position" , {
                    x:element.x-=0.06 , 
                    y:element.y , 
                    z:element.z
                })
            }
            if(e.key === "d"){
                document.querySelector("#char").setAttribute("position" , {
                    x:element.x+=0.06 , 
                    y:element.y , 
                    z:element.z
                })
            }
            if(e.key === "s"){
                document.querySelector("#char").setAttribute("position" , {
                    x:element.x , 
                    y:element.y , 
                    z:element.z+=0.06
                })
            }
        })
    }
})