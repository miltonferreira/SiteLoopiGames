
var firestore = firebase.firestore();
let dbMovies = firestore.collection("SiteLoopiGames");

var btnContact = document.querySelector('.jl-btn-contact');     // botao toggle de abrir fecha caixa de contatos

// Abrindo e Fechando Informações de Contatos
btnContact.addEventListener('click', function(){
    let boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');  //indica pra mostra ou não caixa de contatos
    this.classList.toggle('jl-change-icon');
});

// Animação Elementos on Scroll com waypoints
var myScrollDown = document.querySelector('.jl-scroll-down');

var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
        myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '70%'
});

// sistema de enviar email para o firebase
var btnEmail = document.querySelector('#lp-btn-email');             // botao de enviar email

// Pega email inserido
let inputEmail = document.querySelector('#lp-input-email');         // input do email

btnEmail.addEventListener('click', function(){
    saveEmailinGames(inputEmail);    // recebe o valor do campo de Input
});

// salva o filme no firebase ----------------------------------------
function saveEmailinGames(inputEmail){

    if(inputEmail.value == ""){
        inputEmail.classList.add('lp-empty-field');
        alert("Insira um email para receber as atualizações dos games!");
        return;
    }

    var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());

    var data = {
        added: myTimestamp,
        email: inputEmail.value,
        type: 'Games',
    };
    
    // salva o filme no firebase
    dbMovies.add(data).then(()=>{

        inputEmail.classList.remove('lp-empty-field');
        alert("Seu email foi recebido com sucesso!");
        clearForm();                            // limpa formulario
        
    }).catch((error)=>{
        console.log(error);
        alert(error);
    });

}

function saveEmailinUdemy(inputEmail){

    if(inputEmail.value == ""){
        inputEmail.classList.add('lp-empty-field');
        alert("Insira um email para receber informações sobre cursos!");
        return;
    }

    var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());

    var data = {
        added: myTimestamp,
        email: inputEmail.value,
        type: 'Udemy',
    };
    
    // salva o filme no firebase
    dbMovies.add(data).then(()=>{

        inputEmail.classList.remove('lp-empty-field');
        alert("Seu email foi recebido com sucesso!");
        clearForm();                            // limpa formulario
        
    }).catch((error)=>{
        console.log(error);
        alert(error);
    });

}

// limpa os campos do formulario ---------------------------------------------
function clearForm(){
    inputEmail.value = "";
}

// retorna o tempo -------------------------------------------------------------------------------
function updateTime(){
    return Math.floor(new Date().getTime()/1000.0); 
}