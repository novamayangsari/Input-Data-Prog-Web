document.getElementById('proses').addEventListener('click', function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var nilai = document.getElementById('nilai').value;
    var grade = "";
    var status = "";

    
    document.write("<h2>NPM : "+ a +"</h2>")
    document.write("<h2>Nama Lengkap : "+ b +"</h2>")

    if (nilai >= 90) {
        grade = "A"
    } else if(nilai >= 80) {
        grade = "B"
    } else if(nilai >= 70) {
        grade = "C"
    } else if(nilai >= 60) {
        grade = "D"
    } else { 
        grade = "E";
    }
        
    document.write(`<h2>Grade Anda : ${grade}</h2>`);

    switch(true){
        case nilai > 69:
            status = "Lulus";
            break;
        default:
            status = "Tidak Lulus";
    }

    document.write(`<h2>Status : ${status}</h2>`);
})

