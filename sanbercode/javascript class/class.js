//? Biasanya untuk membedakan method dengan property, property ditulis dengan menggunakan “_” di depan namanya, sementara method (termasuk getter dan setter) tidak.

class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

const mycar = new Car("Ford");
mycar.carname = "Volvo"; // memanggil setter, mengubah Ford menjadi Volvo
console.log(mycar.carname); // Volvo