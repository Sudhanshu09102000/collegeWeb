 tablinks= document.getElementsByClassName("tab-links"); 
 tabcontents= document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks ){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}




var sidemenu= document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}



// improvements

document.getElementById("my-work").addEventListener("mouseover", ()=>{
    document.getElementById("my-work").innerText="My Work (in-progress)"
})
document.getElementById("my-work").addEventListener("mouseleave", ()=>{
    document.getElementById("my-work").innerText="My Work"
})

var a= window.innerWidth;




// cv download info 
// downloadtime
