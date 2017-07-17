/###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, hunger, owner, feelings ) {
    this.color = 'color'
    this.owner = 'owner'
    this.hunger = 'hunger'
    this.feelings = 'feelings'
}
 
let sadie = new Dog('normal', 'black', false, undefined );
let moonshine = new Dog('normal', 'grey',  true );
let atticus = new Dog('normal', 'yellow', true );

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
    this.cool = cool;
    this.pet = function(dog) {
        dog.feeling = 'happy';


    }

    //"this" is the dog
    this.feed = function(dog) {
        dog.hungry = false;
    }
}

 //Instances of Human
 //Needed: mason, julia

let mason = new Human(false);
let julia = new Human(true);

