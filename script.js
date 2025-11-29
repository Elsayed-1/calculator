const Allbody=document.querySelector(".content")
const Display=document.querySelector(".display")

Allbody.addEventListener('click',(e)=>{
    if(e.target.nodeName=='BUTTON'){
        switch(e.target.textContent){
            case 'C':
            clear()
             break;
           case 'DEL':
              remove()
              break
              case "=":
                evaluate()
                break
            default :
            Addcontent(e.target.textContent)
        }
    }
})

function clear(){
    Display.textContent=""
}
function Addcontent(value){
Display.textContent=Display.textContent+value
}

function remove(){
   currentvalue  = Display.textContent  

    Display.textContent=currentvalue.substring(0,currentvalue.length -1)

}
function evaluate(){
    let calc=math.evaluate(Display.textContent)
    Display.textContent=calc
}