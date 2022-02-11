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
        <div class="card h-100" style="width: 18rem;">
        <img src="${this.img}>
        <div class="card-body">
        <h5>${this.name}</h5>
        <hr>`
    }

    endCard(){
        return `
            <p class="card-text"> Age: ${this.age} Months <br> Gender: ${this.gender} T <br> It´s ${this.size} size!</p>
            <p class="vaccine">Vaccine done: ${this.vaccine}</p>
            </div>
        </div>
        </div>`;
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
                <p class="card-text">Breed: ${this.breed} <br> Fur color: ${this.furColor} <br></p>
                <a href="${this.source}">Read more about breed</a>`;
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
                <p class="card-text">Family: ${this.family} <br> I´m trained: ${this.trainingSkills}</p>`;
        }        
}


let animalGroup : Array<Animal>=[];

// name, age, gender, size, vaccine, img

new Animal ("Kitty", 24, "Female", "Big", "Yes", "img/bigcat.jpg");
new Animal ("Ben", 7, "Male", "Medium", "No", "https://www.pexels.com/photo/grey-kitten-on-floor-774731/");
new Animal ("Lily", 3, "Female", "Small", "Yes", "https://www.pexels.com/photo/photo-of-grey-tabby-kitten-lying-down-2558605/");

// name, age, gender, size, vaccine, img, breed, furColor, source

new Cat ("Kitty", 24, "Female", "Big", "Yes", "https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/", "No breed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat ("Ben", 7, "Male", "Medium", "No", "https://www.pexels.com/photo/grey-kitten-on-floor-774731/", "No breed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");
new Cat ("Lily", 3, "Female", "Small", "Yes", "https://www.pexels.com/photo/photo-of-grey-tabby-kitten-lying-down-2558605/", "No breed", "Red", "https://commons.wikimedia.org/wiki/Category:Red_cats");

// name, age, gender, size, vaccine, img, family, trainingSkills

new Dog ("Doggi", 5, "Female", "Medium", "Yes", "https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/", "No breed", "Trained");
new Dog ("Mimi", 5, "Female", "Medium", "Yes", "https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/", "No breed", "Trained");
new Dog ("Bark", 5, "Female", "Medium", "Yes", "https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/", "No breed", "Trained");

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