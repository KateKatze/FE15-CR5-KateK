"use strict";
class Animal {
    constructor(name, age, gender, size, vaccine, img) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.img = img;
        animalGroup.push(this);
    }
    startCard() {
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
                    <p class="card-text">Vaccine done: <p class="bg-${this.vaccine ? "success" : "danger"} text-center"> ${this.vaccine}</p></p>
                `;
    }
    endCard() {
        return `
                </div>
            </div>
        </div>`;
    }
    displayCard() {
        return this.startCard() + this.endCard();
    }
}
class Cat extends Animal {
    constructor(name, age, gender, size, vaccine, img, breed, furColor, source) {
        super(name, age, gender, size, vaccine, img);
        this.breed = breed;
        this.furColor = furColor;
        this.source = source;
    }
    startCard() {
        return `
            ${super.startCard()}
            <hr>
            <div class="card-text">
                <p>Breed: ${this.breed} <br> Fur color: ${this.furColor} <br></p>
                <a href="${this.source}" class="catlink">Read more about breed</a>
            </div>`;
    }
}
class Dog extends Animal {
    constructor(name, age, gender, size, vaccine, img, family, trainingSkills) {
        super(name, age, gender, size, vaccine, img);
        this.family = family;
        this.trainingSkills = trainingSkills;
    }
    startCard() {
        return `
            ${super.startCard()}
            <hr>
            <div class="card-text">
                <p>Breed: ${this.family} <br> I´m trained: ${this.trainingSkills}</p>
            </div>`;
    }
}
let animalGroup = [];
new Animal("Donut", 5, "Male", "big", true, "img/hamster.jpg");
new Animal("Fluffy", 3, "Male", "medium", true, "img/rabbit.jpg");
new Animal("Penny", 1, "Female", "small", false, "img/rat.jpg");
new Cat("Kitty", 24, "Female", "big", true, "img/bigcat.jpg", "Mixed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat("Ben", 7, "Male", "medium", false, "img/mediumcat.jpg", "British shorthair", "Gray", "https://de.wikipedia.org/wiki/Britisch_Kurzhaar");
new Cat("Lily", 3, "Female", "small", true, "img/smallcat.jpg", "British longhair", "Tabby", "https://de.wikipedia.org/wiki/Britisch_Langhaar");
new Dog("Doggi", 32, "Female", "small", true, "img/smalldog.jpg", "Bolognese", "Trained");
new Dog("Mimi", 5, "Female", "medium", false, "img/mediumdog.jpg", "Husky", "Not trained");
new Dog("Bark", 9, "Male", "big", true, "img/bigdog.jpg", "Shiba Inu", "Trained");
animalGroup.forEach((val) => {
    document.getElementById("row").innerHTML += val.displayCard();
});
// sort button
// let agesort = (document.getElementsByClassName("agesort"));
// document.getElementsByClassName("sortanim")[0].addEventListener("click", sortImportance);
// function sortImportance() {
//     agesort.sort((a: number, b:number) => b.age - a.age);
//     (document.getElementById("row") as HTMLElement).innerHTML = "";
// }
