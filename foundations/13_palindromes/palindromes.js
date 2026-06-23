const palindromes = function (text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "") //boşluk ve noktalamaları silmek için a-z ve 0-9 hariç herşey siliniyor.
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;

    //split ile text'i array'e çeviriyoruz.reverse metodu arrayde çalışıyor.
    //array e çevirip tersini aldıktan sonra tekrar string'e birleştirmek için join diyoruz.
    //split ve join'deki içi boş tırnaklar nereden kesilip birleşeceğini gösteriyor.

};
// Do not edit below this line
module.exports = palindromes;
