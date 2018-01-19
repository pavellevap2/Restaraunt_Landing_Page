let btn=document.getElementById("test");
function toggleBlocks(){
    let fitstDisplay=document.querySelector('.first-hidden').style.display;
    let secondDisplay=document.querySelector('.second-hidden').style.display;

    if((fitstDisplay==="none")&&(secondDisplay==="none")){
        (document.querySelector('.first-hidden').style.display="block") &&(document.querySelector('.second-hidden').style.display="block")
        && (btn.style.display='none');
    }
    return false
}
btn.addEventListener('click',toggleBlocks);
