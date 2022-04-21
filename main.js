var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var  blockimageobject=""

function new_image()
{ fabric.Image.fromURL('BirthdayImage.png',function(Img){
    blockimageobject=Img;
    blockimageobject.scaleToWidth(700)
    blockimageobject.scaleToHeight(510)
    blockimageobject.set({
        Top:0,Left:0

    }
     );
     canvas.add(blockimageobject)
})
	
	
}

function playSound(){
x.play()	
}
