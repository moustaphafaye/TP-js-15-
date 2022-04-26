  const dAPIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="
  const  eSEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="



var APIURL =fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
 const SEARCHAPI = fetch("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=")
 const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const cherche=SEARCHAPI+

///////////////////////////

var i=1

const main=document.getElementById("main")
const lead=document.querySelector(".loader")
const recherche=document.getElementById("seach")
koni(APIURL)
 function koni(api){ 

     api.then(reponse=> {
      // console.log(reponse);
      const datafilm= reponse.json();
    // console.log(datafilm)
    datafilm.then(function(data){
      const film = data.results
     
      film.forEach(el => {

        creerobjet(el)
        
      });
      // console.log(film)
    })
      // datafilm.then((utiliateurs)=> {
        
      //   (utiliateurs["results"]
      // })
  })
}
function creerobjet(ell){
    var divmovie=document.createElement("div")
    var img=document.createElement("img")
    var divmovie_infos=document.createElement("div")
    var titreh3=document.createElement("h3")
    var spanchiffre=document.createElement("span")
    var infosfilm=document.createElement("p")
    var divoverview=document.createElement("div")
    var overviewh3=document.createElement("h3")
    //affectations des class
    divmovie.className="movie"
    divmovie_infos.className="movie-infos"
    divoverview.className="overview"
    //recuper les données
    img.src=IMGPATH+ell.poster_path
    titreh3.innerHTML=ell.title
    spanchiffre.innerHTML=ell.vote_average
    overviewh3.innerHTML="Overview"
    infosfilm.innerText=ell.overview
    //les appendChild
    
     divmovie_infos.appendChild(titreh3)
    divmovie_infos.appendChild(spanchiffre)
   
    divoverview.appendChild(overviewh3)
    divoverview.appendChild(infosfilm)
    divmovie.appendChild(img)
    divmovie.appendChild(divmovie_infos)
    divmovie.appendChild(divoverview)
    main.appendChild(divmovie)
}

/////////////        Recherche       ///////
// recherche.addEventListener('onkeyup',(e)=>{
//     e.preventDefault();
//     console.log(recherche.value)
//     const  Recherche = recherche.value;
//     if(Recherche){
//         koni(eSEARCHAPI+Recherche)
//     }else{
//         koni(df)
//     }
// })

recherche.onkeyup=(e)=>{
    e.preventDefault();
    var  valuerecherche=recherche.value
    if(valuerecherche){
      main.innerHTML=""
      koni(fetch(eSEARCHAPI+valuerecherche))
    }else{
          koni(APIURL)
    }
    // let url = fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query+${recherche.value}`)
    // koni(url)
    /* const  Recherche = recherche.value;
    if(Recherche){
        koni(eSEARCHAPI+Recherche)
    }else{
        koni(df)
    } */
}
window.onscroll=function(){
  if((document.body.scrollHeight)<=(window.innerHeight+window.scrollY)){
    i++
    
    document.onreadystatechange=function(){
      if(document.readyState==="complete"){
        setTimeout(()=>{
          lead.style.visibility="hidden"
          main.style.visibility="visible"
        },100)
      }else{
        main.style.visibility="hidden"
        lead.style.visibility="visible"
      }
    }
    koni(fetch(dAPIURL+i))
  }
}
//////////////////////////////////////


document.onreadystatechange=function(){
  if(document.readyState==="complete"){
    setTimeout(()=>{
      lead.style.visibility="hidden"
      main.style.visibility="visible"
    },1000)
  }else{
    main.style.visibility="hidden"
    lead.style.visibility="visible"
  }
}