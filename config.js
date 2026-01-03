const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || 'Gifted~H4sIAAAAAAAAA5VU25KqRhT9l37VOnIbQKumKgioKCgoXlN5aKHBRgTsbkA9ZVX+IFV5ylvyGfme/EDyCSmcmTPnITmZ8NR071p77b3W3p9BlmOKJugKep9BQXAFGWqO7Fog0AP9MooQAW0QQgZBD3huVQzON3VrX4a32ZZtropQTleVSoxsrhlnFmhOdUgUknnP4N4GRblPcfANwDBzjbpz3El6AuVIV+hllE6LTjfLb8IqsAxNmzNx6MeWRp/BvUGEmOAsNosDOiEC0wm6uhCTj9F39J3CLF/EwXmQJVvtNh2q5Ghyaa3y0SCfosFsISRp2hHVj9H3vRjFIXcWtPWBc5bi2lxcN/I5rVIs+M7GPSIrwXB69pb1C32K4wyFVogyhtn1w31fzqKbOedKZysf9tA39nxHygxvM82Hxng+1it/KStmHNdm/DHi8rjiFlbdMuukGh3s1rbiJWuncoqNU2xOZi5LL6X91D375tfEXfLmleP/6TvW7UBapHvjnBlR5xjSqL/Jc1HGHXFdSNswmNOrbS+80DQ/Rn+/2jN3OCi7Qj53Fc1f36TTgClCa7Y5R6Nc6vYJL5nZLPLUd/qQleRbLNcul8B8uI/GpU/2YYiNtbLpiuJMNnw7t+Z4otX2oX87wUtAskG4ErTNxuZ8u2gFy7Cari3LtJfhifQnU8NxUy8fa33t+VHREV2tEPT4exsQFGPKCGQ4z5o7QZDaAIbVAgUEsUd7wYaex8bFwsVo4jo3x91aT8Z2vc3F2b4vuYFWOPxaZ0MYDOgzaIOC5AGiFIUjTFlOrg6iFMaIgt73P7RBhi7sRbgmnci3QYQJZcusLNIchm+qvj3CIMjLjC2uWaA3B0RAj3u/RozhLKZNH8sMkuCAK6QfIKOgF8GUoi8VIoJC0GOkRF+mVs/DpvGaa492vGuDNjg9BMEh6AHhSeJ5UVVEgVN6Qvc7+qluYGFRfMoQA22QvoYJPCfLXamrKqqkNpHNQxtksAEDOinpAZG/fv35xz9++e3P339q2v9KvskVIgZxSpvISdUqJUc3xzdDovlwqJmxpscaeC/2zTUvqjjdwqLDyTisL+Q8JOV49aQb6tCTB643cxPbqYWEdEY77NfP/wDSkPcDFmnUOFqGpJ9HqxubX9Mjc6Ahxi3pVsKVo9SdJddyJxrnJC2TXdV+sjiqHd5fty6yG5V13zwOth2l3m5kQbwpo4fF2iBEFQ7Q18k8NZucljRhdSUrhTvzOHRZdbhY2ufjRWKs+4agJEYL1dFutquSsTkRb8hKmTE8QOfibXcn/rKJp7NMloKCyZTfJHPDe/HzY57S1z2GH05rZGx+I4wea+FVj/+U9YV44z7u3v4K43XR/Muw9n0XLuw+xpvAgfLhrOAV8uJO/zg7+JyRSNebM83lzkXYHlVwv//QBkUKWZSTE+gBmIUkf5iG5GVjZyuL8m8k07WlZcbxtKk8hZRp7yPi4xOiDJ4K0OMVWZF4WRCVlyiX5MUI0gPoAXHe3Yndxu9XrSgWDLK3iQNa8w0jBdz/Bsgmn1SNBwAA',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐇𝐘𝐏𝐄𝐑 𝐓𝐄𝐂𝐇",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "",  // put only one number
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "", // can be multiple numbers separated by commas
    BOT_NAME : process.env.BOT_NAME || '𝐇𝐘𝐏𝐄𝐑 𝐗𝐌𝐃',
    FOOTER : process.env.FOOTER || '𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗛𝗬𝗣𝗘𝗥 𝗧𝗘𝗖𝗛',
    CAPTION : process.env.CAPTION || '©𝟐𝟎𝟐𝟒 𝐇𝐘𝐏𝐄𝐑 𝐗𝐌𝐃 𝐕𝟓',
    VERSION: process.env.VERSION || '5.0.0',
    BOT_PIC : process.env.BOT_PIC || 'https://gitcdn.giftedtech.co.ke/image/AZO_image.jpg',            
    MODE: process.env.MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'false', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*ʏᴏᴜʀ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '',
    YT: process.env.YT || 'youtube.com/@giftedtechnexus',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363408839929349@newsletter',
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y',
    BOT_REPO: process.env.BOT_REPO || 'hyper-tech254/hyper-xmd',
    PACK_NAME: process.env.PACK_NAME || '𝐇𝐘𝐏𝐄𝐑 𝐌𝐃',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝐇𝐘𝐏𝐄𝐑 𝐓𝐄𝐂𝐇'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
