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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "19293469854,2348079130432,2348034711405";
  
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_39_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLYWlMZGpEeWI3cWZDNHkvbFVmWWJmRE8rTThTb2t2U1pEckJFdjFTd3hZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkRDhTOXpncFRnT1czRDRKaUhQaDNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1NWFhMDY0LWM1MTctNDg3NS1iZDIxLWE4NGQyZGUwZGFlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMjAsXG4gICAgICA2LFxuICAgICAgMTAzLFxuICAgICAgMTY2LFxuICAgICAgMjI1LFxuICAgICAgNjEsXG4gICAgICAxNjEsXG4gICAgICAxNTIsXG4gICAgICA0LFxuICAgICAgMjQ0LFxuICAgICAgMjU0LFxuICAgICAgODUsXG4gICAgICAyMzgsXG4gICAgICA0NixcbiAgICAgIDEyOSxcbiAgICAgIDIxNCxcbiAgICAgIDEyMCxcbiAgICAgIDE1LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTc1LFxuICAgICAgOTMsXG4gICAgICAxNDYsXG4gICAgICAxNzksXG4gICAgICA0MyxcbiAgICAgIDE5NyxcbiAgICAgIDQ1LFxuICAgICAgNzIsXG4gICAgICA4MSxcbiAgICAgIDEzNCxcbiAgICAgIDE1MyxcbiAgICAgIDExOSxcbiAgICAgIDIzMixcbiAgICAgIDI1MSxcbiAgICAgIDY3LFxuICAgICAgNyxcbiAgICAgIDEzOCxcbiAgICAgIDEwNyxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg1SzdDNFpSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3MjU1MTk4OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzI3OTYyNTM2Mzg2OTA6NzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUNOejVJRUVJRE15clVHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwazVMRlQyUlp6ci9VY3FBWnpQYmxHTnN3eDdzRnBnNHhqZW1VTzhQZjM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjcxRTlXanR4RGExNWNjZWhrZ0NxeUV2am9yQ0tML2REZ0E0aU5ZNmNOMkdLa1dYTzU0YVlVUUlEWmszRFNNRU1mZkJDK2lXOVV4T254ZUg1amNhTENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhXbDNOUXhTc0dyekxWSXg1SGJMYk0waExZNWd6L2V1c05MaU5nZUV1MkU0NGV2OTRJWTk0RFpCU2xZMWFBVDdMVlRNS2s0MTdsMzFaTzlmckpkNGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzcyNTUxOTg6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTgzOTg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail-MD",


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
