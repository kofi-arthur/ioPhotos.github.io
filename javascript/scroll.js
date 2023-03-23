window.addEventListener('scroll', ()=> {
    let content = document.querySelector('.cont');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight; //you can use fixed values but it won't work on other devices
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }
    else{
        content.classList.remove('active');
    }
});