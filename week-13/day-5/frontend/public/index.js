const firebaseConfig = {
    apiKey: "AIzaSyCO-pldxfyp6f0-Q5L7YBAit-TunjZ0CtM",
    authDomain: "seo-chat-b988e.firebaseapp.com",
    projectId: "seo-chat-b988e",
    storageBucket: "seo-chat-b988e.appspot.com",
    messagingSenderId: "581799017478",
    appId: "1:581799017478:web:d374b12f6bf0bacf245787"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const messagesCollection = db.collection('messages');
const apiUrl = 'http://80.98.81.178:3000';

function getMessages() {
    fetch(`${ apiUrl }/messages`)
        .then((response) => response.json())
        .then((messages) => {
            const tbody = document.getElementById('all-messages');
            tbody.innerHTML = '';

            messages.forEach((message) => {
                const tr = document.createElement('tr');
                const tdDatetime = document.createElement('td');
                const tdSender = document.createElement('td');
                const tdMessage = document.createElement('td');

                const datetime = new Date(message.datetime);

                tdDatetime.textContent = `${ datetime.getFullYear() }.${ datetime.getMonth() + 1 }.${ datetime.getDate() }. ${ datetime.getHours() }:${ datetime.getMinutes() }`;
                tdSender.textContent = message.sender;
                tdMessage.textContent = message.message;

                tr.appendChild(tdDatetime);
                tr.appendChild(tdSender);
                tr.appendChild(tdMessage);

                tbody.prepend(tr);
            });
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function getDBMessages() {
    messagesCollection
        .orderBy('datetime', 'asc')
        .get()
        .then(processDBMessages)
        .then(updateScroll)
        .catch((error) => {
            console.error(error.message);
        });
}

function processDBMessages(messages) {
    const tbody = document.getElementById('all-messages');
    tbody.innerHTML = '';

    messages.forEach((doc) => {
        const message = doc.data();
        const tr = document.createElement('tr');
        const tdDatetime = document.createElement('td');
        tdDatetime.classname = "datetime";
        const tdSender = document.createElement('td');
        tdSender.classname = "sender";
        const tdMessage = document.createElement('td');
        tdMessage.classname = "message";

        const datetime = new Date(message.datetime.seconds * 1000);

        tdDatetime.textContent = `${ datetime.getFullYear() }.${ datetime.getMonth() + 1 }.${ datetime.getDate() }. ${ datetime.getHours() }:${ datetime.getMinutes() }`;
        tdSender.textContent = message.sender;
        tdMessage.textContent = message.message;

        tr.appendChild(tdDatetime);
        tr.appendChild(tdSender);
        tr.appendChild(tdMessage);

        tbody.prepend(tr);
    });
}

getDBMessages();

function sendMessage() {
    const data = {
        sender: document.getElementById('name').value,
        message: document.getElementById('message').value
    };

    fetch(`${ apiUrl }/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((result) => {
        getMessages();
    })
    .catch((error) => {
        console.error(error.message);
    });
}

function sendDBMessage() {
    const data = {
        sender: document.getElementById('name').value,
        message: document.getElementById('message').value,
        datetime: new Date()
    };

    messagesCollection
        .add(data)
        .then((doc) => {
            console.log(`CREATE OK: ${ doc.id }`);
            document.getElementById('message').value = '';
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function updateScroll(){
    var element = document.querySelector('messages-box')
    element.scrollTop = element.scrollHeight;
}

document.getElementById('send-btn').addEventListener('click', sendDBMessage);
// document.getElementById('update-btn').addEventListener('click', getDBMessages);

messagesCollection
    .orderBy('datetime', 'desc')
    .onSnapshot(processDBMessages);