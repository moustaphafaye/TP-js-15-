const nav = document.querySelector("nav")
const cv = document.getElementById("img")
const toggle = document.getElementById('toggle')
const divboto=document.getElementById('contenir_button')

const menu = [
    {
        "icone": "fa-solid fa-gauge-high",
        "texte": "Dashbord",
        "new": null,
        "icone1": "fa-solid fa-angle-left",
        "sousmenu": [
            {
                "icone": "nav-icon fas fa-th",
                "texte": "Widgets",
                "new": null,
                "icone1": null,
                "sousmenu": null
            },
            {
                "icone": "fa-solid fa-sd-card",
                "texte": "Layout option",
                "new": "right badge badge-danger",
                "icone1": "fa-solid fa-angle-left",
                "sousmenu": null
            },
            {
                "icone": "fa-solid fa-chart-pie",
                "texte": "Charts",
                "new": null,
                "icone1": "fa-solid fa-angle-left",
                "sousmenu": null
            }
        ]
    },
    {
        "icone": "nav-icon fas fa-th",
        "texte": "Widgets",
        "new": null,
        "icone1": null,
        "sousmenu": null
    },
    {
        "icone": "fa-solid fa-sd-card",
        "texte": "Layout option",
        "new": "right badge badge-danger",
        "icone1": "fa-solid fa-angle-left",
        "sousmenu": null
    },
    {
        "icone": "fa-solid fa-chart-pie",
        "texte": "Charts",
        "new": null,
        "icone1": "fa-solid fa-angle-left",
        "sousmenu": [
            {
                "icone": "nav-icon fas fa-th",
                "texte": "Widgets",
                "new": null,
                "icone1": null,
                "sousmenu": null
            },
            {
                "icone": "fa-solid fa-sd-card",
                "texte": "Layout option",
                "new": "right badge badge-danger",
                "icone1": "fa-solid fa-angle-left",
                "sousmenu": null
            },
            {
                "icone": "fa-solid fa-chart-pie",
                "texte": "Charts",
                "new": null,
                "icone1": "fa-solid fa-angle-left",
                "sousmenu": null
            }]
    },
    {
        "icone": "fa-solid fa-tree",
        "texte": "UI elements",
        "new": null,
        "icone1": "fa-solid fa-angle-left",
        "sousmenu":null
    },
    {
        "icone": "fa-solid fa-pen-to-square",
        "texte": "Forms",
        "new": null,
        "icone1": "fa-solid fa-angle-left",
        "sousmenu": null
    },
    {
        "icone": "fa-solid fa-table",
        "texte": "Charts",
        "new": null,
        "icone1": "fa-solid fa-angle-left",
        "sousmenu": [{
            "icone": "nav-icon fas fa-th",
            "texte": "Widgets",
            "new": null,
            "icone1": null,
            "sousmenu": null
        },
        {
            "icone": "fa-solid fa-sd-card",
            "texte": "Layout option",
            "new": "right badge badge-danger",
            "icone1": "fa-solid fa-angle-left",
            "sousmenu": null
        },
        {
            "icone": "fa-solid fa-chart-pie",
            "texte": "Charts",
            "new": null,
            "icone1": "fa-solid fa-angle-left",
            "sousmenu": null
        }]
    }
]

    menu.forEach(element => {
        lemenu(element, nav)
    });

function lemenu(menu ,slide) {
    // console.log(menu["icone"])
    var crediv = document.createElement('div')
    var divinconetex = document.createElement("div")
    var sousmenuu = document.createElement("div")
    var grand_div = document.createElement("div")
    var crei = document.createElement('i');
    var crenew = document.createElement('i')
    var crep = document.createElement('span');
    var creii = document.createElement('i')

    crei.setAttribute("class", menu["icone"])
    crep.innerHTML = menu["texte"];
    creii.setAttribute("class", menu["new"])
    crenew.setAttribute("class", menu["icone1"])
    
    crediv.classList.add("divcre")
    crediv.classList.add("fb")
    divinconetex.className = "divinconetex"
    divinconetex.appendChild(crep)
    divinconetex.appendChild(creii)
    divinconetex.appendChild(crenew)
    sousmenuu.classList.toggle("hide")
    // divinconetex.appendChild(crep)
     crediv.appendChild(crei)
    crediv.appendChild(divinconetex)
    
    // crediv.appendChild(crep)
    
    // crediv.appendChild(crenew)
    grand_div.appendChild(crediv)
    grand_div.appendChild(sousmenuu)
    slide.appendChild(grand_div)
    if(menu["sousmenu"]!= null){
        menu["sousmenu"].forEach(el => {
            lemenu(el,sousmenuu)
        });
    }

    /* crediv.addEventListener('click',function){

    } */
     
    // console.log(vb)
    
    crediv.addEventListener("click",function(){
        // console.log(crediv)
        sousmenuu.classList.toggle("hide")
    })
 
}
    
               /*  for (let i = 0; i < menu["sousmenu"].length; i++) {
                
                    crediv.addEventListener('click',function(){
                    var spans = document.createElement('span');
                    var smenu=document.createElement('div')
                    var ii=document.createElement('i')
                    spans.textContent = menu["sousmenu"][i]
                    smenu.className="displaynone"
                    ii.setAttribute("class",menu["sousmenu"][0])
                    smenu.appendChild(ii)
                    smenu.appendChild(spans)
                    sousmenuu.appendChild(smenu)
                    sousmenuu.style.display="none"
                    
                    smenu.classList.toggle("displayvisibile")
                
                    // var toutcrediv=document.querySelectorAll(".divcre")

                // for(let j=0;j<)
                // console.log(toutcrediv)
            //         for(let u=0;u<toutcrediv.length;u++){
            //             toutcrediv[u].addEventListener('click',function(){
            //            for(let j=0;j<menu["sousmenu"].length;j++){
            //              console.log(menu["sousmenu"][j])
            //            }
            //             })
            //    }
            //     }
            
            //    console.log(menu["sousmenu"]);
                // }
            //     var toutcrediv=document.querySelectorAll(".divcre")

            //     // for(let j=0;j<)
            //     // console.log(toutcrediv)
            //         for(let i=0;i<toutcrediv.length;i++){
            //             toutcrediv[i].addEventListener('click',function(){
            //            for(let j=0;j<menu["sousmenu"].length;j++){
            //                 console.log(menu["sousmenu"][j])
            //            }
            //             })
            //    }
            })
                }  */
        
  
    // crediv.addEventListener('click', function () {
    //     // crenew.setAttribute("class", "fa-solid fa-angle-down")
    //     smenu.classList.toggle("displayvisibile")

    // })
    
   
    toggle.addEventListener('click', function () {
        // divboto.classList.toggle("contenir_button")
        nav.classList.toggle("trete") 
        divboto.classList.toggle("contenir_butto")

    })
   
   
    


// fa-solid fa-angle-down"