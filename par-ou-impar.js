const EscolhaDaPessoa = process.argv[2]
const DedosDaPessoa = process.argv[3]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const GeraNumero = getRndInteger(0, 10)
const DedosDoComputador = getRndInteger(0, 10);


const SomaDosDedos = Number(DedosDaPessoa) + Number(DedosDoComputador);
const IdentificaPar = SomaDosDedos % 2;

if(IdentificaPar === 0) {
  if(EscolhaDaPessoa === "par") {
    console.log(`Você pediu ${EscolhaDaPessoa} e VOCÊ VENCEU!, o computador pôs ${DedosDoComputador} dedos e você pôs ${DedosDaPessoa} dedos. O total deu ${SomaDosDedos} dedos, que é PAR`);
  } else {
    console.log(`Você pediu ${EscolhaDaPessoa} e VOCÊ PERDEU!, o computador pôs ${DedosDoComputador} dedos e você pôs ${DedosDaPessoa} dedos. O total deu ${SomaDosDedos} dedos, que é PAR!`);
  }
} else {
  if(EscolhaDaPessoa === "impar") {
  console.log(`Você pediu ${EscolhaDaPessoa} e VOCÊ VENCEU!, o computador pôs ${DedosDoComputador} dedos e você pôs ${DedosDaPessoa} dedos. O total deu ${SomaDosDedos} dedos, que é IMPAR!`);
  } else {
  console.log(`Você pediu ${EscolhaDaPessoa} e VOCÊ PERDEU!, o computador pôs ${DedosDoComputador} dedos e você pôs ${DedosDaPessoa} dedos. O total deu ${SomaDosDedos} dedos, que é IMPAR!`);
  }
}
