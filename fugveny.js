export function szamjegyekOsszege(kapottSzam){

    let osszeg=0;
    while (kapottSzam >0){
        if(kapottSzam === Math.kapottSzam ){
            return "Tizedes számmal nem jó";
        }
        else{
            let utolsoSzamjegy = kapottSzam % 10;
            osszeg= osszeg+utolsoSzamjegy;
            kapottSzam=Math.floor(kapottSzam/10);
        
        }
        
    }
    console.log(osszeg);
    return osszeg;
}