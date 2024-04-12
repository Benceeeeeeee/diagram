document.addEventListener("DOMContentLoaded", ()=>{
    
    /**
     * @type {HTMLCanvasElement}
    */
   const rajzlap = document.getElementById("rajzlap");
   const rajzfelulet = rajzlap.getContext("2d");
   
   
   
   let kordinata = 480;
   let ertek = 0;
   for (let index = 0; index < 11; index += 1) {
       rajzfelulet.moveTo(10, kordinata);
       rajzfelulet.lineTo(0, kordinata);
       rajzfelulet.stroke();
       rajzfelulet.font = "20px Arial";
       rajzfelulet.fillText(ertek, 10, kordinata+5);
       kordinata -= 45;
       ertek += 5;
    }
    readAllUsers();
    async function readAllUsers(){
        const response = await fetch("https://retoolapi.dev/8oVfRQ/data");
        
        labels = [];
        values = [];
        for (i = 0; i < length; i++) {
            labels.push(szamok[i].id);
            values.push(szamok[i].szamok);
        }
        
        const szamok = await response.json()
        rajzfelulet.fillStyle = "green";
        let x = 50;
        rajzfelulet.font = "20px Arial";
        for (let index = 0; index < 10; index++) {
            rajzfelulet.fillRect(x,480, 30, -szamok[index].szamok*9);
            rajzfelulet.fillText(szamok[index].szamok, x + 4, 498);
            x += 100;
        }
        length = szamok.length;
    }
});