//HANYA BOT  YANG SUKA ERROR ERROR 🗿

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner ="6281281872699"
global.nomerOwner2 = "6281281872699"
global.ownerName = "Shizuka"
global.namabot = "© Shizuka Bot"
global.apikey = "xxxxx" //masukan apikey heavycraft.my.id jika ingin semua fitur work
global.botName = "© Shizuka Bot"
global.autoJoin = true
global.sessionName = 'session'
global.packName = "Shizuka Bot"
global.authorName = "Created By Rzkymlna"
global.namastore = "Shizuka Store"
global.autoblok212 = true
global.nodana = "081281872699"
global.nogopay = "-"
global.noovo = "-"
global.limitCount = "50"
global.qris = "-"
global.TextT = `Shizuka Bot` //
global.textT = `Shizuka Bot` // 

global.logo = "https://h.top4top.io/p_29287tnhy3.jpeg"
global.logos = "https://cdn.discordapp.com/attachments/978569759085985802/1193434707497599126/bd37a6ba-22ef-4d5e-9add-c138064e25a2.jpeg?ex=65acb3af&is=659a3eaf&hm=ad3bebe2c63a64d1506617bc8cc41be725f8870918358b100f0b151a80ce0df0&"
global.sgc = ''
global.syt = ''
global.sig = 'https://instagram.com/rizkymaulanasidik_'
const mess = {
wait: '_Command kamu sedang di proses mohon menunggu..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi kesalah silahkan coba lagi nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit, .buylimit untuk membeli limit!',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Shizuka Sebagai Admin Terlebih Dahulu!!!'
}

}
global.limitawal = {
    premium: "Unlimited",
    free: 30
}
global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://h.top4top.io/p_29287tnhy3.jpeg",
   
    ]
    global.buruan = {
        ikan: 5,
        ayam: 5,
        kelinci: 5,
        domba: 5,
        sapi: 5,
        gajah: 5
     }
     global.rpg = {
        darahawal: 100,
        besiawal: 5,
        goldawal: 1,
        emeraldawal: 1,
        umpanawal: 1,
        potionawal: 1
     }

//Gausah Juga
global.owner = ['6281281872699']
global.ownertag = '6281281872699'
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})