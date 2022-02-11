// Parent class

class Animal {
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine?: boolean;
    img: string;
    order: boolean = false;
    
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, img: string){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.size = size;
            this.vaccine = vaccine;
            this.img = img;
            animalGroup.push(this);
        }

    startCard(){
        return `
        <div class="col">
            <div class="card">
                <img class="card-img-top disappsm" src="${this.img}" alt="Animal">
                <div class="card-body">
                    <h4 class="text-uppercase font-weight-bold text-center p-2">${this.name}</h4>
                    <hr>
                    <p class="card-text">Age (months): <p class="agesort">${this.age}</p></p>
                    <hr>
                    <p class="card-text">Gender: ${this.gender} <br> I have a ${this.size} size!</p>
                    <hr>
                    <p class="card-text">Vaccine done: 
                    <p class="bg-${this.vaccine?"success":"danger"} text-center p-2"> ${this.vaccine}
                    </p>
                    </p>`
    }

    endCard(){
        return `
                </div>
            </div>
        </div>`
    }

    displayCard(){
        return this.startCard() + this.endCard()
    }
}

// Child class 1

class Cat extends Animal {
    breed: string;
    furColor: string;
    source: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, img: string, breed: string, furColor: string, source: string){
            super(name, age, gender, size, vaccine, img)
            this.breed = breed;
            this.furColor = furColor;
            this.source = source;
        }

        startCard(){
            return `
            ${super.startCard()}
            <hr>
            <div class="card-text">
                <p>Breed: ${this.breed} <br> Fur color: ${this.furColor} <br></p>
                <a href="${this.source}" class="catlink">Read more about breed</a>
            </div>`
        }         
}

// Child class 2

class Dog extends Animal {
    family: string;
    trainingSkills: string;

    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, img: string, family: string, trainingSkills: string){
            super(name, age, gender, size, vaccine, img)
            this.family = family;
            this.trainingSkills = trainingSkills;
        }

        startCard(){
            return `
            ${super.startCard()}
            <hr>
            <div class="card-text">
                <p>Breed: ${this.family} <br> I am trained: ${this.trainingSkills}</p>
            </div>`
        }        
}

// Creating empty array 

let animalGroup : Array<Animal> = [];

// Info for parent class

new Animal ("Donut", 5, "Male", "big", true, "img/hamster.jpg");
new Animal ("Fluffy", 3, "Male", "medium", true, "img/rabbit.jpg");
new Animal ("Penny", 1, "Female", "small", false, "img/rat.jpg");

// Info for 1st child class

new Cat ("Kitty", 24, "Female", "big", true, "img/bigcat.jpg", "Mixed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat ("Ben", 7, "Male", "medium", false, "img/mediumcat.jpg", "British shorthair", "Gray", "https://de.wikipedia.org/wiki/Britisch_Kurzhaar");
new Cat ("Lily", 3, "Female", "small", true, "img/smallcat.jpg", "British longhair", "Tabby", "https://de.wikipedia.org/wiki/Britisch_Langhaar");

// Info for 2nd child class

new Dog ("Doggi", 32, "Female", "small", true, "img/smalldog.jpg", "Bolognese", "Trained");
new Dog ("Mimi", 5, "Female", "medium", false, "img/mediumdog.jpg", "Husky", "Not trained");
new Dog ("Bark", 9, "Male", "big", true, "img/bigdog.jpg", "Shiba Inu", "Trained");

//  Sorting 

(document.getElementById("sortanim") as HTMLElement).addEventListener("click", sortAnim);

function sortAnim() {
        animalGroup.sort(function(a, b) {
        return b.age - a.age});
        (document.getElementById("row") as HTMLElement).innerHTML = "";
        printContent();  
    }  ;
    
// Making cards 
function printContent() {
animalGroup.forEach((val) => {
    (document.getElementById("row") as HTMLElement).innerHTML += val.displayCard();
});
}
printContent();