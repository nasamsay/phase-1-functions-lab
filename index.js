
function distanceFromHqInBlocks(distance){
    return Math.abs(42-distance);
}

function distanceFromHqInFeet(distance){
    const distanceInFeet = distanceFromHqInBlocks(distance)*264;
    return distanceInFeet;
}

distanceFromHqInFeet(50);

function distanceTravelledInFeet(startValue, endValue){
    return Math.abs(startValue-endValue)*264;
}

console.log(distanceTravelledInFeet(34,52));

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance<=400) {
        return 0
    }
    else if (distance >400 && distance <=2000){
        return (distance-400)*0.02;
    }
    else if (distance >2000 && distance<2400){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}

console.log(calculatesFarePrice(34,52))