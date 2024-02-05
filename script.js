function moveCommand(direction) {
    var whatHappen;
    switch (direction) {
        case ("foward"):
            whatHappen = "You encounter a monster";
            break;
        
        case ("Back"):
            whatHappen = "You arrived home";
            break;

        case ("right"):
            whatHappen = "You found a river";
            break;

        case ("left"):
            whatHappen = "You run  into a troll";
            break;

        default:
            whatHappen = "please enter a valid direction";
            break;
    }

    return whatHappen;
}