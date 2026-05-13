// exemplo pratico
let contador = 1;
if (true) {
  let contador = 2; // Esta é uma variável, local if 
  console.log(contador); // Saída: 2
}
console.log(contador); // Saída: 1 (valor original)

  // Reatribução
  let x = 10;
  x = 20; // permitido