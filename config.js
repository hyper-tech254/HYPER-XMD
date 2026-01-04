const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || 'Gifted~H4sIAAAAAAAAA5VU27KiOBT9l7xqtdxBq07VcFMRQRQv6FQ/RAgY5WYIInb5712cS59+mOk5w1PYSfZae+218wPkBa6QjVow+gFKgm+Qom5J2xKBEdDqOEYE9EEEKQQjYM7KUsysh6Ws99uBcD5jPrg55nUWutta9gmfRHtFnkhzdvkCnn1Q1scUh39IeG8O27Rd6C3nWXM7sRxFkR7raJxog+X8qN05diAuh6Z2YZoX8OwyQkxwnpjlCWWIwNRGrQcx+Rp91SS8vxAeDnOyt0Ita66WWfp6cGkDrpj1xosTvyhhKvDZ/mv0o/VttXQUo83aYt8Tc79Z3sUj5FaVjB7aY2bdrkefSQ1r8k6/wkmOIitCOcW0/bLuvpuxF1UQg+meV+bXrcvZBccw9pVT6IWf10G2Oqleae2mzdeI+2N4E+XtvUFMcnc85zSYLozjKo8PbnYOLrLSq10iCOdjZv1O3CMfXrn8H93D+Q7v3KluWw9f9VO81ucHykqRVRzPAxtigzmVx/C8sXPma/SV5KLuuNK2N7v59OFtlztyshpEXMOEmDubSlmck2JKbcP5pA9pTf7EUl5lpSNvr0O4QenK7iW1FMq6iQaXfcy6Bsui/RSa5mocu4m9rBai6AorT/P5Yqg5g2ayG8TTRFhpcXmd11HeCp4qnpOX14ouqLUiMGKffUBQgitKIMVF/hoT+wBGNx+FBNFXdUHliq07KJqF5UIDyje4lxw0k4uxLJyD9GpshDj07+v7JE9eQB+UpAhRVaFoiitakNZBVQUTVIHR39/7IEd3+ta3Do1n+yDGpKKbvC7TAkYfTf3YhGFY1Dn12zzUuwUiYMR8hhGlOE+qTsY6hyQ84RvST5BWYBTDtEK/CkQERe+xX7e7WxGiEKcVGAHdvvVqwdHNxTySnGIyUZ1E1RMVfKJ9dO1NFmdYWtXEnkXNnVwnpJ5tRd1QJktp7C0X3nnuNNyZDKYHvG5e/iEJGAG4pGjgs9OZHLjYjFUt1gIvqwOOD9t7NA1nzQFJx9kYV/5c1dbE7Dk8GcqtlTMr5W4I9YKdccZGePDG9exq7j3UNb156dAidMMh+h0saDRzkgfCZGj46+FEjMbOoxfMkL5eG8GmgbW62M4oL8V5tt8jGm1Ed7xPtI3rH4Iyuo0ft5vI8QtkapEbLP0oXHJeor75KXs1Mo7ACHCiwLK8IvMcI4949q/qW9P1A5bltxxR0Afp+zGOZSRpKAwVWRGU7mS38TEb6fubhF9t06XufmOMXkc8hx3gf0O9idBZiXn2f8vx/mj8y+Bpaw/6cw3jIHSgdLrKeIuWyUC7LE5rxjgL7cNxC2lw5/YXBTyf3/ugTCGNC5J1Lc0jUuAI9AEp6s6bVh4XfwDT1Y1lJonbVZ7Ciqqffl/jDFUUZiUYsbIki6w85IdvpzxSlFNYncAI8KvhgR+CPshatSx9CunH+AC1+yaxDJ4/ASeOrk1ZBwAA',
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
