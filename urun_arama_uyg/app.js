// ÜRÜN ARAMA UYGULAMASI

let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat : 6.219
}
let urun2 = {
    isim: "ACER Nitro",
    kategori: "Teknoloji",
    fiyat : 15.483
}
let urun3 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat : 10.999
}
let urun4 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat : 4.399
}
let urun5 = {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat : 5.843
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz: ");

filtreliUrunlerDoldur(urunler);
filtreliUrunlerYazdir(filtreliUrunler);

function filtreliUrunlerDoldur(urunler){
    urunler.forEach(function (urun){
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    })
}

function filtreliUrunlerYazdir(urunler){
    urunler.forEach(function (urun){
        console.log("---------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("---------------------------");
    });
}