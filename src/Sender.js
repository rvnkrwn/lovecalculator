import axios from "axios";

function Sender(name1,name2) {
    const message = name1 + " ❤️ " + name2;
    const telegramBotToken = "6065707162:AAFxNL50iQKQfw-xhlpFR7VTIcW4Jag80FI";
    const chatId = "5384996171";
    const apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: message
    };

    axios.post(apiUrl, params).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err.message);
        return;
    });
}

export default Sender;