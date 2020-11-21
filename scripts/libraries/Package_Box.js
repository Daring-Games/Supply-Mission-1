/*______________________________________________________
----------- CLASS FOR MAKING A PACKAGE BOX -------------
== Created by Sameer Karna (Student of WhiteHat Jr.) ==
_____________CREATED ON 23rd OCTOBER 2020_______________

- - - - - - - - - Copyright (c) 2020 - - - - - - - - - -

 The permission to view and handle this game is hereby 
               granted to all viewers. 

 The above Copyright also disallows the viewers to copy
   this code. If any copied version is published then 
            the viewer will be charged.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

~~~~~ The below CLASS file is a part of 'sketch.js' file ~~~~~
~~~~ 'sketch.js' file comes under SUPPLY MISSION - I project ~~~~
~~~    The viewer is restricted from copying any content   ~~~
*/ 



    //To create a Package Box.
        class Package {

            //This is used to construct an object.
                constructor(x, y, width, height) {

                    //Properties of the Package box.
                        var options = {
                            isStatic: true,
                        }

                        this.body = Bodies.rectangle(x, y, width, height, options);
                        this.width = width;
                        this.height = height;
                        this.image = loadImage("images/box.jpg");

                    //This adds the constructed object.
                        World.add(world, this.body);
                }


            //This is used to display the constructed object.
                display() {

                    //Variable for the constructed object's position.
                        var position = this.body.position;

                        push();
                        translate(position.x, position.y);
                        imageMode(CENTER)
                        image(this.image, 0, 0, this.height, this.width);            
                        pop();
                }
        }



/*===================================
---------- CLASS FILE END -----------
====================================*/