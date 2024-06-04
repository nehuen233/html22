function evento(e){
    console.dir(e.target.children[0]);
    let hijo = e.target.children;
    let clase = e.target;
    clase.className = "boxActivo";
    
    for (let i = 0; i < hijo.length; i++) {
        if (hijo[i].id != e.target.id) {
            hijo[i].className = "box";
        }
        
    }

}