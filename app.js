let userFname = document.querySelector("#user_fname");
let userGender = document.querySelector("#user_gender")
let submitBtn = document.querySelector("#submitNow")
let wraper = document.querySelector(".wraper");
let animation = document.querySelector(".animation");
let userNameWithAnimation = document.querySelector("#userName");
let userGenderWithAnimation = document.querySelector("#genderDetect");
let main = document.querySelector(".main");

submitBtn.addEventListener("click", ()=>{

    if(userGender.value == "Select:"){
        let userGenderOptionns = document.querySelector("select")
        
       let setTime = setInterval(()=>{
            userGenderOptionns.style.background = "red";
             userGenderOptionns.style.color = "white"
             setTimeout(()=>{
                 userGenderOptionns.style.background = "white"
                 userGenderOptionns.style.color = "black"
             }, 300)
        },1000 )


       
    }
    else {
        function genderDetector() {
            if(userGender.value == "Female") {
                let apu = "apu"
               return apu
            }
            else {
                let vaia = "vaia"
                return vaia
            }
        }
        
        
            
           wraper.style.opacity = "0"
           animation.style.opacity = "1"
            userNameWithAnimation.innerText = userFname.value + " " + genderDetector();
            userGenderWithAnimation.innerText = genderDetector()
        
        setTimeout(()=>{
        
           
            var ml4 = {};
            ml4.opacityIn = [0,1];
            ml4.scaleIn = [0.2, 1];
            ml4.scaleOut = 3;
            ml4.durationIn = 1200;
            ml4.durationOut = 800;
            ml4.delay = 700;
            
            anime.timeline({loop: true})
              .add({
                targets: '.ml4 .letters-1',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-1',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4 .letters-2',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-2',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4 .letters-3',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-3',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4',
                opacity: 0,
                duration: 500,
                delay: 500
              });
        }, 1000)
        
    }


})
