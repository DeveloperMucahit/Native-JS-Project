/*
* Palindrome, sondan ve bastan okundugunda ayni olan metinlere denir.
* Verilen string parametresinin palindrome bir kelime olup olmadigini tespit eden bir fonksiyon yazin.
* Fonksiyonunuz boolean bir deger return etmelidir.
*
* Example
* Input: Level -> Output: true
* Input: Deified -> Output: true
*
* Input: John -> Output: false
*/

function palindromeChecker(str) {
    const cleanedStr = str.toLowerCase().replace(' ', '');        // Öncelikle stringi küçük harfe çevirip, boşlukları kaldırıyoruz.
    const reversedStr = cleanedStr.split('').reverse().join('');  // Küçük harfe ve boşlukları temizlenen stringi ters çeviriyoruz.
    if(cleanedStr === reversedStr)                                // Temizlenmiş stringin ters çevrilmiş hali ile aynı olup olmadığını kontrol ediyoruz.
        return console.log(true);
    else 
        return console.log(false);
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node palindrome.js
palindromeChecker("Racecar");
palindromeChecker("Level");
palindromeChecker("John Doe");
palindromeChecker("Patika");
palindromeChecker("Civic");
palindromeChecker("Yapay");
palindromeChecker("Mücahit Karabacak");
palindromeChecker("Karabacak");
palindromeChecker("Ey Edip Adanada Pide Ye");