function Write(el){
    const textArray = el.innerHTML.split('')
    el.innerHTML = ''
    textArray.forEach((letra,i)=>{
        setTimeout(()=>{
            el.innerHTML += letra
        },75 * i)
    });
}

const title = document.querySelector('h1')
Write(title)