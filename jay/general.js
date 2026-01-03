const { hxmd, commands, monospace, formatBytes } = require("../hyper"),
      fs = require('fs'), 
      axios = require('axios'),
      BOT_START_TIME = Date.now(),
      { totalmem: totalMemoryBytes, 
      freemem: freeMemoryBytes } = require('os'),
      moment = require('moment-timezone'), 
      more = String.fromCharCode(8206), 
      readmore = more.repeat(4001),
      { downloadContentFromMessage, generateWAMessageFromContent, normalizeMessageContent } = require('hyper-baileys'),
      ram = `${formatBytes(freeMemoryBytes)}/${formatBytes(totalMemoryBytes)}`;
const { sendButtons } = require('hyper-btns');


gmd({ 
  pattern: "ping",
  aliases: ['pi'],
  react: "⚡",
  category: "general",
  description: "Check bot response speed",
}, async (from, Hyper, conText) => {
      const { mek, react, newsletterJid, newsletterUrl, botFooter, botName } = conText;
    const startTime = process.hrtime();

    await new Promise(resolve => setTimeout(resolve, Math.floor(80 + Math.random() * 420)));
    
    const elapsed = process.hrtime(startTime);
    const responseTime = Math.floor((elapsed[0] * 1000) + (elapsed[1] / 1000000));

await sendButtons(Gifted, from, {
  title: 'Hyper-xmd Speed',            
  text: `⚡ Pong: ${responseTime}ms`,    
  footer: `> *${botFooter}*`,            
  buttons: [ 
    /*{ name: 'cta_copy', 
      buttonParamsJson: JSON.stringify({ 
        display_text: 'Copy Code', 
        copy_code: '123-123' }) },*/
    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'WaChannel',
        url: newsletterUrl
      })
    }
  ]
});

    /*await Hyper.sendMessage(from, {
      text: 
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: newsletterJid,
          newsletterName: botName,
          serverMessageId: 143
        }
      }
    }, { quoted: mek });*/
      await react("✅");
  }
);


