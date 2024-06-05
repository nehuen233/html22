function evento(e){
    let hijo = e.target.parentElement.children;
    let clase = e.target;
    clase.className = "boxActivo";
    
    for (let i = 0; i < hijo.length; i++) {
        if (hijo[i].id != e.target.id) {
            hijo[i].className = "box";
        }
        
    }

}