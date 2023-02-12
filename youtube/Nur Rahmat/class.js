class Hewan {
    constructor(nama, umur) {
        //membuat properti
        this.nama = nama
        this.umur = umur
    }

    //method
    kenalan(){
        console.log("Hallo");
    }

    info(){
        this.kenalan()
        console.log(`Nama saya adalah ${this.nama}`);
        console.log(`Umur ${this.umur} tahun`);
    }

}

// const hewan1 = new Hewan("Chika", 1)
// console.log(hewan1.nama, hewan1.umur);

// hewan1.kenalan();
// hewan1.info();

// inheritance
class Anjing extends Hewan{
    suara(){
        console.log("Pake duit lu dulu yak");
    }

    // overriding
    info(){
        console.log(`Saya adalah Anjing, nama saya adalah ${this.nama}`);
    }
}

const anjing = new Anjing("Guguk", 5)
anjing.info()
anjing.suara()