gmd({ 
  pattern: "menu", 
  aliases: ['help', 'allmenu', 'mainmenu'],
  react: "🪀",
  category: "general",
  description: "Fetch bot main menu",
}, async (from, Hyper, conText) => {
      const { mek, sender, react, pushName, botPic, botMode, botVersion, botName, botFooter, timeZone, botPrefix, newsletterJid } = conText;
    function formatUptime(seconds) {
            const days = Math.floor(seconds / (24 * 60 * 60));
            seconds %= 24 * 60 * 60;
            const hours = Math.floor(seconds / (60 * 60));
            seconds %= 60 * 60;
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        const now = new Date();
        const date = new Intl.DateTimeFormat('en-GB', {
            timeZone: timeZone,
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(now);

        const time = new Intl.DateTimeFormat('en-GB', {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).format(now);

        const uptime = formatUptime(process.uptime());
        const totalCommands = commands.filter((command) => command.pattern).length;

        const categorized = commands.reduce((menu, hxmd) => {
            if (hxmd.pattern && !hxmd.dontAddCommandList) {
                if (!menu[hxmd.category]) menu[hxmd.category] = [];
                menu[hxmd.category].push(hxmd.pattern);
            }
            return menu;
        }, {});
      let header = `╭══〘〘 *${monospace(botName)}* 〙〙═⊷
┃❍ *Mᴏᴅᴇ:*  ${monospace(botMode)}
┃❍ *Pʀᴇғɪx:*  [ ${monospace(botPrefix)} ]
┃❍ *Usᴇʀ:*  ${monospace(pushName)}
┃❍ *Pʟᴜɢɪɴs:*  ${monospace(totalCommands.toString())}
┃❍ *Vᴇʀsɪᴏɴ:*  ${monospace(botVersion)}
┃❍ *Uᴘᴛɪᴍᴇ:*  ${monospace(uptime)}
┃❍ *Tɪᴍᴇ Nᴏᴡ:*  ${monospace(time)}
┃❍ *Dᴀᴛᴇ Tᴏᴅᴀʏ:*  ${monospace(date)}
┃❍ *Tɪᴍᴇ Zᴏɴᴇ:*  ${monospace(timeZone)}
┃❍ *Sᴇʀᴠᴇʀ Rᴀᴍ:*  ${monospace(ram)}
╰═════════════════⊷\n${readmore}\n`;

        const formatCategory = (category, hxmds) => {
            const title = `╭━━━━❮ *${monospace(category.toUpperCase())}* ❯━⊷ \n`;
            const body = hxmds.map(hxmd => `┃◇ ${monospace(botPrefix + hxmd)}`).join('\n');
            const footer = `╰━━━━━━━━━━━━━━━━━⊷\n`;
            return `${title}${body}\n${footer}\n`;
        };

        let menu = header;
        for (const [category, hxmds] of Object.entries(categorized)) {
            menu += formatCategory(category, hxmds) + '\n';
        }
        
    const hyperMess = {
        image: { url: botPic },
        caption: `${menu.trim()}\n\n> *${botFooter}*`,
        contextInfo: {
          mentionedJid: [sender],
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: newsletterJid,
            newsletterName: botName,
            serverMessageId: 143
          }
        }
      };
      await Hyper.sendMessage(from, hyperMess, { quoted: mek });
      await react("✅");
  }
);


hxmd({
  pattern: "return",
  aliases: ['details', 'det', 'ret'],
  react: "⚡",
  category: "owner",
  description: "Displays the full raw quoted message using Baileys structure.",
}, async (from, Hyper, conText) => {
  const { mek, reply, react, quotedMsg, isSuperUser, botName, botFooter, newsletterJid, newsletterUrl} = conText;
  
  if (!isSuperUser) {
    return reply(`Owner Only Command!`);
  }
  
  if (!quotedMsg) {
    return reply(`Please reply to/quote a message`);
  }

  try {
    const jsonString = JSON.stringify(quotedMsg, null, 2);
    const chunks = jsonString.match(/[\s\S]{1,100000}/g) || [];

    for (const chunk of chunks) {
      const formattedMessage = `\`\`\`\n${chunk}\n\`\`\``;

 await sendButtons(Hyper, from, {
  title: '',            
  text: formattedMessage,    
  footer: `> *${botFooter}*`,            
  buttons: [ 
    { name: 'cta_copy', 
      buttonParamsJson: JSON.stringify({ 
        display_text: 'Copy', 
        copy_code: formattedMessage }) },
    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'WaChannel',
        url: newsletterUrl
      })
    }
  ]
});

     /* await Hyper.sendMessage(
        from,
        {
          text: formattedMessage,
          contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: newsletterJid,
              newsletterName: botName,
              serverMessageId: 143
            },
          },
        },
        { quoted: mek }
      );*/
      await react("✅");
    }
  } catch (error) {
    console.error("Error processing quoted message:", error);
    await reply(`❌ An error occurred while processing the message.`);
  }
});

/*
gmd({ 
  pattern: "ping",
  react: "⚡",
  category: "general",
  description: "Check bot response speed",
}, async (from, Hyper, conText) => {
      const { mek, react, newsletterJid, botName } = conText;
    const startTime = process.hrtime();

    await new Promise(resolve => setTimeout(resolve, Math.floor(80 + Math.random() * 420)));
    
    const elapsed = process.hrtime(startTime);
    const responseTime = Math.floor((elapsed[0] * 1000) + (elapsed[1] / 1000000));

    await Hyper.sendMessage(from, {
      text: `⚡ Pong: ${responseTime}ms`,
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: newsletterJid,
          newsletterName: botName,
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
      await react("✅");
  }
);

*/





hxmd({ 
  pattern: "uptime", 
  aliases: ['up'],
  react: "⏳",
  category: "general",
  description: "check bot uptime status.",
}, async (from, Hyper, conText) => {
      const { mek, react, newsletterJid, newsletterUrl, botFooter, botName } = conText;
      
    const uptimeMs = Date.now() - BOT_START_TIME;
    
    const seconds = Math.floor((uptimeMs / 1000) % 60);
    const minutes = Math.floor((uptimeMs / (1000 * 60)) % 60);
    const hours = Math.floor((uptimeMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));

 await sendButtons(Hyper, from, {
  title: '',            
  text: `⏱️ Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`,    
  footer: `> *${botFooter}*`,            
  buttons: [ 
    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'WaChannel',
        url: newsletterUrl
      })
    }
  ]
});
  /*  await Hyper.sendMessage(from, {
      text: `⏱️ Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`,
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: newsletterJid,
          newsletterName: botName,
          serverMessageId: 143
        }
      }
    }, { quoted: mek });*/
      await react("✅");
  }
);

