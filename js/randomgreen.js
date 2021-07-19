
    function shuffleArray(arrayquiz) {
        arrayquiz.sort(() => Math.random() - 0.5);
    }
    var arrayquiz = [
     "Apa mimpi terlucu yang pernah Anda miliki?",
     "Apa permainan kesukaanmu ?",
     "Apa hal paling kekanak-kanakan yang masih kamu lakukan?",
     "Apa yang Anda lakukan untuk mengisi liburan?"
    
   
    
    ];
    shuffleArray(arrayquiz);
    console.log(arrayquiz)

    // var random001 = Math.floor(Math.random() * arrayquiz.length);
    document.getElementById("button").innerHTML = "<button onclick=btn001()>Other</button>";
  
    var no = 0
    // document.getElementById("quiz").innerHTML = arrayquiz[random001];
    document.getElementById("quiz").innerHTML = arrayquiz[no];

    function btn001() {
        
        // random001 = Math.floor(Math.random() * arrayquiz.length);
        if (no >= 0 && no < arrayquiz.length) {
            if(no == 0 ){
                no = 1
            }
            document.getElementById("quiz").innerHTML = arrayquiz[no];
            no = no +1
          }
        // document.write(arrayquiz.length)
      
        else if (no == arrayquiz.length ) {
            document.getElementById("button").innerHTML = '<button><a style="color: white; text-decoration: none;" href="../play.html">Back Play</a> </button> '
           
        }
        console.log(arrayquiz.length)
        console.log(no)
    }