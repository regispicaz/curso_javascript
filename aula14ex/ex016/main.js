//Função que mostra texto alterado com dados inseridos pelo usuário
function clicar(){
    
    if(passo_init != null, passo_end != null, passo_calc != null ){
         //Variáveis para recebimento dos valores inseridos pelo usuário
         var passo_init = document.querySelector("#init").value;
         var init_vle = passo_init;
         var passo_end = document.querySelector("#end").value;
         var end_vle = passo_end;
         var passo_calc = document.querySelector("#walk");
         var calc_vle = passo_calc;
         
         //Imprimindo na tela os valores coletaods
         document.querySelector("#res").innerHTML =`Passo inicial é ${init_vle}, o passo final é ${end_vle}!`
        
    }else{
        alert("Os camos devem estar preenchidos")
    }
    
    
}
