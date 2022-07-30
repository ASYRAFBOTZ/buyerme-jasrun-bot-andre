const qrku = "https://telegra.ph/file/9da8600ef8937562526cf.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • All 」
│ • Gopay [085892679513]
│ • Dana  [085646606905]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285892679513
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
