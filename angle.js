function findAngleType(angle){
    if(angle < 0 || angle >360){
        return "Not a valid angle";
    }else if(angle<90){
        return "Acute angle)";
    }else if(angle ===90){
        return "Right angle";
    }else if(angle <180 ){
        return "obtuse angle";
    }else if(angle===180){
        return "Straight angle";
    }else if (angle<360){
        return "Reflex angle";
    }else{
        return "Full rotation (360 degrees)";
    }
    } 

    console.log(findAngleType(47));
    console.log(findAngleType(90));
    console.log(findAngleType(145));
    console.log(findAngleType(180));
    console.log(findAngleType(270));
    console.log(findAngleType(360));
    console.log(findAngleType(400));
    console.log(findAngleType(-47));
    console.log(findAngleType(0));
    