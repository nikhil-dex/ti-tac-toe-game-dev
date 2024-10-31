setTimeout(() => {
    document.querySelector(".loading").style.display = 'none';
}, 3900);
let boxCheck = document.querySelectorAll(".boxtext");
let clickAudio = new Audio('sounds/click.mp3');
let winAudio = new Audio("sounds/win.mp3");
let loseAudio = new Audio("sounds/lost.mp3");
let FreeAudio = new Audio("sounds/freeClick.mp3");
let turn = 'X'
let i = 0;
let worl;
let cutLines;
let winRate;
let loseRate;
let cutLineThru = document.querySelector("#lineCut")

// turn player change x  to o and o to x
const changeTurn = ()=>{
    return turn === 'X' ? 'O' : 'X';
}
// linecut
function cutLine(L){
    if(L === "Top"){
        cutLineThru.classList.add("cutTop")     
    }else if(L === "Left"){
        cutLineThru.classList.add("cutLeft")     
        
    }else if(L === "Right"){
        cutLineThru.classList.add("cutRight")     
        
    }else if(L === "Bottom"){
        cutLineThru.classList.add("cutBottom")     
        
    }else if(L === "HCenter"){
        cutLineThru.classList.add("cutHCenter")     
        
    }else if(L === "VCenter"){
        cutLineThru.classList.add("cutVCenter")     
        
    }else if(L === "CosDiag"){
        cutLineThru.classList.add("cutCos")     
        
    }else if(L === "SinDiag"){
       return cutLineThru.classList.add("cutSin")     
    }else{
        cutLineThru.removeAttribute("class")
    }
}
// function to check a win
const checkWin = ()=>{
    boxCheck.forEach(()=>{
        if(boxCheck[0].innerText === boxCheck[1].innerText && boxCheck[1].innerText === boxCheck[2].innerText){
           worl = (boxCheck[0].innerText==='X') ? "Win" : (boxCheck[0].innerText==='O') ? "Lose" : "Continue"; 
           cutLines = "Top"
        //    cutLine("Top")  
        }else if(boxCheck[0].innerText === boxCheck[3].innerText && boxCheck[3].innerText === boxCheck[6].innerText){
            worl = (boxCheck[0].innerText==='X') ? "Win" : (boxCheck[0].innerText==='O') ? "Lose" : "Continue";  
            cutLines = "Left"
            // cutLine("Left")  
            
        }else if(boxCheck[6].innerText === boxCheck[7].innerText && boxCheck[7].innerText === boxCheck[8].innerText){
            worl = (boxCheck[6].innerText==='X') ? "Win" : (boxCheck[6].innerText==='O') ? "Lose" : "Continue"; 
            cutLines = "Bottom" 
            // cutLine("Bottom")  
            
        }else if(boxCheck[2].innerText === boxCheck[5].innerText && boxCheck[5].innerText === boxCheck[8].innerText){
            worl = (boxCheck[2].innerText==='X') ? "Win" : (boxCheck[2].innerText==='O') ? "Lose" : "Continue"; 
            cutLines = "Right" 
            // cutLine("Right")  
            
        }else if(boxCheck[1].innerText === boxCheck[4].innerText && boxCheck[4].innerText === boxCheck[7].innerText){
            worl = (boxCheck[1].innerText==='X') ? "Win" : (boxCheck[1].innerText==='O') ? "Lose" : "Continue";
            cutLines = "VCenter"  
            // cutLine("VCenter")  
            
        }else if(boxCheck[0].innerText === boxCheck[4].innerText && boxCheck[4].innerText === boxCheck[8].innerText){
            worl = (boxCheck[0].innerText==='X') ? "Win" : (boxCheck[0].innerText==='O') ? "Lose" : "Continue"; 
            cutLines = "CosDiag" 
            // cutLine("CosDiag")  
            
        }else if(boxCheck[2].innerText === boxCheck[4].innerText && boxCheck[4].innerText === boxCheck[6].innerText){
            worl = (boxCheck[2].innerText==='X') ? "Win" : (boxCheck[2].innerText==='O') ? "Lose" : "Continue"; 
            cutLines = "SinDiag" 
            // cutLine("SinDiag")  
        }else if(boxCheck[3].innerText === boxCheck[4].innerText && boxCheck[4].innerText === boxCheck[5].innerText){
            worl = (boxCheck[3].innerText==='X') ? "Win" : (boxCheck[3].innerText==='O') ? "Lose" : "Continue"; 
            cutLines = "HCenter" 
            // cutLine("HCenter")  

        }else{
            console.log("Play")
        }

    })


    
}
// 0=1=2 or 0=3=6 or 6=7=8 or 2=5=8 or 0=4=8 or 2=4=6 or 1=4=7 or 3=4=5

//game logic
// sound play wan click
document.querySelectorAll(".box").forEach((ele)=>{
    ele.addEventListener("click",()=>{
        if(ele.firstElementChild.innerText === ""){
            ele.classList.add("boxH")
            // ele.classList.remove("box")
            clickAudio.play()
            ele.firstElementChild.innerText = turn;
            turn = changeTurn();
            document.querySelector(".info").innerText = `Turn for `+ turn
            i++
            // if(i>4){
                checkWin()
                if(worl === "Win"){
                    cutLine(cutLines)
                    winRate++
                    winAudio.play();
                    document.querySelector(".winGif").classList.remove("winGif");
                    document.querySelector(".info").innerText = 'You Win';
                    document.querySelector(".info").style.background = "green";
                }else if(worl === "Lose"){
                    cutLine(cutLines)
                    loseRate--
                    loseAudio.play();
                    document.querySelector(".info").innerText = 'You Lose';
                    document.querySelector(".info").style.background = "red";

                    
                }else if(worl === "Continue"){
                    console.log('play')
                }
            // }
  

        }else{

            FreeAudio.play()
        }
    })
})

function refreshPage() {
    boxCheck.forEach(ele=>{
        clickAudio.play()
        ele.innerText = ""; 
        ele.parentElement.classList.remove("boxH");
        winAudio.pause();
        loseAudio.pause();
        document.querySelector(".imgBox iframe").classList.add("winGif");
        document.querySelector(".info").innerText = `Turn for `+ turn
        document.querySelector(".info").style.background = "black";
    })
    
}
