var campo = '';
var campo2 = '';

function busca(){
campo2 = document.getElementById('campobusca').value;
campo2.innerHTML = campo2;
}

function verifi(){
    
        $.ajax({
           // url:'https://api.b7web.com.br/cinema/',
            url:'https://api.tenor.com/v1/search?q='+campo2,
        type:'GET',
        dataType:'json',
        beforeSend:function(){
            $('.filmes').html('<div class="col-md-12"> Carregando ...</div>')
            
        },
        success:function(data){
            console.log(data);
            var html = '';

            for(var i in data.results){
                html += '<div class="col-md-4 "><div class="filme"><img src="'+data.results[i].media[0].gif.url+'" /></div></div>'
            
            }
            
            $('.filmes').html(html);
    
        }
        
    })
}

$(function(){

        $('#campobusca').keyup(function () {
        setTimeout(verifi, 1000);
        busca();
        });

});
