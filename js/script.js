document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatBody = document.querySelector('.chat-body');
    const chatStatus = document.getElementById('chat-status');

    // Update last seen dynamically
    setTimeout(() => {
        chatStatus.textContent = 'Online';
    }, 2000);

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message', 'sent');
            newMessage.innerHTML = `
                <p>${messageText}</p>
                <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            `;
            chatBody.appendChild(newMessage);
            messageInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
        }
    });
});
