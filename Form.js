class Form{

    constructor(){


    }

display(){

    var title = createElement('h2');
    title.html("Car Race Game");
    title.position(150,10);

    var input = createInput("Name");
    var button = createButton("Play");
    var greeting = createElement('h3');
    input.position(150,200);
    button.position(200,230);
}



}