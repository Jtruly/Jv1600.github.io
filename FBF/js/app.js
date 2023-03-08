// set intital image save in variable
let starter = document.getElementById("starter");

// save rest of the array
let heartArray = ["assets/assets/Asset19.png", "assets/assets/Asset20.png","assets/assets/Asset21.png","assets/assets/Asset22.png","assets/assets/Asset23.png","assets/assets/Asset24.png","assets/assets/Asset25.png","assets/assets/Asset26.png","assets/assets/Asset27.png",];

// count = variable
let count = 0;

// declare animation function
function animate() {
    // set starter
    starter.src = heartArray[count];
// increment through array
count++;
// increase count through full length of array
if (heartArray.length == count) {
count = 0;
}
}

setInterval(animate, 100)