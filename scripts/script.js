const me = document.querySelector('.me');
const you = document.querySelector('.chatbud')
const message = document.querySelector('.message')


function myMessage(){

    var newChat = me.cloneNode(true);
    newChat.innerHTML = message.value;
    newChat.style.display = "block";
    document.querySelector('.chatArea').append(newChat);
    message.value = '';

    console.log('Message Sent')
}

function yourMessage(){

    var newChat = you.cloneNode(true)
    newChat.innerHTML = message.value
    newChat.style.display = "block";
    document.querySelector('.chatArea').append(newChat);
    message.value = ''
    console.log('Message Sent')
}