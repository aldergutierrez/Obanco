//set button id on click to hide first modal
$("#signin").on( "click", function() {
        $('#myModal1').modal('hide');  
});
//trigger next modal
$("#signin").on( "click", function() {
        $('#myModal2').modal('show');  
});
//set button id on click to hide first modal
$("#escanear").on( "click", function() {
        $('#myModal2').modal('hide');  
});
//trigger next modal
$("#escanear").on( "click", function() {
        $('#myModal3').modal('show');  
});

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');

	}, 2000);
	
});

$(document).ready(function() {
 var swiper1 = new Swiper('.s1');


});

$(document).ready(function() {
 var swiper2 = new Swiper('.s2');


});


$(document).ready(function() {


var me = {};
me.avatar = "images/review_2.jpg";

var you = {};
you.avatar = "images/review_1.jpg";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro" style ="background-color: #1b9de8;">' +
                            '<div class="text text-r">' +
                                '<p style ="color: white;">'+text+'</p>' +
                                '<p style ="color: white;"><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
            $(".chat").append(control).scrollTop($(".chat").prop('scrollHeight'));
        }, time);
    
}

function resetChat(){
    $(".chat").empty();
}

$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("you", text);              
            $(this).val('');
        }
    }
});

$('body > div > div > div:nth-child(2) > span').click(function(){
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
});

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("me", "Hola, Claudia Villalobos, buen dia. En que podemos ayudarte?", 0);  
insertChat("you", "Hola, buen dia, no encuentro la opcion para dar de alta una tarjeta", 1500);
insertChat("me", "Claro, te ayudamos", 3500);
insertChat("you", "Por favor :)",7000);
insertChat("me", "Presiona el icono de las 3 barritas, que se encuentra en la esquina superior derecha, ahi veras un menu de opciones", 9500);
insertChat("you", "Listo! ya la encontre, muchas gracias", 12000);


//-- NOTE: No use time on insertChat.



});








//-- Barra tipo dona

$(document).ready(function(){
    var ctx = $("#mycanvas").get(0).getContext("2d");

    var data = [
        {
            value: 3200,
            color: "#0075C9",
            highlight: "lightskyblue",
            label: "Operaciones"
        },
        {
            value: 6500,
            color: "#000",
            highlight: "lightskyblue",
            label: "Depositos"
        },
        {
            value: 2500,
            color: "#fff",
            highlight: "lightskyblue",
            label: "Retiros"
        }
    ];

    var chart = new Chart(ctx).Doughnut(data);
});



//Tabla movimientos

$('#myList a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})


$('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first-child').tab('show') // Select first tab
$('#myList a:last-child').tab('show') // Select last tab
$('#myList a:nth-child(3)').tab('show') // Select third tab

