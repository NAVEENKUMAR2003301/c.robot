const a = document.getElementById("num1")
const b = document.querySelector("img:nth-of-type(1)")
const c = document.querySelector("img:nth-of-type(2)")
const robo = document.querySelector("img:nth-of-type(3)")
// const d = Math.floor(Math.random() * 10) + 1
const e = document.querySelector("h3")
const f = document.querySelector("h2")
const g = document.getElementById("myguess")
const h = document.getElementById("title")
const i = document.querySelector("div")
const j = prompt("enter your name")
const k = document.getElementById("win")



let winn = 0
let score = 10
function guess(){
    const a1 =Number(a.value)
    const d = Math.floor(Math.random() * 10) + 1

    

    // Add click event to the button
    const button = document.getElementById("vibrateBtn");
    button.addEventListener("click", () => {
        // Trigger a vibration for 200 milliseconds
        navigator.vibrate(200);
    });
    
    
    if(a1==d){
        
        e.textContent="You Win"
        e.style.color="green"
        a.style.borderColor="green"
        g.textContent=" my guess :" + d
        h.textContent="🤖 : I Think You have Superb Brain " + j
       
        winn = winn + 1
        k.textContent="score : " + winn
        k.style.color="green"


        c.style.display="block"
        robo.style.display="none"
        b.style.display="none"

         
        i.id="para"

        
        
        
         
         
         
         
         
         
        }else{
            e.textContent="I'm Win"
            score = score - 1
            f.textContent="life:" + score
            f.style.color="red"
            g.textContent=" my guess :" + d
            h.textContent="🤖 : Try Try😂 "
            
            
            
            
            robo.style.display="none"
            b.style.display="block"
            c.style.display="none"
            
            i.id="paran"
            
        if(score==0){
            alert("TRY AGAIN 🤖")
            location.reload()
        }

    }

}