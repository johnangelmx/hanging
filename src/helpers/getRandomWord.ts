let word: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'VEHICULO',
    'VETERINARIO',
    'PALINDROMO',
    'CELULAR',
    'DIAMANTE'
]


export function getRandomWord() {


    return word[Math.floor(Math.random() * word.length)];
}