console.log("Estou funcionando, tá ok?")

const value = process.argv[2]

if(!value) {
    console.log("Digite um valor")
} else {
    console.log(value)
}