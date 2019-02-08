

function somar(price){
    precos = ['preco1','preco2','preco3','preco4','preco5']
    
    var i = 0    
    
    while (i<5){
        
        if (precos[i]==price){
            var preco = document.getElementById(price).innerHTML            
            var preco = preco.split(' ')
            
            var carrinho = document.getElementById("carrinho").innerHTML
            var carrinho = carrinho.split(' ')
            var soma = parseInt(carrinho[1])+parseInt(preco[1]);
            
            var cont = parseInt(document.getElementById("item").innerHTML)+ 1
            document.getElementById('carrinho').innerHTML = 'R$ '+soma
            document.getElementById('item').innerHTML = cont;
             

            window.alert('Produto adicionado ao carrinho!')
        }
        
        i=i+1
    }   
    
}

function comprar(){
    
    var itens = ['produto1','produto2','produto3'];
    var precoUnitario = [100,115,200];
    var quantidade = [];
    var quant = 0;
    var preco = 0;
    quantidade.push(document.getElementById("produto1").value);
    quantidade.push(document.getElementById("produto2").value);
    quantidade.push(document.getElementById("produto3").value);
    
    for (var i = 0; i < itens.length; i++) {
      preco = preco + (quantidade[i] * precoUnitario[i]);
      quant = quant + parseInt(quantidade[i]);
    }
       window.alert("Preço total: "+"R$ " + preco + ",00");
       document.getElementById('totalcart').innerHTML = 'R$ '+ preco+',00';
       document.getElementById('carrinho').innerHTML = 'R$ '+ preco+',00';
       document.getElementById('item').innerHTML = quant;   
  }


  function enviar(){
    document.getElementById('contato').innerHTML = '<h3><i>Mensagem enviada com sucesso!<i></h3>'
  }



