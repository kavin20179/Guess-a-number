var guessnum = document.getElementById("three")
var result = document.getElementById("result")
var randomnum = Math.floor(Math.random() * 10) + 1
var totalscore = 5
var possibility = document.getElementById("score")
if (randomnum <=6) {
    function check() {

        var a = guessnum.value
        if (a <= 0) {
            alert("Invalid Input..!");
        }
        
         if(a>20)
            {
              alert("Input must be in the range")
            }
        
        if (randomnum == a) {
            document.getElementById("result").style.color = "white"

            // console.log("Right")
            result.textContent = "Right Answer"
            alert("you are won")
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "green"
            document.getElementById("tit").style.color = "white"
            document.getElementById("four").style.display = "none"
            document.getElementById("five").style.display = "block"

        }
      
        else {
            if (totalscore > 0) {
                document.getElementById("result").style.color = "red"
                totalscore = totalscore - 1
                possibility.textContent = "Possibility:" + totalscore
                // console.log("wrong Answer")
                result.textContent = "wrong"
                alert("Wrong Answer")
                document.body.style.backgroundColor = "red";
                document.getElementById("tit").style.color = "white"
            }
            else {
                document.body.style.backgroundImage = ""
                alert("Beter Luck Next Time...Game over....!")
                document.body.style.backgroundImage = "url('@.png')"
                document.body.style.backgroundSize = "cover"
                document.getElementById("tit").style.display = "none"
                document.getElementById("one").style.display = "none"
                document.getElementById("result").style.display = "none"
                document.getElementById("four").style.display = "none"
                document.getElementById("three").style.display = "none"
                document.getElementById("score").style.display = "none"
            }
        }

        guessnum.value = "";
    }
}
guessnum.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        check();
    }
})
