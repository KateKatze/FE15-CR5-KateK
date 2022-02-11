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
                <img class="card-img-top disappsm" src="${this.img}" alt="Animal">
                <div class="card-body">
                    <h4 class="text-uppercase font-weight-bold text-center p-2">${this.name}</h4>
                    <hr>
                    <p class="card-text">Age (months): <p class="agesort">${this.age}</p></p>
                    <hr>
                    <p class="card-text">Gender: ${this.gender} <br> It has a ${this.size} size!</p>
                    <hr>
                    <p class="card-text">Vaccine done: <p class="vaccine"> ${this.vaccine}</p>
                `
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
            <hr>
            <div class="card-text">
                <p>Breed: ${this.breed} <br> Fur color: ${this.furColor} <br></p>
                <a href="${this.source}" class="catlink">Read more about breed</a>
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
            <hr>
            <div class="card-text">
                <p>Breed: ${this.family} <br> I´m trained: ${this.trainingSkills}</p>
            </div>`
        }        
}


let animalGroup : Array<Animal>=[];

// name, age, gender, size, vaccine, img

new Animal ("Donut", 5, "Male", "big", "No", "img/hamster.jpg");
new Animal ("Fluffy", 3, "Male", "medium", "Yes", "img/rabbit.jpg");
new Animal ("Penny", 1, "Female", "small", "No", "img/rat.jpg");

// name, age, gender, size, vaccine, img, breed, furColor, source

new Cat ("Kitty", 24, "Female", "big", "Yes", "img/bigcat.jpg", "Mixed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat ("Ben", 7, "Male", "medium", "No", "img/mediumcat.jpg", "British shorthair", "Gray", "https://de.wikipedia.org/wiki/Britisch_Kurzhaar");
new Cat ("Lily", 3, "Female", "small", "Yes", "img/smallcat.jpg", "British longhair", "Tabby", "https://de.wikipedia.org/wiki/Britisch_Langhaar");

// name, age, gender, size, vaccine, img, family, trainingSkills

new Dog ("Doggi", 32, "Female", "small", "Yes", "img/smalldog.jpg", "Bolognese", "Trained");
new Dog ("Mimi", 5, "Female", "medium", "No", "img/mediumdog.jpg", "Husky", "Not trained");
new Dog ("Bark", 9, "Male", "big", "Yes", "img/bigdog.jpg", "Shiba Inu", "Trained");

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


// sort button

// let agesort = (document.getElementsByClassName("agesort"));

// document.getElementsByClassName("sortanim")[0].addEventListener("click", sortImportance);

// function sortImportance() {
//     agesort.sort((a: number, b:number) => b.age - a.age);
//     (document.getElementById("row") as HTMLElement).innerHTML = "";
// }