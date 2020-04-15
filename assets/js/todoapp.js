// Check off specific todos by clicking
// Check on with another click
// $('li').click(function(){
//     //if li is gray
//     if($(this).css('color') === 'rgb(128, 128, 128)'){
//         $(this).css({
//             color: 'black',
//             textDecoration: 'none' //text-decoration in js
//         });
//     } else {
//         $(this).css({
//             color: 'gray',
//             textDecoration: 'line-through' //text-decoration in js
//         });    
//     }
// });

//instead of if statement, make a css class and use toggleClass()
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(){
    $(this).parent().fadeOut(500, function(){//this refers to span
        $(this).remove();//this refers to parent (li)
    });
    event.stopPropagation();
});

//add a listener that fires when we hit Enter key
$('input').keypress(function(e){
    if(e.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val()
        //clear out the input
        $(this).val('');
        //create a new li and add to ul
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>'+ todoText +'</li>');
    }
});

$('#toggleForm').click(function(){
    $('input').fadeToggle();
});