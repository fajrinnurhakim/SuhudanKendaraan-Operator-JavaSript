// SUHU
let suhu = prompt("Masukkan Nilai Suhu");
let kondisi =
    suhu >= -100 && suhu <= 0
        ? "Beku"
        : suhu >= 1 && suhu <= 100
        ? "Cair"
        : suhu >= 101 && suhu <= 500
        ? "Uap"
        : "Tidak terdefinisi";
// BBM
let jenis = prompt("Apa Jenis Kendaraan anda?");
let cc = jenis == "mobil" ? prompt("berapa cc mobil anda") : "";
let bbm =
    jenis == "plat kuning" || jenis == "motor"
        ? "Subsidi"
        : jenis == "mobil" && cc < 1500
        ? "Pertamax"
        : "Pertamax Turbo";
let cc1 = jenis == "mobil" ? `${cc} cc ` : "";
console.log("Homework Javascript Fundamental-Fajrin Nurhakim");
console.log(
    `1. Ketika suhu air bernilai ${suhu} derajat. Maka,Air dalam kondisi ${kondisi}`
);
console.log(`2. Jika jenis kendaraanmu ${jenis} ${cc1} maka BBM mu ${bbm}`);
