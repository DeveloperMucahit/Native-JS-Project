# Native JS Project
Bu projede, çeşitli JavaScript dosyaları bulunmaktadır. Her bir dosya belirli bir işlevi yerine getirmektedir. Aşağıda her bir dosyanın yaptığı işlemler ve örnek çıktılarıyla beraber terminalde nasıl çalıştırılacağı açıklanmıştır.

## palindrome.js
Bu dosya, verilen bir string'in palindrome olup olmadığını tespit eder. Palindrome, sondan ve baştan okunduğunda aynı olan metinlere denir.

### Kullanım
```bash
node palindrome.js
```
### Örnek Çıktı
```javascript
true
true
false
false
true
false
false
true
true
```

## bot-protection.js
Bu dosya, bir oyuncunun erişim loglarını analiz ederek botları tespit eder. 3 ardışık komutun en az 2 kez tekrar edilip edilmediğini kontrol eder.

### Kullanım
```bash
node bot-protection.js
```
### Örnek Çıktı
```javascript
[ 'jump fire back' ]
```

## chop-array.js
Bu dosya, verilen bir array'i belirli sayıda elemente sahip gruplara ayırır. Eğer işlem sonucunda ayrışmamış element kalırsa, kalan grubuna ekler.

### Kullanım
```bash
node chop-array.js
```
### Örnek Çıktı
```javascript
{
    grup1: [ 'a', 'b', 1, 2 ],
    kalan: [ 'c', 'd', 525 ]
}
{
    grup1: [ 10, 20, 11 ],
    grup2: [ 30, 41, 50 ],
    kalan: []
}
{
    grup1: [ 10, 20 ],
    grup2: [ 11, 30 ],
    grup3: [ 41, 50 ],
    kalan: []
}
{
    grup1: [ 10 ],
    grup2: [ 20 ],
    grup3: [ 11 ],
    grup4: [ 30 ],
    grup5: [ 41 ],
    grup6: [ 50 ],
    kalan: []
}
{
    grup1: [ 10, 20, 11, 30, 41 ],
    kalan: [ 50 ]
}
{
    grup1: [ 10, 20, 11, 30, 41 ],
    kalan: [ 50, 'selam' ]
}
{
    grup1: [ 10, 'sa', 20 ],
    grup2: [ 11, 30, 'as' ],
    kalan: [ 41, 50 ]
}