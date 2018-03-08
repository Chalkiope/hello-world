// Color Changes

function buttonred(){
    document.getElementById("block1").style.backgroundColor = "red";
}

function buttonorange(){
    document.getElementById("block2").style.backgroundColor = "orange";
}

function buttongreen(){
    document.getElementById("block3").style.backgroundColor = "green";
}

function buttonblue(){
    document.getElementById("block3").style.backgroundColor = "blue";
}

function buttongrey(){
    document.getElementById("block4").style.backgroundColor = "grey";
}

function buttonlightblue(){
    document.getElementById("block5").style.backgroundColor = "lightblue";
}

// Set color by input

function whatevercolor(){
    var x = document.getElementById("textbox").value;
    document.getElementById("block5").style.backgroundColor = x;
}

// Changing size of Block 2

function enlarge(){
    document.getElementById("block2").style.gridRowEnd = "4";
}

function resize(){
    document.getElementById("block2").style.gridRowEnd = "3";
}

// Changing CSS grid to mobile layout

function mobile(){
    document.getElementById("block1").style.gridColumnEnd = "4";
    document.getElementById("block2").style.gridColumnStart = "1";
    document.getElementById("block2").style.gridRowStart = "2";
    document.getElementById("block3").style.gridColumnEnd = "4";
    document.getElementById("block3").style.gridRowStart = "3";
    document.getElementById("block4").style.gridColumnStart = "1";
    document.getElementById("block4").style.gridColumnEnd = "4";
    document.getElementById("block5").style.gridColumnStart = "1";
    document.getElementById("block5").style.gridColumnEnd = "4";
    document.getElementById("block6").style.gridColumnStart = "1";
    document.getElementById("block6").style.gridColumnEnd = "4";
}

// Returning the color value of Block 1

function determinecolor(){
    var x = document.getElementById("block1");
    var y = window.getComputedStyle(x, null).getPropertyValue('background-color');
    document.getElementById("colorblock1").innerHTML = "Block 1 is " +  y;
    
}

// Changing color back and forth in Block 6

function buttonpink(){

    var x = document.getElementById("block6");
    var y = window.getComputedStyle(x, null).getPropertyValue('background-color');
    
    if(y == "rgb(0, 0, 255)"){
        var z = document.getElementById("block6").style.backgroundColor = "pink";
        document.getElementById("colorname").innerHTML = "Block 6 is " +  z;
        document.getElementById("changing_btn").innerHTML = "Change to Blue";
    }

    else{
        var z = document.getElementById("block6").style.backgroundColor = "blue";
        document.getElementById("colorname").innerHTML = "Block 6 is " +  z;
        document.getElementById("changing_btn").innerHTML = "Change to Pink";
    }   
   
}

// Reversing all modifications

/*function reverse(){
    document.getElementById("block1").style.backgroundColor = "";
    document.getElementById("block2").style.backgroundColor = "";
    document.getElementById("block3").style.backgroundColor = "";
    document.getElementById("block4").style.backgroundColor = "";
    document.getElementById("block5").style.backgroundColor = "";
    document.getElementById("block6").style.backgroundColor = "";
    document.getElementById("block2").style.gridRowEnd = "";

    document.getElementById("block1").style.gridColumnEnd = "3";
    document.getElementById("block2").style.gridColumnStart = "3";
    document.getElementById("block2").style.gridRowStart = "1";
    document.getElementById("block3").style.gridColumnEnd = "2";
    document.getElementById("block3").style.gridRowStart = "2";

    document.getElementById("block4").style.gridColumnStart = "initial";
    document.getElementById("block4").style.gridColumnEnd = "initial";
    document.getElementById("block5").style.gridColumnStart = "initial";
    document.getElementById("block5").style.gridColumnEnd = "initial";
    document.getElementById("block6").style.gridColumnStart = "initial";
    document.getElementById("block6").style.gridColumnEnd = "initial";
}*/

// Reversing all modifications, only better

function reverse(){
    for ( var i = 1; i< 7; i++ ) {
        var block = document.getElementById('block'+i).style.backgroundColor = "";
        var block = document.getElementById('block'+i).style.gridColumnStart = "";
        var block = document.getElementById('block'+i).style.gridColumnEnd = "";
        var block = document.getElementById('block'+i).style.gridRowStart = "";
        var block = document.getElementById('block'+i).style.gridRowEnd = "";
    }
}


// jQuery Modifications

$(document).ready(function(){

    $("#wrapper div").dblclick(function(){
        $(this).hide();
    });

   /* $("header").click(function(){
            $(this).animate({height: "200px"});
        });*/

    
     $("header").click(function(){
                $(this).toggleClass("headertoggle", 500);
    });

});


function footerAnimate(){

    var elem = document.getElementById("animate");
    var h = window.getComputedStyle(elem, null).getPropertyValue('height');
    var id = setInterval(frame, 1);

    function frame(){

        switch (h){
            case "60px":
            for (h = 60; h < 101; h++){
                elem.style.height = h + 'px';
            }
            break;
            
            case "100px":
            for (h = 100; h > 59; h--){
                elem.style.height = h + 'px';
            }
        }
    }
}