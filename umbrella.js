class Umb{

constructor(x,y){
this.body=Bodies.rectangle(x,y,50,50,{isStatic:true})
this.image=loadImage("walking_1.png","walking_2.png","walking_3.png",
"walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
this.width=50
this.height=50
World.add(world,this.body)

}

display(){
    var pos=this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,150,150)


}



}