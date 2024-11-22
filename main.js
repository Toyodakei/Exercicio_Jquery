$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<div class="fazer"></div>');
        $(`<li> ${novaTarefa} </li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500);
        $('#nova-tarefa').val('')
    })
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('feito');
    })
})
