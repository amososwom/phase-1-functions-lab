// Code your solution in this file!
function show(value){
    console.log(value);
  }

function distanceFromHqInBlocks(distance){

    let block = 42;
    if(distance < 43 ){
        block =  block-distance;
    }else if(distance >= 43 && distance <= 50){
        block =  distance-block;
    }else{
        block =  8;
    }

    return block;
}

//show(distanceFromHqInBlocks(43));
function distanceFromHqInFeet(distance){
    let blockFeet = 264;
        blockFeet =  blockFeet * distanceFromHqInBlocks(distance);
    return blockFeet;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(destination > start){
        return (destination-start) * 264
    }else{
        return (start-destination) * 264
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let infeet = distanceTravelledInFeet(start, destination)

    let scuber  = "cannot travel that far";

    if(infeet <= 400){
        scuber = 0; //"This a Free ride for you";
    }else if(infeet > 400 && infeet <= 2000){
        scuber = 2.56; //"We will charge you 2 cents for this ride";

    }else if(infeet > 2000 && infeet <= 2500){
        scuber = 25; //"For this ride we will Charge you 25$ only";
    }

    return scuber;
  }