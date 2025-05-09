


const container = document.querySelector('.container');  
const registerBtn = document.querySelector('.register-btn');  
const loginBtn = document.querySelector('.login-btn');  

// Check that the buttons exist before attaching event listeners  
if (registerBtn) {  
    registerBtn.addEventListener('click', () => {  
        container.classList.add('active');  
    });  
}  

if (loginBtn) {  
    loginBtn.addEventListener('click', () => {  
        container.classList.remove('active');  
    });  
}  




const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    hamburger.addEventListener('click', () => {
      sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });



    const chat = document.getElementById('chat');
      const form = document.getElementById('chat-form');
      const userInput = document.getElementById('user-input');
  
      const botReply = (input) => {
        // Simulated AI response logic
        const responses = [
          "Tell me more about that.",
          "That sounds tough. I'm here with you.",
          "How long have you been feeling this way?",
          "Have you tried any coping strategies that help?",
          "Thanks for sharing. You’re doing great by opening up."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
      };
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message === '') return;
  
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.textContent = message;
        chat.appendChild(userMsg);
  
        userInput.value = '';
  
        // Scroll to bottom
        chat.scrollTop = chat.scrollHeight;
  
        // Add bot response
        setTimeout(() => {
          const botMsg = document.createElement('div');
          botMsg.className = 'message bot';
          botMsg.textContent = botReply(message);
          chat.appendChild(botMsg);
          chat.scrollTop = chat.scrollHeight;
        }, 800);
      });

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform registration logic here (e.g., send data to backend)

    // Redirect after success
    window.location.href = "login.html";
  });


if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields");
  } else {
    window.location.href = "login.html";
  }
  