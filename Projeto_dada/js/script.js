AOS.init();

// Parallax //

setTimeout(function() {
    $('#price-img').parallax({imageSrc: '../img/parrallax1.jpg'});
  }, 200);


// Texto-Preços //

  let pricesconfig = document.querySelector('#price-config');

  function mouseOver1(){
    pricesconfig.innerHTML = '<strong>Plano inicial</strong>: Aluguel dos itens para que você mesmo(a) monte em sua casa'
  }

  function mouseOver2(){
    pricesconfig.innerHTML = '<strong>Plano Intermediário</strong>: Montagem e Desmontagem da festa na sua casa'
  }

  function mouseOver3(){
    pricesconfig.innerHTML = '<strong>Plano Completa</strong>: O mesmo serviço do <strong>Intermediário</strong> porém com um bônus de montagem de balões'
  }

  function mouseOut1(){
    pricesconfig.innerHTML = 'Passe o mouse por cima das opções abaixo para obter mais informações!'
  }

  function mouseOut2(){
    pricesconfig.innerHTML = 'Passe o mouse por cima das opções abaixo para obter mais informações!'
  }

  function mouseOut3(){
    pricesconfig.innerHTML = 'Passe o mouse por cima das opções abaixo para obter mais informações!'
  }