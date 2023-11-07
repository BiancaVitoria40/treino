const nome = "Bianca"; 

function getEventoAleatorio() {

    const numeroAleatorio = Math.floor(Math.random() * 3);
  
    if (numeroAleatorio === 0) {
      return "Maratona";
    } else if (numeroAleatorio === 1) {
      return "Triathlon";
    } else {
      return "Pentathlon";
    }
  }

  function getDiasTreino(eventoEscolhido) {

    if (eventoEscolhido === "Maratona") {
      return 50;
    } else if (eventoEscolhido === "Triathlon") {
      return 100;
    } else if (eventoEscolhido === "Pentathlon") {
      return 200;
    } else {
      return "Evento desconhecido, não podemos determinar o número de dias de treinamento.";
    }
  }

  function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento de ${evento}.`);
  }
  
  function logTempo(nome, dias) {
    console.log(`${nome} vai treinar por ${dias} dias.`);
  }

  const seuNome = "Bianca";
  const seuEvento = getEventoAleatorio();
  const seusDiasTreino = getDiasTreino(seuEvento);
  
  logEvento(seuNome, seuEvento);
  logTempo(seuNome, seusDiasTreino);
  
