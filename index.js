
const distanceFromHqInBlocks = function(block){
    //base 42nd street
    //if block is more than 42, block - 42, else if block is > than 42, 42 - block 
    if (block >= 42){
        return block - 42;
    }else {
        return 42 - block;
    }
}   

const distanceFromHqInFeet = function(block){
    const numOfBlocks = distanceFromHqInBlocks(block);
    //1 block = 264 ft
    return numOfBlocks * 264
}

const distanceTravelledInFeet = function(start, destination){
    //parameters are blocks
    const blocks = Math.abs(start - destination);
    return blocks * 264;
}

const calculatesFarePrice = function(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0
    }else if (feet <= 2000){
        const freeFeet = feet - 400;
        return 0.02 * freeFeet;
    }else if (feet <=2500){
        return 25
    }else {
        return "cannot travel that far"
    }

}