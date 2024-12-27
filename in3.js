




// let colour = ["Blue", "Green", "Pink", "Yellow", "White"];
// let colour1 = ["Blue", "Green", "Pink", "Yellow", "White"];



// document.getElementById("demo").innerHTML = "Original Array:  "+colour1;

// function display(){
//     document.getElementById("demo1").innerHTML = " Changed Array:  " + colour;
// }


// function adding(event) {
//     event.preventDefault();
//     let x = document.getElementById("add").value;
//     colour.push(x);
//     display();
//     console.log(colour);
// }

// function removeArray(event){
//     event.preventDefault();
//     let removeContent = document.getElementById("remove").value;
//     let indexofRemove = colour.indexOf(removeContent);
//     // delete colour[indexofRemove];
//     colour.splice(indexofRemove,1);
//     display();
// }

// function sortArray(event){
//     event.preventDefault();
//     colour.sort();
//     display();
// }

// function reverseArray(event){
//     event.preventDefault();
//     colour.reverse();
//     display();
// }




let colour = ["Green", "Blue", "White", "Yellow", "Pink"];
let colour1 = ["Green", "Blue", "White", "Yellow", "Pink"];



document.getElementById("demo").innerHTML = "Original Array:" + colour1;

function display() {
    document.getElementById("demo1").innerHTML = "Changed Array:" + colour;
}


function adding(event) {
    event.preventDefault();
    let addArray = document.getElementById("add").value;
    if (addArray.trim() !== "") {
        colour.push(addArray);
    }



    display();

    document.getElementById("add").value = "";
}


// function removeArray(event) {
//     event.preventDefault();
//     let removeContent = document.getElementById("remove").value;
//     if (removeContent.trim() !== "") {
//         let indexofRemove = colour.indexOf(removeContent);
//         if (indexofRemove !== (-1)) {
//             colour.splice(indexofRemove, 1);
//         }

//     }

    

    // display();

    // document.getElementById("remove").value = "";







function sortArray(event) {
    event.preventDefault();
    colour.sort();
    display();



}

function reverseArray(event) {
    event.preventDefault();
    colour.reverse();
    display();



}

function removeArray(event){
    event.prventdefault();
    let removeContent=document.getElementById("remove").value;
    if  (removeContent.trim()!==""){


    let indexofArray=document.getElementsById("removeContent").value;
    if( indexofArray!==-1){
        colour.splice(indexofArray,1)
    }


    }

 display()
 document.getElementsById("remove").value="";



}