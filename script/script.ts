class vehicles {
    brand: string;
    model: string;
    img: string;
    year: number;
    weight: number;
    eAuto: boolean;
    constructor(brand: string,
        model: string,
        img: string,
        year: number,
        weight: number,
        eAuto: boolean){
            this.brand=brand;
            this.model=model;
            this.img=img;
            this.year=year;
            this.weight=weight;
            this.eAuto=eAuto;
            carGroup.push(this);
        }

    priceSum(){
        return `${this.year*2}`
    }

    startCard(){
        return `
        <div class="col">
        <div class="card h-100" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.img}">
        <div class="card-body">
        <h5>${this.brand} ${this.model}</h5>`
    }

    endCard(){
        return `
            
            <p class="card-text"> Year: ${this.year} <br> Weight: ${this.weight} T <br> e-Auto: ${this.eAuto}</p>
            <button class="showprice btn btn-primary">Buy now!</button>
            <p class="prices1 mt-2"></p>
            </div>
        </div>
        </div>`;
    }

    displayCard(){
        return this.startCard() + this.endCard()
    }

}



class motorbike extends vehicles{
    type: string;
    trunk: string;
    maxSpeed: number;
    constructor(
        brand: string,
        model: string,
        img: string,
        year: number,
        weight: number,
        eAuto: boolean,
        type: string,
        trunk: string,
        maxSpeed: number){
            super(brand,model,img,year,weight,eAuto)
            this.type=type;
            this.trunk=trunk;
            this.maxSpeed=maxSpeed;
        }

        startCard(){
            return `
            ${super.startCard()}
                <p class="card-text">Type: ${this.type} <br> Trunk: ${this.trunk} <br> Max.Speed: ${this.maxSpeed}</p>`;
        }      
        
}
class trucks extends vehicles{
    fuelType: string;
    numberOfSeats: number;

    constructor(
        brand: string,
        model: string,
        img: string,
        year: number,
        weight: number,
        eAuto: boolean,
        type: string,
        trunk: string,
        maxSpeed: number,
        fuelType: string,
        numberOfSeats:number){
            super(brand,model,img,year,weight,eAuto)
            this.fuelType=fuelType;
            this.numberOfSeats=numberOfSeats;
        }

        startCard(){
            return `
            ${super.startCard()}
                <p class="card-text">Fuel Type: ${this.fuelType} <br> Number of seats: ${this.numberOfSeats}</p>`;
        }      
        
}


let carGroup : Array<vehicles>=[];



new vehicles ("Tesla","X","https://www.autozeitung.de/assets/field/image/tesla-model-x-facelift-2021-01.jpg",2019,2,true);
new vehicles ("Honda","Jazz","https://cdn.motor1.com/images/mgl/M70W4/s1/2020-honda-fit.webp",2020,3,false);
new vehicles ("KIA","Sportage","https://cdn.motor1.com/images/mgl/MBlPE/s1/2022-kia-sportage-front-quarter.jpg",2021,5,true);

new motorbike ("Honda","Shadow","https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg",1992,262,false,"Sport","No",100);
new motorbike ("Yamaha","Fastboy","https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg",2021,262,false,"Comfort","yes",110);
new motorbike ("Kawasaki","Ninja","https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg",1987,262,false,"Sport","No",300);

new trucks ("Ford","Dirt","https://cdn.pixabay.com/photo/2015/01/17/22/17/truck-602567__340.jpg",1999,4,false,"Big","yes",120,"Benzin",5)
new trucks ("Ford","Dirt","https://cdn.pixabay.com/photo/2015/01/17/22/17/truck-602567__340.jpg",1999,4,false,"Big","yes",120,"Benzin",5)
new trucks ("Ford","Dirt","https://cdn.pixabay.com/photo/2015/01/17/22/17/truck-602567__340.jpg",1999,4,false,"Big","yes",120,"Benzin",5)

// (document.getElementById("row") as HTMLElement).innerHTML = vehicle1.displaycard();
// (document.getElementById("row") as HTMLElement).innerHTML += vehicle2.displaycard();
// (document.getElementById("row") as HTMLElement).innerHTML += vehicle3.displaycard();

carGroup.forEach((val) => {
    (document.getElementById("row") as HTMLElement).innerHTML += val.displayCard();

})

var prices = (document.getElementsByClassName("showprice"));
for (let ind in prices){
    prices[ind].addEventListener("click", function (){
        (document.getElementsByClassName("prices1")[ind] as HTMLElement).innerHTML = carGroup[ind].priceSum(); 
    })
}