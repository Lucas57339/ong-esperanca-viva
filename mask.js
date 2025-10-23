
function mascaraCPF(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = valor;
  }
  

  function mascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    input.value = valor;
  }
  

  function mascaraCEP(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    input.value = valor;
  }
  