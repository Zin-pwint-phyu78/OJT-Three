const humbargerMenuBarTag=document.getElementsByClassName("humbargerMenuBar")[0];
const line1Tag=document.getElementsByClassName("line1")[0];
const line2Tag=document.getElementsByClassName("line2")[0];
const line3Tag=document.getElementsByClassName("line3")[0];
const rightSiteTag=document.getElementsByClassName("rightSite")[0];
humbargerMenuBarTag.addEventListener("click",()=>{
    if(humbargerMenuBarTag.classList.contains("isOpened")){
        line1Tag.classList.remove("rotateplus");
        line2Tag.classList.remove("hideLine2");
        line3Tag.classList.remove("rotateminus");
        humbargerMenuBarTag.classList.remove("isOpened");
        // rightSiteTag.style.display="none";
        rightSiteTag.classList.add("rightSiteDisplay");
    }else{
        rightSiteTag.classList.remove("rightSiteDisplay");
        line2Tag.classList.add("hideLine2");
        line1Tag.classList.add("rotateplus");
        line3Tag.classList.add("rotateminus");
        humbargerMenuBarTag.classList.add("isOpened");
        console.log(rightSiteTag);
    }
    
})
