clicksBeforeMsg = 2
cooldown = 0

// maximum scamming potential while also letting the website be usable
function doScam() {
    let msgs = [`Critical alert from Microsoft. Your computer has alerted us. Malicious Pornographic Spyware/Riskware Detected Error #xxxxxxxxx Please call us immediately at 1-800-000-0000 Do not ignore this critical alert If you close this page, your computer will be blocked to prevent further damage to our network, and hard drive may possibly be deleted.
    The following information is at risk: 
        ** Financial Data 
        ** Account logins and passwords 
        ** Photos and other personal files
    DO NOT PRESS ANY KEY UNLESS YOU ARE INSTRUCTED TO DO SO TOLL FREE 1-800-000-0000`, 
    "* Thank 🙌 you 👈 for using 😏 .T. Mobile 📲 . Your 👉 recent 🕑 purchase 🛒 has got 🉐 you 👉 eligible 😱 for an exclusive 💂 reward 💰 worth 💸 $100 😆😂😅. You 👈 are one ☝🙏🏼 of 10 🔟 randomly 🎲 selected 👇 .T. Mobile 📱 customers 💩 who will receive 😩 this reward 💰. You 😀😬👈 have been rewarded 🎁 a free 🆓 reward 🎁🅱 worth 💰 $100 💯. Just click 🖱 on 🔛🏽 the button 🔘 below 🙆 to claim 🌊 your 🍑👉 reward 💰."]
    alert(msgs[Math.floor(Math.random() * msgs.length)]);
    cooldown = clicksBeforeMsg;
}

document.body.addEventListener("click", function (evt) {
    if (cooldown == 0){
        doScam();
    }
    else {
        cooldown--;
    }
});
