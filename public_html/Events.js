// event listener for time button click
document.getElementById('timeButton').addEventListener('click', displayDate);

// event listener for hello button click
document.getElementById('helloButton').addEventListener('click', sayHello);

// event listeners for mouse division
document.getElementById('mouse').addEventListener('mouseover', over);
document.getElementById('mouse').addEventListener('mouseout', out);

// ********** Add an event listener for the hide button click event **********
// event listener for hide button click
document.getElementById('hideButton').addEventListener('click', hideMe);

// ********** Add an event listener for the bulb click event **********
// event listener for bulb click
document.getElementById('bulb').addEventListener('click', lightMeUp);

// ********** Add an event listener for the bgColor click event
// even listener for bgColor click
document.getElementById('bgColor').addEventListener('click', colorChange);




//*****************************************************************************
function displayDate() {
    document.getElementById('timeButton').innerHTML = Date();
}

//*****************************************************************************
function sayHello() {
   

//Or... change the text on the button each time it's clicked
//function sayHello() {
 var text = document.getElementById('helloButton').innerHTML;
    if (text === "Hello!") {
        document.getElementById('helloButton').innerHTML = "Hi there!";
    }
    else {
        document.getElementById('helloButton').innerHTML = "Hello!";        
    }
    
}

//*****************************************************************************
function Validate() {
    var radioButtons = document.getElementsByName("eyeColor");
    var index = 0;
    while (index < radioButtons.length) {
        if (radioButtons[index].checked === true ) {
            color = radioButtons[index].value;
        }
        ++index;
    }
    
    if (color === "Green") {
        alert('"Green-eyed Lady by Sugarloaf", 1970');
    }
    else if (color === "Brown") {
        alert('"Brown Eyed Girl" by Van Morrison, 1967');
    }
    else if (color === "Blue") {
        alert('"Blue Eyes Crying in the Rain" by Willie Nelson, 1975');
    }
    else {
        alert('"Eyes Without a Face" by Billy Idol, 1983');
    }
}

//*****************************************************************************
function over() {
    document.getElementById('mouse').innerHTML = "Mouse Over";
}            

//*****************************************************************************
function out() {
    document.getElementById('mouse').innerHTML = "Mouse Out";
}            

//*****************************************************************************

// Complete the functions below
//-----------------------------

function hideMe() {
   document.getElementById('textHide').hidden = true;
}

function lightMeUp() {
    var picture = document.getElementById('bulb');
    var picsrc = picture.src;
//Hint: search the string 'picsrc' for the picture filename 
    if (picsrc.search('bulbon') >= 0) {
        picture.src = "bulboff.jfif";
    } else {
        picture.src = "bulbon.jfif";
    }
}

function colorChange() {
// First, change the background color to the color of your choice.
// Challenge! Make the background color scroll through the colors
// of the rainbow (RoyGBiv), one color change with each click.


    var color = document.body.style.backgroundColor;
    if (color === "red") {
        color = "orange";
    } else if (color === "orange") {
        color = "yellow";
    } else if (color === "yellow") {
        color = "green";
    } else if (color === "green") {
        color = "blue";
    } else if (color === "blue") {
        color = "indigo";
    } else if (color === "indigo") {
        color = "violet";
    } else {
        color = "red";
    }
    document.body.style.backgroundColor = color;
    }
