class Animal {
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine: string;
    img: string;
    
    constructor(name: string, age: number, gender: string, size: string, vaccine: string, img: string){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.size = size;
            this.vaccine = vaccine;
            this.img = img;
            animalGroup.push(this);
        }

        // change here for vaccination colour
    // priceSum(){
    //     return `${this.year*2}`
    // }

    startCard(){
        return `
        <div class="col">
            <div class="card">
                <img class="card-img-top" src="${this.img}" alt="Animal">`
    }

    endCard(){
        return `
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text"> Age: ${this.age} Months <br> Gender: ${this.gender} T <br> It has a ${this.size} size!</p>
                    <p class="vaccine">Vaccine done: ${this.vaccine}</p>
                </div>
            </div>
        </div>`
    }

    displayCard(){
        return this.startCard() + this.endCard()
    }

}

class Cat extends Animal {
    breed: string;
    furColor: string;
    source: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: string, img: string, breed: string, furColor: string, source: string){
            super(name, age, gender, size, vaccine, img)
            this.breed = breed;
            this.furColor = furColor;
            this.source = source;
        }

        startCard(){
            return `
            ${super.startCard()}
            <div class="card-text">
                <p class="card-text">Breed: ${this.breed} <br> Fur color: ${this.furColor} <br></p>
                <a href="${this.source}">Read more about breed</a>
            </div>`
        }         
}

class Dog extends Animal {
    family: string;
    trainingSkills: string;

    constructor(name: string, age: number, gender: string, size: string, vaccine: string, img: string, family: string, trainingSkills: string){
            super(name, age, gender, size, vaccine, img)
            this.family = family;
            this.trainingSkills = trainingSkills;
        }

        startCard(){
            return `
            ${super.startCard()}
            <div class="card-text">
                <p class="card-text">Family: ${this.family} <br> I´m trained: ${this.trainingSkills}</p>
            </div>`
        }        
}


let animalGroup : Array<Animal>=[];

// name, age, gender, size, vaccine, img

new Animal ("Kitty", 24, "Female", "Big", "Yes", "img/hamster.jpg");
new Animal ("Ben", 7, "Male", "Medium", "No", "img/rabbit.jpg");
new Animal ("Lily", 3, "Female", "Small", "Yes", "img/rat.jpg");

// name, age, gender, size, vaccine, img, breed, furColor, source

new Cat ("Kitty", 24, "Female", "Big", "Yes", "img/bigcat.jpg", "No breed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat ("Ben", 7, "Male", "Medium", "No", "img/mediumcat.jpg", "No breed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat ("Lily", 3, "Female", "Small", "Yes", "img/smallcat.jpg", "No breed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");

// name, age, gender, size, vaccine, img, family, trainingSkills

new Dog ("Doggi", 5, "Female", "Medium", "Yes", "img/smalldog.jpg", "No breed", "Trained");
new Dog ("Mimi", 5, "Female", "Medium", "Yes", "img/mediumdog.jpg", "No breed", "Trained");
new Dog ("Bark", 5, "Female", "Medium", "Yes", "img/bigdog.jpg", "No breed", "Trained");

// (document.getElementById("row") as HTMLElement).innerHTML = animal1.displaycard();
// (document.getElementById("row") as HTMLElement).innerHTML += animal2.displaycard();
// (document.getElementById("row") as HTMLElement).innerHTML += animal3.displaycard();

animalGroup.forEach((val) => {
    (document.getElementById("row") as HTMLElement).innerHTML += val.displayCard();

})

// change here for vaccine colour

// var prices = (document.getElementsByClassName("showprice"));
// for (let ind in prices){
//     prices[ind].addEventListener("click", function (){
//         (document.getElementsByClassName("prices1")[ind] as HTMLElement).innerHTML = animalGroup[ind].priceSum(); 
//     })
// }