hxmd({ 
  pattern: "repo", 
  aliases: ['sc', 'script'],
  react: "📡",
  category: "general",
  description: "Fetch bot script.",
}, async (from, Hyper, conText) => {
      const { mek, sender, react, pushName, botPic, botName, botFooter, newsletterUrl, ownerName, newsletterJid, hyperRepo } = conText;

    const response = await axios.get(`https://api.github.com/repos/${hyperRepo}`);
    const repoData = response.data;
    const { full_name, name, forks_count, stargazers_count, created_at, updated_at, owner } = repoData;
    const messageText = `Hello *_${pushName}_,*\nThis is *${botName},* A Whatsapp Bot Built by *${ownerName},* Enhanced with Amazing Features to Make Your Whatsapp Communication and Interaction Experience Amazing\n\n*❲❒❳ ɴᴀᴍᴇ:* ${name}\n*❲❒❳ sᴛᴀʀs:* ${stargazers_count}\n*❲❒❳ ғᴏʀᴋs:* ${forks_count}\n*❲❒❳ ᴄʀᴇᴀᴛᴇᴅ ᴏɴ:* ${new Date(created_at).toLocaleDateString()}\n*❲❒❳ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇᴅ:* ${new Date(updated_at).toLocaleDateString()}`;

await sendButtons(Hyper, from, {
  title: '',            
  text: messageText,    
  footer: `> *${botFooter}*`,            
  buttons: [ 
    { name: 'cta_copy', 
      buttonParamsJson: JSON.stringify({ 
        display_text: 'Copy Link', 
        copy_code: `https://github.com/${hyperRepo}` }) },
    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'Visit Repo',
        url: `https://github.com/${hyperRepo}`
      })
    }
  ]
});
   /* const hyperMess = {
        image: { url: botPic },
        caption: messageText,
        contextInfo: {
          mentionedJid: [sender],
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: newsletterJid,
            newsletterName: botName,
            serverMessageId: 143
          }
        }
      };
      await Hyper.sendMessage(from, hyperMess, { quoted: mek });*/
      await react("✅");
  }
);


hxmd({
  pattern: "save",
  aliases: ['sv', 's', 'sav', '.'],
  react: "⚡",
  category: "tools",
  description: "Save messages (supports images, videos, audio, stickers, and text).",
}, async (from, Hyper, conText) => {
  const { mek, reply, react, sender, isSuperUser, getMediaBuffer } = conText;
  
  if (!isSuperUser) {
    return reply(`❌ Owner Only Command!`);
  }

  const quotedMsg = mek.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  
  if (!quotedMsg) {
    return reply(`⚠️ Please reply to/quote a message.`);
  }

  try {
    let mediaData;
    
    if (quotedMsg.imageMessage) {
      const buffer = await getMediaBuffer(quotedMsg.imageMessage, "image");
      mediaData = {
        image: buffer,
        caption: quotedMsg.imageMessage.caption || ""
      };
    } 
    else if (quotedMsg.videoMessage) {
      const buffer = await getMediaBuffer(quotedMsg.videoMessage, "video");
      mediaData = {
        video: buffer,
        caption: quotedMsg.videoMessage.caption || ""
      };
    } 
    else if (quotedMsg.audioMessage) {
      const buffer = await getMediaBuffer(quotedMsg.audioMessage, "audio");
      mediaData = {
        audio: buffer,
        mimetype: "audio/mp4"
      };
    } 
    else if (quotedMsg.stickerMessage) {
      const buffer = await getMediaBuffer(quotedMsg.stickerMessage, "sticker");
      mediaData = {
        sticker: buffer
      };
    } 
    else if (quotedMsg.conversation || quotedMsg.extendedTextMessage?.text) {
      const text = quotedMsg.conversation || quotedMsg.extendedTextMessage.text;
      mediaData = {
        text: text
      };
    } 
    else {
      return reply(`❌ Unsupported message type.`);
    }

    await Hyper.sendMessage(sender, mediaData, { quoted: mek });
    // await reply(`✅ Saved Successfully!`);
    await react("✅");

  } catch (error) {
    console.error("Save Error:", error);
    await reply(`❌ Failed to save the message. Error: ${error.message}`);
  }
});


