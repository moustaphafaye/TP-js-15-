document.body.onload=function(){
     i=1;
    var image=document.getElementById('image');
    // var bd=document.getElementById('g');
    // var bd=document.getElementById('d');
   /*  for(let i=1;i<nbr;i++){
        var divim=document.createElement("div")
        divim.className="photo";
        divim.style.backgroundImage="url('img"+i+".png')";
        image.appendChild(divim)
    } */

    var divim=document.createElement("div")
    
    var profit=document.createElement('img');
    
    // divim.style.backgroundImage="url('img"+1+".png')";
    // span.innerHTML="photo"+i
    divim.appendChild(profit)
    image.appendChild(divim)


     setInterval(() => {
    
    if(i>3){i=1}
    // var profit=document.createElement('img');
    profit.src="img"+i+".jpg";
    // span.innerHTML="photo"+i
    // span.className="span" 
    profit.addEventListener('mousemove',function(){
        profit.className="survol"
    })  
    divim.className="photo"
    profit.className="photo";
    // divim.appendChild(span)
    divim.appendChild(profit)
    image.appendChild(divim)
    profit.style.transition="all 0.6s ease"; 
    i++
}, 3000); 

d.onclick=function(){
    //     if(p>-nbr+1)
//    p--;/* 
//    image.style.transform="translateY("+p*750+"px)"
//    image.style.transition="all 0.6s ease"; */ 
   i--
   if(i<1){i=3}
  
   profit.src="img"+i+".jpg"; 
   profit.className="photo" 
    divim.appendChild(profit)
    image.appendChild(divim)
   
   console.log(profit)
   console.log("d")
}

g.onclick=function(){
    //     if(p>-nbr+1)
//    p--;/* 
//    image.style.transform="translateY("+p*750+"px)"
//    image.style.transition="all 0.6s ease"; */ 
   i++
   if(i>3){i=1}
   profit.src="img"+i+".jpg"; 
   profit.className="photo" 
    divim.appendChild(profit)   
    image.appendChild(divim) 
   
//    console.log(i)
//    console.log("g")
}
}
