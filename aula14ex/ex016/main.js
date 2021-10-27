//Função que mostra texto alterado com dados inseridos pelo usuário
function clicar(){
   
    let init = document.getElementById("init");
    let end = document.getElementById("end");
    let num = document.getElementById("walk");
    let res = document.getElementById("res");
    
    if(init.value.length == 0 || end.value.length == 0 || num.value.length == 0){
        alert("[ERRO] Faltam os dados!")
    }else{
        res.innerHTML = `Contando`;
        let i = Number(init.value);
        let f = Number(end.value);
        let p = Number(num.value);

        for(let count = i; count <= f; count += p){
            res.innerHTML += `${count}, `
        }
    }   
}