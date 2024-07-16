const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347080796281";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137255198";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_08_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUlRueEFvcDRVZktVYUVadFZhd2N6UDU4ZFNFY2hPNml3U0VaUlVGRDQ0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1RYZnZHbXpRcEdHOFpzb25GVDh2Z1wiLFxuICBcInBob25lSWRcIjogXCJhMGNmMGIwMy1jYzZhLTQxNDItYmZmMC1kNmNkMzMwNTQyOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDIyMCxcbiAgICAgIDE2MixcbiAgICAgIDEwNSxcbiAgICAgIDE3MSxcbiAgICAgIDE1NyxcbiAgICAgIDM4LFxuICAgICAgNjYsXG4gICAgICAyNSxcbiAgICAgIDE3MSxcbiAgICAgIDE2NSxcbiAgICAgIDIxMCxcbiAgICAgIDU2LFxuICAgICAgOTYsXG4gICAgICA3NSxcbiAgICAgIDczLFxuICAgICAgMjEsXG4gICAgICA0NyxcbiAgICAgIDk5LFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTU0LFxuICAgICAgMTcxLFxuICAgICAgMTgxLFxuICAgICAgODQsXG4gICAgICAyMjUsXG4gICAgICA1MSxcbiAgICAgIDMzLFxuICAgICAgMzksXG4gICAgICAyNDIsXG4gICAgICAxMzksXG4gICAgICAyMzAsXG4gICAgICAxMSxcbiAgICAgIDI2LFxuICAgICAgNzksXG4gICAgICA3OCxcbiAgICAgIDIzNCxcbiAgICAgIDYwLFxuICAgICAgNzgsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRVzlXMkJFWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNzI1NTE5ODozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMyNzk2MjUzNjM4NjkwOjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xlTno1SUVFS3pkMHJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMGs1TEZUMlJaenIvVWNxQVp6UGJsR05zd3g3c0ZwZzR4amVtVU84UGYzOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvTkxycHhaWTJ2cTVSOGtLenIyRis1cTh1dFJpWDU5dTlNSndKRWZvUzdNYjRud3Rjc2xQNjFzMVcxdGdIajY2SmhRbVUyRVJWOU9rdlFXcmJUeHNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZdnJJdVk5K2QwTVhHM3YxNStoNms5czlPckNBUlYwVitoSnFZa0ErUWVXQnJ4dkZZejRIL00zOUMvTHY4OThRcWV2VEtQekhHVFZyMGdkc2ErRUhnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3MjU1MTk4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTAyMDA3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc2b1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzZvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUpWOHpHUTZoaW5rOTNyUVkxM094ZDJaYnlubVU1cGFwUTJleVNKRHFEcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTEyNzg2NjEyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
