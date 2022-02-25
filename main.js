var canvas=new fabric.Canvas("My_canvas");
kishore_y=10;
kishore_x=10;
kishore_object="";
block_object="";
block_width=30;
block_height=30;
function playerupdate(){
fabric.Image.fromURL("player.png",function(Img){
kishore_object=Img;
kishore_object.scaleToWidth(140);
kishore_object.scaleToHeight(140);
kishore_object.set({
    top:kishore_y,
    left:kishore_x
});
canvas.add(kishore_object);
});
}
function blockupdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:kishore_y,
        left:kishore_x
    });
    canvas.add(block_object);
    });
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown (e){
console.log(e);
keypressed=e.keyCode;
if(e.shiftKey==true && keypressed=="80"){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("cw").innerHTML=block_width;
    document.getElementById("ch").innerHTML=block_height;
}

if(e.shiftKey==true && keypressed=="77"){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("cw").innerHTML=block_width;
    document.getElementById("ch").innerHTML=block_height;
}

if(keypressed=="38"){
    console.log("up arrow keypressed");
    up();
}
if(keypressed=="40"){
    console.log("down arrow keypressed");
    down();
}
if(keypressed=="39"){
    console.log("right arrow keypressed");
    right();
}
if(keypressed=="37"){
    console.log("left arrow keypressed");
    left();
}
if(keypressed=="87"){
    console.log("w keypressed");
    blockupdate("wall.jpg");
}
if(keypressed=="65"){
    console.log("t keypressed");
    blockupdate("diamond.jpg");
}
if(keypressed=="84"){
    console.log("t keypressed");
    blockupdate("trunk.jpg");
}
if(keypressed=="89"){
    console.log("y keypressed");
    blockupdate("yellow_wall.png");

}
if(keypressed=="82"){
    console.log("r keypressed");
    blockupdate("roof.jpg");
}
if(keypressed=="67"){
    console.log("c keypressed");
    blockupdate("cloud.jpg");
}
if(keypressed=="76"){
    console.log(" l keypressed");
    blockupdate("light_green.png");
}if(keypressed=="85"){
    console.log("u keypressed");
    blockupdate("unique.png");
}
if(keypressed=="68"){
    console.log("d keypressed");
    blockupdate("dark_green.png");
}
if(keypressed=="71"){
    console.log("g keypressed");
    blockupdate("ground.png");
}
    }
    function up(){
if(kishore_y>=0){
    kishore_y=kishore_y-block_height;
    console.log("x="+kishore_x+"y="+kishore_y);
    canvas.remove(kishore_object);
    playerupdate();
}
    }
function down(){
    if(kishore_y<=460){
        kishore_y=kishore_y+block_height;
        console.log("x="+kishore_x+"y="+kishore_y);
        canvas.remove(kishore_object);
        playerupdate();
    }
}
function right(){
    if(kishore_x<=860){
        kishore_x=kishore_x+block_width;
        console.log("x="+kishore_x+"y="+kishore_y)
        canvas.remove(kishore_object);
        playerupdate();
    }
}
function left(){
    if(kishore_x>=0){
        kishore_x=kishore_x-block_width;
        console.log("x="+kishore_x+"y="+kishore_y)
        canvas.remove(kishore_object);
        playerupdate();
    }
}
