// Code your solution in this file!

function distanceFromHqInBlocks(start){
    const kibebeHq = 42;
    if (start > kibebeHq){
        return (start - kibebeHq);
    }else{
        return (kibebeHq - start);
    }
}

function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * 264;

}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (start - destination) * 264;
    }
    else{
        return (destination -start) * 264;
    }

}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, distance)
    if (distance <= 400){
        return 0;
    }else if (distance <= 2000){
        return ((distance - 400) *0.02)
    }else if (distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }

}