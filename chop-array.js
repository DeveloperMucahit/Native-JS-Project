/*
* Verilen arrayi, verilen sayida elemente sahip gruplara ayristirin. Eger islem sonucunda ayrismamis element kaldiysa, kalan grubuna ekleyin.
* Fonksiyonunuz asagidaki gibi bir obje return etmelidir.
*
* {
*   grup1: [ 1, 2 ],
*   grup2: [ 3 ,4 ],
*   kalan: [ 5 ]
* }
*
* Example
* Input: chopArray([1,2,3,4,5], 2)
* Output:
* {
*   grup1: [ 1, 2 ],
*   grup2: [ 3 ,4 ],
*   kalan: [ 5 ]
* } 
*/

function chopArray(array, numElements) {
    const result = {};
    let groupIndex = 1;
    for (let i = 0; i < array.length; i += numElements) {                // Dizi elemanlarını gruplarına ayırıyoruz.
        result[`grup ${groupIndex}`] = array.slice(i, i + numElements);  // Grupları oluşturuyoruz.
        groupIndex++;
    }
    const totalGroups = groupIndex - 1;                                  // Toplam grup sayısını alıyoruz.
    const lastGroup = result[`grup ${totalGroups}`];                     // Son gruba erişiyoruz.
    if (lastGroup.length < numElements) {                                // Eğer son grup, belirtilen eleman sayısından azsa, kalanları alıyoruz.
        result.kalan = lastGroup;                                        // Kalanları alıyoruz.
        delete result[`grup ${totalGroups}`];                            // Son gruptan kalanları siliyoruz.
    } else {
        result.kalan = [];                                               // Eğer kalan eleman yoksa, boş bir array oluşturuyoruz.
    }

    console.log(result);
    return result;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node chop-array.js
chopArray(['a', 'b', 1, 2, 'c', 'd', 525], 4);
chopArray([10,20,11,30,41,50], 3);
chopArray([10,20,11,30,41,50], 2);
chopArray([10,20,11,30,41,50], 1);
chopArray([10,20,11,30,41,50], 5);
chopArray([10,20,11,30,41,50, 'selam'], 5);
chopArray([10,'sa',20,11,30,'as',41,50], 3);
