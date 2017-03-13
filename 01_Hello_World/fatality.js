/*Fork my Github repo for javascript_basics.
Work inside the folder 01_Hello_World by editing the index.html file. You can add your own files if necessary. Open the index file in any browser to visualize your HTML and JS code.
Use a JS framework like jQuery, Bootstrap, etc. Make sure you include them from a CDN in the <script> tag.
Define one or more JS functions that do something visible to page elements; such as moving things around, adding new text, etc. You must use a variable and an array, and include a for-loop somewhere.
Add some buttons or other interactive component - you MUST use the resources from the framework. Clicking the button must call a JS function. You can have multiple buttons.
Commit your changes, push, and create a pull request agains my repo so I can see and grade your creations.
Read up on JavaScript from the W3Schools resources included above or from elsewhere.*/

window.onload = function(){
  
   var buttons = document.getElementById("button1");
    buttons.onclick = function(){
         alert("Noob, Great Choice!");
    };
    
   var button2 = document.getElementById("button2");   //buttons here
    button2.onclick = function(){
         alert("Cyrax, You must Fight Hard!");
    };
    
   var button3 = document.getElementById("button3");
   button3.onclick = function(){
         alert("Great Choice");
    };
    
   var button4 = document.getElementById("button4");
    button4.onclick = function(){
         alert("Great Choice");
        console.log("Done");
    };
    
    var myImgArr = ["hg.png","mks.jpg","jh.jpg"];   //array here
    var index = 0;
    
    function changeImage(){
        image.setAttribute("src",myImgArr[index]);
        index++;
        if(index >= myImgArr.length){
            index = 0;
        }
    }
    
    setInterval(changeImage,3000);
    
    
    
    var results = ["Win","or Lose"];
    var text = "";
    for(var i = 0;i < results.length;i++){
       text += results[i] + " ";
    }
   document.getElementById("loop").innerHTML = text; 
    
   
};  

 

