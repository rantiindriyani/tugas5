// main.js
import { hitungLuasLingkaran, hitungLuasPersegi } from './geometri.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  console.log("Aplikasi Perhitungan Geometri");
  console.log("1. Hitung Luas Lingkaran");
  console.log("2. Hitung Luas Persegi");

  rl.question("Pilih tindakan: ", (choice) => {
    if (choice === "1") {
      rl.question("Masukkan jari-jari lingkaran: ", (radius) => {
        const luas = hitungLuasLingkaran(parseFloat(radius));
        console.log(`Luas Lingkaran: ${luas}`);
        rl.close();
      });
    } else if (choice === "2") {
      rl.question("Masukkan panjang sisi persegi: ", (side) => {
        const luas = hitungLuasPersegi(parseFloat(side));
        console.log(`Luas Persegi: ${luas}`);
        rl.close();
      });
    } else {
      console.log("Pilihan tidak valid. Coba lagi.");
      rl.close();
    }
  });
}

main();