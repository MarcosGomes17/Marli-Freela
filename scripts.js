 function enviarWhats(event) {
    event.preventDefault();

    const form = event.target;

    let nome, mensagem, telefone;

    if (form.querySelector('h3').innerText === 'Marli') {
      nome = document.getElementById('nome-marli').value;
      mensagem = document.getElementById('mensagem-marli').value;
      telefone = '5511970136330';
    } else {
      nome = document.getElementById('nome-beatriz').value;
      mensagem = document.getElementById('mensagem-beatriz').value;
      telefone = '5511940143554';
    }

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;

    window.open(url, '_blank');
  }