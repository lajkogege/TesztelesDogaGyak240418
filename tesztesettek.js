import { szamjegyekOsszege } from "./fugveny.js";

export  function tesztesett(){
    const tesztEsetek=[
        {
            n:312,
            vart:6
         },
        {
            n:0,
            vart:0
        },

        {
            n:2147483647,
            vart:46
        },

        {
            n: 31.2,
            vart:"Nem jó"
        },
    ];

    tesztEsetek.forEach(function(teszt){
        console.assert(
            teszt.vart === szamjegyekOsszege(teszt.n),
            `n: ${teszt.n} vart: ${teszt.vart} kapott: ${szamjegyekOsszege(teszt.n)} HIBA!`
        );
    });
}