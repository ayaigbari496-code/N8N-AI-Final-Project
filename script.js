document.getElementById('sendBtn').onclick = function() {
    
    var inputField = document.getElementById('userInput');
    var userText = inputField.value;

    if (userText == "") {
        return;
    }

    var chatBox = document.getElementById('myBox');
    chatBox.innerHTML = chatBox.innerHTML + "<p><strong>אני:</strong> " + userText + "</p>";
    
    inputField.value = "";

    var myData = {
        chatInput: userText
    };

    fetch("http://localhost:5678/webhook/cdc5e4b8-6566-434f-896a-956ca5871f6b/chat", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myData)
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        var botText = data.output;
        chatBox.innerHTML = chatBox.innerHTML + "<p><strong>בוט:</strong> " + botText + "</p>";
        chatBox.scrollTop = chatBox.scrollHeight;
    });
};
