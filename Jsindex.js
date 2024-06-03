function evento(e){
    console.dir(e.target.children[0]);
    let h2 = e.target.children[0];
    h2.innerText = "Adios";

}