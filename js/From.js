class Form{
 constructor(){

 }

 display(){
     var title= createElement('h2');
     title.html("Car Racing Game");
     title.position(750,20);

     var input=createInput("NAME : ");
     input.position(480,150);

     var button= createButton("Click Me!");
     button.position(450,250);

     button.mousePressed(function(){
    
        input.hide();
        button.hide();

        var name= input.value();
        playerCount++;
        player.update(name);
        player.updateCount(playerCount);

        var greeting=createElement('h3');
        greeting.html("Hello,"+name);
        greeting.position(700,600);


     })
 }
}