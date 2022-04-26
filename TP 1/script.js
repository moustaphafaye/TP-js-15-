const affiche_notification=document.getElementById("affiche_notification")
const flex=document.getElementById("flex")
const buton=document.querySelectorAll("button");
 
    for(let i=0;i<buton.length;i++){
        buton[i].addEventListener('click',function(e) {

            
          var   classB =e.target.classList[0]
            notification(classB,e)
        })
        
    }

 function notification(classKoni,e){
     var div1=document.createElement("div");
     var nomnotification=document.createElement("h1");
     nomnotification.innerHTML=e.target.innerHTML;
     div1.appendChild(nomnotification);
     div1.className=classKoni
     div1.classList.add("flex")
     affiche_notification.appendChild(div1); 
     setInterval((e)=>{
         div1.remove();
     },2500)
 }