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

getMessages();

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

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('update-btn').addEventListener('click', getMessages);