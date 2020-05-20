'use strict';

let chatWidget = document.querySelector(".chat-widget"),
    messages = document.querySelector(".chat-widget__messages"),
    inputMessage = document.getElementById("chat-widget__input"),
    chatArea = document.querySelector(".chat-widget__messages-container");


let answers = ["Добрый день!", "Всего доброго!", "Нет", "Да", "Чем могу помочь?"];    
chatWidget.addEventListener('click', function(){
    chatWidget.classList.add("chat-widget_active");
    let timer = setTimeout(ask, 30000);


    document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13 && inputMessage.value != "") {
        let dateHours = new Date().getHours();
        let dateMinutes = new Date().getMinutes();
        let data = 
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${dateHours}:${dateMinutes}</div>
          <div class="message__text">
            ${inputMessage.value}
          </div>
        </div>
        `;
        inputMessage.value="";
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${dateHours}:${(dateMinutes<10 ? '0':'')+dateMinutes}</div>
            <div class="message__text">${answers[Math.floor(Math.random()*4)]}</div>
        </div>
        `;
        chatArea.scrollTop = chatArea.scrollHeight;
        clearTimeout(timer);
    }
});

});
function ask () {
    let dateHours = new Date().getHours();
    let dateMinutes = new Date().getMinutes();
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${dateHours}:${(dateMinutes<10 ? '0':'')+dateMinutes}</div>
        <div class="message__text">Вы тут?</div>
    </div>
    `; 
}
