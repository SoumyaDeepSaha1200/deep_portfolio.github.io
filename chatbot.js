// Load responses from JSON file
fetch('chatbot.json')
    .then(response => response.json())
    .then(data => {
        const replies = data;

        // Function to get a random reply from a given category
        function getRandomReply(category) {
            const categoryReplies = replies[category];
            if (!categoryReplies || categoryReplies.length === 0) {
                return replies.default[Math.floor(Math.random() * replies.default.length)];
            }
            return categoryReplies[Math.floor(Math.random() * categoryReplies.length)];
        }

        // Function to send user message and receive a reply
        function sendMessage() {
            const userInput = document.getElementById('userInput').value;
            const chatbox = document.getElementById('chatbox');

            if (userInput.trim() === '') {
                alert('Please enter a message.');
                return;
            }

            const userMessage = document.createElement('p');
            userMessage.innerHTML = `<strong style="color: #ffe600;">You:</strong> ${userInput}`;
            userMessage.classList.add('right'); // Add 'right' class for user messages
            chatbox.appendChild(userMessage);

            // Simulate a reply after a delay
            setTimeout(() => {
                let replyMessage;
                if (userInput.toLowerCase().includes('hi')) {
                    // If user's message contains "hi," use a random reply from "hi" category
                    replyMessage = getRandomReply('hi');
                } 
                else if (userInput.toLowerCase().includes('hello')) {
                    // If user's message contains "hello," use a random reply from "hello" category
                    replyMessage = getRandomReply('hello');
                } 
                else if (userInput.toLowerCase().includes('how are you')) {
                    // If user asks "how are you," use a random reply from "how are you" category
                    replyMessage = getRandomReply('how are you');
                } 
                else if (userInput.toLowerCase().includes('tell me about soumya deep')) {
                    // If user asks "tell me about soumya deep," use a random reply from "tell me about soumya deep" category
                    replyMessage = getRandomReply('tell me about soumya deep');
                } 
                else if (userInput.toLowerCase().includes('thank you')) {
                    // If user asks "tell me about soumya deep," use a random reply from "tell me about soumya deep" category
                    replyMessage = getRandomReply('thank you');
                }
                else if (userInput.toLowerCase().includes('bye')) {
                    // If user asks "tell me about soumya deep," use a random reply from "tell me about soumya deep" category
                    replyMessage = getRandomReply('bye');
                }
                else if (userInput.toLowerCase().includes('how old are you?')) {
                    // If user asks "tell me about soumya deep," use a random reply from "tell me about soumya deep" category
                    replyMessage = getRandomReply('how old are you?');
                } 
                else if (userInput.toLowerCase().includes('what is your favorite color?')) {
                    // If user asks "tell me about soumya deep," use a random reply from "tell me about soumya deep" category
                    replyMessage = getRandomReply('what is your favorite color?');
                } 
                else if (userInput.toLowerCase().includes('what can you do?')) {
                    // If user asks "tell me about soumya deep," use a random reply from "tell me about soumya deep" category
                    replyMessage = getRandomReply('what is your favorite color?');
                } 
                else if (userInput.toLowerCase().includes('who are you')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('who are you?');
                } 
                else if (userInput.toLowerCase().includes('who are you')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('who are you?');
                }
                else if (userInput.toLowerCase().includes('do you have any hobbies?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('do you have any hobbies?');
                }







                else if (userInput.toLowerCase().includes('are you a robot?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('are you a robot?');
                }
                else if (userInput.toLowerCase().includes('where are you from?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('where are you from?');
                }
                else if (userInput.toLowerCase().includes('can you tell a joke?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('can you tell a joke?');
                }
                else if (userInput.toLowerCase().includes('what is the weather like?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('what is the weather like?');
                }
                else if (userInput.toLowerCase().includes('can you sing?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('can you sing?');
                }
                else if (userInput.toLowerCase().includes('tell me a fun fact')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('tell me a fun fact');
                }
                else if (userInput.toLowerCase().includes('what languages do you speak?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('what languages do you speak?');
                }
                else if (userInput.toLowerCase().includes('how can I contact you?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('how can I contact you?');
                }
                else if (userInput.toLowerCase().includes('tell me about artificial intelligence')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('tell me about artificial intelligence');
                }
                else if (userInput.toLowerCase().includes('do you dream?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('do you dream?');
                }
                else if (userInput.toLowerCase().includes('are you smart?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('are you smart?');
                }
                else if (userInput.toLowerCase().includes('tell me about your creator')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('tell me about your creator');
                }
                else if (userInput.toLowerCase().includes('what is the meaning of life?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('what is the meaning of life?');
                }

                else if (userInput.toLowerCase().includes('do you have any hobbies?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('do you have any hobbies?');
                }
                else if (userInput.toLowerCase().includes('do you have any hobbies?')) {
                    // If user asks "who are you," use a random reply from "who are you?" category
                    replyMessage = getRandomReply('do you have any hobbies?');
                }
                else {
                    // For other messages, use a random reply from "default" category
                    replyMessage = getRandomReply('default');
                }

                const reply = document.createElement('p');
                reply.innerHTML = `<strong style="color:#ffe600;">Deep Portfolio:</strong> ${replyMessage}`;
                reply.classList.add('left'); // Add 'left' class for chatbot responses
                chatbox.appendChild(reply);
                chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom of chatbox

                // Text-to-Speech for AI response
                const utterance = new SpeechSynthesisUtterance(replyMessage);
                utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-IN');
                if (utterance.voice) {
                    utterance.lang = 'en-IN';
                } else {
                    // Fallback to default voice if Indian English voice is not available
                    utterance.lang = 'en-IN';
                }
                speechSynthesis.speak(utterance);
            }, 1000);

            document.getElementById('userInput').value = ''; // Clear input field after sending message
        }

        // Bind sendMessage function to the button click event
        document.querySelector('.chatinput button').addEventListener('click', sendMessage);
    })
    .catch(error => {
        console.error('Error fetching replies:', error);
    });
