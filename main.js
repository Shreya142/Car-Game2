canvas=document.getAnimations("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;

background_image="racing_jpg";

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=upload_background;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=upload_background;
    car2_imgTag.src=car2_image;
}
function upload_background()
{
   ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
};
function upload_car1()
{
   ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height)
};
function upload_car2()
{
   ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height)
};
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed=e.keycode;
console.log(keyPressed);
if (keyPressed=="38")
{
    car1_up();
    console.log("up arraow key");
    car2_up();
    console.log("up arraow key");
}
if (keyPressed=="40")
{
    car1_down();
    console.log("down arraow key");
    car2_down();
    console.log("down arraow key");
}
if (keyPressed=="37")
{
    car1_left();
    console.log("left arraow key");
    car2_left();
    console.log("left arraow key");
}
if (keyPressed=="39")
{
    car1_right();
    console.log("right arraow key");
    car2_right();
    console.log("right arraow key");
}
}
function car1_up()
{
    if(car1_y>=0)
    {
        car1_y = car1_y-10;
        console.log("When up arrow is pressed, x="+car1_x+"| y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_down()
{
    if(car1_y<500)
    {
        car1_y = car1_y+10;
        console.log("When up arrow is pressed, x="+car1_x+"| y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_left()
{
    if(car1_x>=0)
    {
        car1_x = car1_x-10;
        console.log("When up arrow is pressed, x="+car1_x+"| y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_right()
{
    if(car1_x<700)
    {
        car1_x = car1_+10;
        console.log("When up arrow is pressed, x="+car1_x+"| y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_up()
{
    if(car2_y>=0)
    {
        car2_y = car_y-10;
        console.log("When up arrow is pressed, x="+car2_x+"| y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_down()
{
    if(car2_y<500)
    {
        car2_y = car2_y+10;
        console.log("When up arrow is pressed, x="+car2_x+"| y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_left()
{
    if(car2_x>=0)
    {
        car2_x = car2_x-10;
        console.log("When up arrow is pressed, x="+car2_x+"| y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_right()
{
    if(car2_x<700)
    {
        car2_x = car2_+10;
        console.log("When up arrow is pressed, x="+car2_x+"| y="+car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
if(car1_x >700)
{
    console.log("car 1 won!!!");
    document.getElementById('game status').innerHTML="Car 1 Won";
}
if(car2_x >700)
{
    console.log("car 2 won!!!");
    document.getElementById('game status').innerHTML="Car 2 Won";
}