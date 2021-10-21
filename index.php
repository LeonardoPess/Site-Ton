<?php
    $plano = @$_GET['plano'];
    $plano1;$plano2;$plano3;
    if ($plano == 1 || $plano == null) { $plano1 = 'selected'; };
    if ($plano == 2) { $plano2 = 'selected'; };
    if ($plano == 3) { $plano3 = 'selected'; };
  ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <link rel="stylesheet" href="./css/styles.css">
  <link href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css" rel="stylesheet">
  <meta name="theme-color" content="rgba(54,230,26, 1)">

  <title>Planos e taxas | Ton</title>

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .glider-dot.active {
      background: var(--primary-color);
    }
    .glider-slide img {
      max-width: inherit;
    }
  </style>
</head>
<body>

    <a href="https://api.whatsapp.com/send?phone=5519988650825" class="whats-btn" target="_blank">
      <img src="./assets/icons/whats.png" alt="WhatsApp">
    </a>
  
  <header class="header">
    <div class="container">
      <div class="logo">
        <a href="./">
          <img src="./assets/logo.png" alt="Logo">
        </a>
    </div>

      <nav class="desktop-menu">
        <div class="planos">
          <ul>
            <li><a class="<?= $plano1 ?>" data-plano="1" Giga Ton>Giga Ton</a></li>
            <li><a class="<?= $plano2 ?>" data-plano="2">Mega Ton</a></li>
            <li><a class="<?= $plano3 ?>" data-plano="3">Ton Básico</a></li>
            <li><a href="https://bit.ly/SerParceiroTon" target="_blank">Renda Extra</a></li>
          </ul>
        </div>
      </nav>

      <a href="#maquininhas" class="chamada-wrapper">
        <div class="chamada">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" 
          height="24px" class="text-current stroke-current">
          <path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" 
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p> Pedir agora</p>
        </div>
      </a>

      <nav class="mobile">
        <div class="menu-btn" aria-expanded="false">
          <div class="menu-btn-cool"></div>
        </div><!--menu-btn-->
        <ul aria-expanded="false">
          <li><a href="#" class="selected" data-plano="1">Giga Ton</a></li>
          <li><a href="#" data-plano="2">Mega Ton</a></li>
          <li><a href="#" data-plano="3">Ton Básico</a></li>
          <li><a href="https://bit.ly/SerParceiroTon" target="_blank">Renda Extra</a></li>
          <li>
            <div>
              <a href="#maquininhas">
                <div class="chamada">
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" 
                  height="24px" class="text-current stroke-current">
                  <path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p> Pedir agora</p>
                </div>
            </div>
            </a>
          </li>
        </ul>
      </nav><!--mobile-->
    </div>
  </header>

  <section class="banner gigaton-banner">
    <div class="container">
      <div class="banner-wrapper">

        <div class="banner-left">
          <div class="lancamento" data-banner="lancamento">
            <p>LANÇAMENTO</p>
          </div>
          <h1 data-banner="plano">GigaTon</h1>
          <strong data-banner="porcentagem">7,44%</strong>
          <p data-banner="desc">No crédito em 12x</p>
          <div class="border" data-banner="border">
            <p>Sua grana cai em <b>1 dia útil</b></p>
          </div>
        </div>

        <div class="banner-right">
          <div class="banner-right-text">
            <a href="#t3"><img src="./assets/icons/arrow.svg" alt="Seta"><h6 data-banner="maquininha">T3 Giga</h6></a>
            <a href="#t2"><img src="./assets/icons/arrow.svg" alt="Seta"><h6 data-banner="maquininha">T2 Giga</h6></a>
            <a href="#t1"><img src="./assets/icons/arrow.svg" alt="Seta"><h6 data-banner="maquininha">T1 Giga</h6></a>
          </div>
          <div class="banner-right-img">
            <img src="./assets/banner/banner.svg" alt="Maquininhas giga">
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="escolher-plano" id="planoTaxas">
    <div class="container">
      <h2 class="title">Escolha o seu plano de taxas:</h2>

      <div class="escolher-plano-wrapper">

        <div class="escolher-plano-single">
          <a href="#maquininhas">
            <div class="selecionar-plano selected" data-plano="1">
              <strong>GigaTon</strong>
            </div>
          </a>
            <p>Para você que parcela muito</p>
          <div class="parcelas">
              <div class="parcelas-single">
                <p>DÉBITO</p>
                <strong>1,45%</strong>
              </div>
              <div class="parcelas-single">
                <p>CRÉDITO</p>
                <strong>2,90%</strong>
              </div>
              <div class="parcelas-single">
                <p>CRÉDITO 12X</p>
                <strong>7,44%</strong>
              </div>
          </div>
        </div>

        <div class="escolher-plano-single">
          <a href="#maquininhas">
            <div class="selecionar-plano" data-plano="2">
              <strong>MegaTon</strong>
            </div>
          </a>
            <p>A preferida dos nossos clientes</p>
          <div class="parcelas">
              <div class="parcelas-single">
                <p>DÉBITO</p>
                <strong>1,48%</strong>
              </div>
              <div class="parcelas-single">
                <p>CRÉDITO</p>
                <strong>2,96%</strong>
              </div>
              <div class="parcelas-single">
                <p>CRÉDITO 12X</p>
                <strong>9,44%</strong>
              </div>
          </div>
        </div>

        <div class="escolher-plano-single">
          <a href="#maquininhas">
            <div class="selecionar-plano" data-plano="3">
              <strong>Ton Básico</strong>
            </div>
          </a>
            <p>Menor preço nas maquininhas</p>
          <div class="parcelas">
              <div class="parcelas-single">
                <p>DÉBITO</p>
                <strong>1,99%</strong>
              </div>
              <div class="parcelas-single">
                <p>CRÉDITO</p>
                <strong>4,73%</strong>
              </div>
              <div class="parcelas-single">
                <p>CRÉDITO 12X</p>
                <strong>21,46%</strong>
              </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <div class="taxas-mobile-sticky" data-anime="scroll">
    <div class="taxas-mobile">
      <div>
        <label for="taxa-mobile-gigaton">
          <input type="radio" id="taxa-mobile-gigaton" name="taxas-mobile-input" data-plano="1" checked="">
          <p>GigaTon</p>
        </label>
      </div>
      <div>
        <label for="taxa-mobile-megaton">
          <input type="radio" id="taxa-mobile-megaton" name="taxas-mobile-input" data-plano="2">
          <p>MegaTon</p>
        </label>
      </div>
      <div>
        <label for="taxa-mobile-tonbasico">
          <input type="radio" id="taxa-mobile-tonbasico" name="taxas-mobile-input" data-plano="3">
          <p>Ton Básico</p>
        </label>
      </div>
    </div>

    <section class="escolha-maquininha" id="maquininhas">
      <div class="container">
        <h2 class="title">Escolha à sua <span data-dynamically="plano">GigaTon</span>:</h2>

        <div class="escolha-maquininha-wrapper">

          <div class="escolha-maquininha-single" id="t1">
            <div class="maquininha-img">
              <img src="./assets/maquininhas/t1giga.jpg" alt="T1 Giga" data-dynamically="img">
            </div>
            <strong data-dynamically="maquininha">T1 Giga</strong>
            <div class="maquininha-valor">
              <p>de: <span>R$178,80</span></p>
              <p><b data-dynamically="preco1x">por: R$106,92</b></p>
              <p>12XR$<strong data-dynamically="preco12x">8,91</strong></p>
            </div>
            <a href="" data-dynamically="sellButton" target="_blank">PEDIR T1 GIGA</a>
            <div class="maquininha-especificacoes">
              <strong>ESPECIFICAÇÕES TÉCNICAS</strong>
              <ul>
                <li>Precisa de um celular com conexão Bluetooth para vender</li>
                <li>Comprovante digital</li>
                <li>Gestão de vendas no aplicativo</li>
                <li>Vai com carregador</li>
                <li>Bateria de longa duração</li>
                <li>Garantia ilimitada</li>
              </ul>
            </div>
          </div>

          <div class="escolha-maquininha-single" id="t2">
            <div class="maquininha-img">
              <img src="./assets/maquininhas/t2giga.png" alt="T2 Giga" data-dynamically="img">
            </div>
            <strong data-dynamically="maquininha">T2+ Giga</strong>
            <div class="maquininha-valor">
              <p>de: <span>R$478,80</span></p>
              <p><b data-dynamically="preco1x">por: R$258,12</b></p>
              <p>12XR$<strong data-dynamically="preco12x">21,51</strong></p>
            </div>
            <a href=""  data-dynamically="sellButton" target="_blank">PEDIR T2+ GIGA</a>
            <div class="maquininha-especificacoes">
              <strong>ESPECIFICAÇÕES TÉCNICAS</strong>
              <ul>
                <li>Não precisa de celular conectado para vender</li>
                <li>Aceita pagamento por cartão de tarja, chip, e aproximação</li>
                <li>Comprovante via aplicativo e SMS</li>
                <li>Conexão wi-fi e chip de dados  multi operadora</li>
                <li>Gestão de vendas no aplicativo</li>
                <li>Bateria de longa duração</li>
              </ul>
            </div>
          </div>

          <div class="escolha-maquininha-single" id="t3">
            <div class="maquininha-img">
              <img src="./assets/maquininhas/t3giga.png" alt="T3 Giga" data-dynamically="img">
            </div>
            <strong data-dynamically="maquininha">T3 Giga</strong>
            <div class="maquininha-valor">
              <p>de: <span>R$958,80</span></p>
              <p><b data-dynamically="preco1x">por: R$366,12</b></p>
              <p>12XR$<strong data-dynamically="preco12x">30,51</strong></p>
            </div>
            <a href=""  data-dynamically="sellButton" target="_blank">PEDIR T3 GIGA</a>
            <div class="maquininha-especificacoes">
              <strong>ESPECIFICAÇÕES TÉCNICAS</strong>
              <ul>
                <li>Não precisa de celular conectado para vender</li>
                <li>Aceita pagamento por cartão de tarja, chip, e aproximação</li>
                <li>Comprovante via aplicativo e SMS</li>
                <li>Conexão wi-fi e chip de dados multi operadora</li>
                <li>Gestão de vendas no aplicativo</li>
                <li>Bateria de longa duração</li>
                <li>Imprime comprovante</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bandeiras-aceitas">
      <div class="container">
        <h2 class="title">Aceite as principais bandeiras e vouchers</h2>

        <div class="bandeiras-aceitas-wrapper">
          <div class="bandeiras-aceitas-single">
            <p>Crédito, débito e outros</p>
            <div>
              <img src="./assets/bandeiras/bandeiras.png" alt="Bandeiras">
            </div>
          </div>
          <div class="bandeiras-aceitas-single">
            <p>Voucher <b>(em breve)</b></p>
            <div>
              <img src="./assets/bandeiras/vouchers.png" alt="Vouchers">
            </div>
          </div>
        </div>
      </div><!--container-->
    </section>

    <section class="planos-taxas">
      <div class="container">
        <h2 class="title">E quais são as taxas do <strong data-dynamically="plano-title">GigaTon</strong></h2>
        <div class="taxa-bandeira-wrapper">
        <p>
          <span data-dynamically="bandeira-message">Taxas para vendas das bandeiras</span>
          <select name="bandeiras" id="bandeiras" data-dynamically="taxa-bandeira" class="show">
            <option value="1">Mastercard e Visa</option>
            <option value="2">Elo, Amex e Hipercard</option>
          </select>
        </p>
      </div>

        <div class="planos-taxas-wrapper">

          <div class="planos-taxa-single">
            <strong>DÉBITO</strong>
            <strong data-dynamically="taxa-result1">1,45%</strong>
            <p>Recebimento em <b>1 dia útil</b></p>
          </div>

          <div class="planos-taxa-single">
            <strong>CRÉDITO ÀVISTA</strong>
            <strong data-dynamically="taxa-result2">2,90%</strong>
            <p>Recebimento em 
              <b>
                <select name="dias2" id="dias2" data-dynamically="taxa-days2">
                  <option value="1">1 dia útil</option>
                  <option value="2">14 dias</option>
                  <option value="3">30 dias</option>
                </select>
              </b>
            </p>
          </div>

          <div class="planos-taxa-single">
            <strong>
              <select name="parcelas" id="parcelas" data-dynamically="taxa-parcelamento">
                <option value="2">CRÉDITO PARCELADO 2X</option>
                <option value="3">CRÉDITO PARCELADO 3X</option>
                <option value="4">CRÉDITO PARCELADO 4X</option>
                <option value="5">CRÉDITO PARCELADO 5X</option>
                <option value="6">CRÉDITO PARCELADO 6X</option>
                <option value="7">CRÉDITO PARCELADO 7X</option>
                <option value="8">CRÉDITO PARCELADO 8X</option>
                <option value="9">CRÉDITO PARCELADO 9X</option>
                <option value="10">CRÉDITO PARCELADO 10X</option>
                <option value="11">CRÉDITO PARCELADO 11X</option>
                <option value="12" selected>CRÉDITO PARCELADO 12X</option>
              </select>
            </strong>

            <strong data-dynamically="taxa-result3">7,44%</strong>
            <p>Recebimento em 
              <b>
                <select name="dias3" id="dias3" data-dynamically="taxa-days3">
                  <option value="1">1 dia útil</option>
                  <option value="2">14 dias</option>
                  <option value="3">30 dias</option>
                </select>
              </b>
            </p>
          </div>

        </div>

        <p data-dynamically="plano-regulamento" class="regulamento">*Conheça o <a href="https://registon.api.ton.com.br/documents/regulamento-gigaton/latest?_ga=2.36063648.1260877289.1632585809-770312178.1632100683" target="_blank">Regulamento para o GigaTon</a></p>
      </div><!--container-->
    </section>
  </div><!--taxas-mobile-sticky-->

  <section class="calculadora" id="calculadora">
    <div class="container">
      <h2 class="title">Calcule quanto você receberá em suas vendas</h2>

      <div class="conversor-wrapper">
        <div class="conversor-calculo" >
          <p>Escolha seu plano:</p>
            <div class="planos">
                <span class="selected" data-plano="1">GigaTon</span>
                <span data-plano="2">MegaTon</span>
                <span data-plano="3">Ton Básico</span>
            </div>
          <p>Tipo de venda:</p>
            <div class="tipo-venda">
              <span class="selected" >Crédito</span>
              <span id="debito">Débito</span>
            </div>
          <p>Valor da venda:</p>
            <input 
              id="myInput" inputmode="numeric" value="R$ 5.000,00" placeholder="R$ 0,00" 
              class="valor" maxlength="14" data-valor
            > 
          <div class="parcelamento-bandeira">
            <div class="parcelamento">
              <p>Parcelamento:</p>
                <select name="parcelamento" id="parcelamento" class="select select-fs">
                  <option value="1">À vista</option>
                  <option value="2">2x</option>
                  <option value="3">3x</option>
                  <option value="4">4x</option>
                  <option value="5">5x</option>
                  <option value="6">6x</option>
                  <option value="7">7x</option>
                  <option value="8">8x</option>
                  <option value="9">9x</option>
                  <option value="10">10x</option>
                  <option value="11">11x</option>
                  <option value="12">12x</option>
                </select>
            </div>
            <div class="bandeira">
              <p>Bandeira:</p>
                <select name="bandeira" id="bandeira" class="select">
                  <option value="1">Mastercard</option>
                  <option value="1">Visa</option>
                  <option value="2">Elo</option>
                  <option value="2">Amex</option>
                  <option value="2">Hipercard</option>
                </select>
            </div>
          </div>
          <p>Recebimento:</p>
            <div class="recebimento">
              <div>
                <input type="radio" id="oneDayOption" name="recebimento" value="1day"
                checked>
                <label for="oneDayOption">1 dia útil</label>
              </div>
              <div id="twoDayOptionBox">
                <input type="radio" id="twoDayOption" name="recebimento" value="14day">
                <label for="twoDayOption">14 dias</label>
              </div>
              <div id="threeDayOptionBox">
                <input type="radio" id="threeDayOption" name="recebimento" value="30day">
                <label for="threeDayOption">30 dias</label>
              </div>
            </div>
        </div>

        <div class="conversor-resultado" >
          <div class="resultado">
            <p>Você recebe:</p>
            <strong data-recebe></strong>
          </div>
          <div class="resultado-info">
            <div class="resultado-info-taxa">
              <p>Taxa:</p>
              <strong data-taxa></strong>
            </div>
            <div class="resultado-info-tarifa">
              <p>Tarifa:</p>
              <strong data-tarifa>R$ 0,00</strong>
            </div>
          </div>
          <div class="chamada">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M11.5 12H15.5" stroke="#00AD00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M13.5 5C14.6046 5 15.5 4.10457 15.5 3C15.5 1.89543 14.6046 1 13.5 1C12.3954 1 11.5 1.89543 11.5 3C11.5 4.10457 12.3954 5 13.5 5Z" stroke="#00AD00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M10.5 21V23" stroke="#00AD00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M16.5 21V23" stroke="#00AD00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M17 8.00009H9.5C8.25 5.04209 5.5 6.00009 5.5 6.00009L6.4 9.08909C5.339 9.79709 4.503 10.8101 4.005 12.0001H1.5V17.0001H4C4.98 19.3491 7.297 21.0001 10 21.0001H17C20.59 21.0001 23.5 18.0901 23.5 14.5001C23.5 10.9101 20.59 8.00009 17 8.00009Z" stroke="#00AD00" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
            <p>Economia de até <strong data-economia>R$ 0,00</strong> em relação aos concorrentes</p>
          </div>
        </div>
        <div></div>
      </div><!--conversor-wrapper-->

      <div  class="button">
        <a href="#maquininhas">Escolha sua maquininha</a>
      </div>

    </div><!--container-->
  </section>

  <section class="beneficios">
    <div class="container">
      <h2 class="title">Descubra o que Ton pode te oferecer</h2>

      <div class="beneficios-wrapper">

        <div class="beneficios-single">
          <div class="beneficios-single-text">
            <h3>Cartão Grátis</h3>
            <strong>Pra você usar o seu dinheiro</strong>
            <ul>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Transfira o dinheiro das suas vendas para o seu cartão pré-pago</li>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Faça compras físicas, online e até internacionais</li>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Saque o seu dinheiro na rede Banco24H</li>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Solicite direto pelo aplicativo Ton!</li>
            </ul>
            <p>* Disponivel apenas para cadastros feitos no CPF</p>
          </div>
          <div class="beneficios-single-img">
            <img src="./assets/beneficios/beneficio1.png" alt="Ton Cartão">
          </div>
        </div>

        <div class="beneficios-single">
          <div class="beneficios-single-img">
            <img src="./assets/beneficios/beneficio2.png" alt="Ton Cartão">
          </div>
          <div class="beneficios-single-text">
            <h3>Aplicativo Ton</h3>
            <strong>Pra você gerenciar</strong>
            <ul>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Acesse sua conta onde e quando quiser</li>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Crie o seu catálogo de produtos para facilitar sua rotina de vendas</li>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Acompanhe suas vendas e crie metas que te ajudem a alavancar o seu negócio</li>
              <li><img src="./assets/icons/right.svg" alt="Visto"> Receba o dinheiro das suas vendas na sua conta digital</li>
            </ul>
          </div>
        </div>

      </div>
    </div><!--container-->
  </section>

  <section class="beneficios2">
    <div class="container">
      <h2 class="title">Por que Ton é a melhor para você?</h2>

      <div class="beneficios2-wrapper">

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio1.svg" alt="Icone">
          <h3>Da Stone para autônomos</h3>
          <p>Garantia de qualidade e segurança para seu dinheiro</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio2.svg" alt="Icone">
          <h3>Suporte 24h</h3>
          <p>Assistente virtual e uma equipe especializada para te atender</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio3.svg" alt="Icone">
          <h3>Troca grátis</h3>
          <p>Trocamos a sua maquina sempre que você precisar</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio4.svg" alt="Icone">
          <h3>Sem aluguel</h3>
          <p>Você não paga aluguel e tem acesso ao melhor serviço</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio5.svg" alt="Icone">
          <h3>Não precisa de banco</h3>
          <p>Conta digital grátis para você receber o seu dinheiro</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio6.svg" alt="Icone">
          <h3>Venda por Boleto</h3>
          <p>Faça vendas pela internet via boleto no aplicativo da Ton</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio7.svg" alt="Icone">
          <h3>Venda mais</h3>
          <p>O Ton te oferece um curso GRÁTIS pra você vender pela internet</p>
        </div>

        <div class="beneficios2-single">
          <img src="./assets/beneficios2/beneficio8.svg" alt="Icone">
          <h3>Renda extra</h3>
          <p>O Ton te ajuda a aumentar sua renda sem precisar sair de casa</p>
        </div>

      </div>

      <div class="button">
        <a href="#maquininhas">Escolha sua maquininha</a>
      </div>
    </div><!--container-->
  </section>

  <section class="clientes">
    <div class="container">
      <h2 class="title">Nossos Clientes</h2>

      <div class="glider-slider">
      <div class="clientes-wrapper glider-wrapper">

        <div class="clientes-single">
          <div class="cliente-top">
            <div class="cliente-img">
              <img src="./assets/clientes/Everton.jpg" alt="Foto do cliente">
            </div>
            <div class="cliente-top-text">
              <strong>Everton</strong>
              <p>Pizzaria</p>
            </div>
          </div>

          <div class="cliente-desc">
            <blockquote>"No inicio não aceitava cartões e cheguei até a perder alguns clientes, 
              mas com a aceitação de cartão consegui resgatá-los e também conquistar novos clientes. Tudo 
              transparente e suporte ao cliente resolve tudo com facilidade."</blockquote>
          </div>
        </div>

        <div class="clientes-single">
          <div class="cliente-top">
            <div class="cliente-img">
              <img src="./assets/clientes/Maria.jpg" alt="Foto do cliente">
            </div>
            <div class="cliente-top-text">
              <strong>MARIA LÍGIA</strong>
              <p>Cerâmica</p>
            </div>
          </div>

          <div class="cliente-desc">
            <blockquote>"Desde o início o serviço me surpreendeu pela rapidez no atendimento e por 
              notar que as pessoas que me atendiam sabiam o que estavam fazendo! E o principal! Nada 
              mudou com o decorrer dos meses, continuo muito satisfeita."</blockquote>
          </div>
        </div>

        <div class="clientes-single">
          <div class="cliente-top">
            <div class="cliente-img">
              <img src="./assets/clientes/andreia.jpg" alt="Foto do cliente">
            </div>
            <div class="cliente-top-text">
              <strong>ANDRÉIA</strong>
              <p>Doces</p>
            </div>
          </div>

          <div class="cliente-desc">
            <blockquote>"A máquina é muito boa,  todas as vezes que precisei em relação a algum 
              problema com a máquina, os funcionários  me atenderam com o maior satisfação.  
              Na minha opinião isso só acontece pelo jeito como a empresa trata os funcionários."</blockquote>
          </div>
        </div>

        <div class="clientes-single">
          <div class="cliente-top">
            <div class="cliente-img">
              <img src="./assets/clientes/Simone.jpg" alt="Foto do cliente">
            </div>
            <div class="cliente-top-text">
              <strong>SIMONE VIANA</strong>
              <p>Comércio de especiarias</p>
            </div>
          </div>

          <div class="cliente-desc">
            <blockquote>"Encantados! É assim que nos sentimos. Mais do que o fornecimento de serviços 
              competente e eficiente. O suporte no dia a dia, o atendimento cuidadoso e carinhoso, o respeito 
              ao cliente, faz com que tenhamos a certeza que essa é uma parceria de verdade!"</blockquote>
          </div>
        </div>

        <div class="clientes-single">
          <div class="cliente-top">
            <div class="cliente-img">
              <img src="./assets/clientes/Sueli.jpg" alt="Foto do cliente">
            </div>
            <div class="cliente-top-text">
              <strong>Sueli</strong>
              <p>Uber</p>
            </div>
          </div>

          <div class="cliente-desc">
            <blockquote>"Apesar das coisas serem tão difíceis ao longo da vida aqui nós nos sentimos 
              próximos. Temos acesso às pessoas. Eu amo minha maquininha, por que eu tenho apoio. 
              GRATIDÃO!"</blockquote>
          </div>
        </div>

      </div>

      <div role="tablist" class="glider-dots"></div>
    </div>
      <div  class="button">
        <a href="#maquininhas">Vem pra Ton</a>
      </div>
    </div><!--container-->
  </section>

  <section class="duvidas">
    <div class="container">
      <h2 class="title">Ficou alguma dúvida</h2>
      <dl class="duvidas-wrapper" data-anime="according">
        <div class="duvidas-single">
          <dt>Como funciona a taxa única de adesão do Ton? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>Não temos mensalidade! Você paga a taxa apenas ao aderir uma das máquinas em modelo 
            de comodato, tendo direito a garantia enquanto durar nossa parceria.
            <br>
            <br>
            A adesão da máquina pode ser paga à vista ou parcelada em até 12 vezes no cartão de crédito. 
            Após este pagamento, não haverá cobrança fixa (aluguel) pelo uso da máquina.
            <br>
            <br>
            O cadastro no aplicativo é gratuito e dá direito a utilização de funções como o link de 
            pagamento. Você só paga a taxa única se optar por adquirir uma maquininha.</dd>
        </div>

        <div class="duvidas-single">
          <dt>Qual o prazo de entrega da minha maquininha? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>O prazo de entrega das nossas maquininhas pode variar de acordo com o modelo 
            escolhido, sendo de até 7 dias úteis para a máquina T1 e até 20 dias úteis para as máquinas T2 e T3.
            <br>
            <br>
            O cartão pré-pago, se solicitado no aplicativo, é enviado separadamente e entregue em até 
            20 dias úteis.</dd>
        </div>

        <div class="duvidas-single">
          <dt>Eu preciso de um celular para realizar as vendas? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>Apenas a máquina T1 precisa de um celular Android ou iOS, com bluetooth e conexão 
            de internet para poder realizar suas vendas, e as máquinas T2 e T3, não precisam de celular 
            para realizar as vendas.
            <br>
            <br>
            Você precisará de um celular Android ou iOS com o aplicativo do Ton instalado para ativar 
            qualquer uma das máquinas, gerenciar suas vendas, realizar transferências, entre outras funcionalidades.</dd>
        </div>

        <div class="duvidas-single">
          <dt>Como receberei o valor das minhas vendas? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>O valor das vendas estarão disponíveis em sua carteira no prazo escolhido para o recebimento, 
            podendo ser de 1 dia útil, 14 dias ou 30 dias, de acordo com a sua preferência.
            <br>
            <br>
            Depois disso você poderá transferir para sua conta bancária cadastrada, sem custos, ou para 
            o seu cartão pré-pago (disponível apenas para pessoa física).
            <br>
            <br>
            Importante: para transferir o saldo disponível é necessário que a conta bancária seja de 
            mesma titularidade do CNPJ ou CPF cadastrado no aplicativo Ton.
            <br>
            <br>
            Tipos de contas bancárias aceitas para transferência:
            <ul>
              <li>Conta Corrente (exceto conta salário);</li>
              <li>Conta Poupança;</li>
              <li>Conta Corrente Conjunta;</li>
              <li>Conta Poupança Conjunta.</li>
            </ul>
          </dd>
        </div>

        <div class="duvidas-single">
          <dt>Como funciona a garantia da minha maquininha? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>A garantia é ilimitada e cobre qualquer problema técnico ou dano de fabricação. Defeitos 
            causados por mau uso ou uso indevido do leitor não serão cobertos pela garantia.
            <br>
            <br>
            Em caso de problemas técnicos ou defeitos de fabricação, entre em contato com o nosso 
            atendimento pelo chat do seu aplicativo.</dd>
        </div>

        <div class="duvidas-single">
          <dt>Eu posso escolher a operadora do meu chip? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>Sim. Na hora de pedir sua máquina T2 ou T3, você pode escolher entre as operadoras Claro, Vivo ou Tim.</dd>
        </div>

        <div class="duvidas-single">
          <dt>O aplicativo Ton é compatível com quais dispositivos? <img src="./assets/icons/arrow2.svg" alt="Seta"></dt>
          <dd>O aplicativo funciona em qualquer dispostivo Android versão 5.0 ou superior, ou iOS versão 11 ou superior.</dd>
        </div>
      </dl>

      <div  class="button">
        <a href="#maquininhas">Escolha sua maquininha</a>
      </div>
    </div>
  </section>

  <section class="duvidas2">
    <div class="container">

      <div class="duvidas2-wrapper">
        <div  class="duvidas2-text">
          <h2>Ainda Tem Dúvidas?</h2>
          <p>Fale Com Nosso Parceiro Ton Pelo WhatsApp!</p>
          <div class="button">
            <a href="https://api.whatsapp.com/send?phone=5519988650825" target="_blank">Enviar WhatsApp</a>
          </div>
        </div>

        <div class="duvidas2-img">
          <img src="./assets/parceiro.png" alt="Parceiro">
        </div>
      </div>
    </div>
  </section>
  
  <footer>
    <div class="container">
      <a aria-label="ton" href="./" class="footer-logo">
        <img src="./assets/logo.svg" alt="Logo">
      </a>

      <div class="footer-wrapper">
        <div class="footer-box-single">
          <strong>TON</strong>
          <a href="#planoTaxas">Planos e taxas</a>
          <a href="https://bit.ly/SerParceiroTon" target="_blank">Renda Extra</a>
          <a href="https://rastreie.ton.com.br/orders"  arget="_blank">Rastreio do pedido</a>
          <a href="https://api.whatsapp.com/send?phone=5519988650825" target="_blank">Atendimento por WhatsApp</a>
        </div>

        <div class="footer-box-single">
          <strong>INSTITUCIONAL</strong>
          <a href="https://assets.lojastonemais.com.br/pages/politica-de-privacidade-ton.pdf" target="_blank">Política de Privacidade</a>
          <a href="https://privacidade.ton.com.br/?_ga=2.31697278.1145055743.1632927054-1359418981.1632927054" target="_blank">Portal de Privacidade</a>
          <a href="https://assets.lojastonemais.com.br/pages/contrato-ton.pdf" target="_blank">Termos e Condições de uso do Ton</a>
          <a href="https://assets.lojastonemais.com.br/pages/politica-institucional-pld-cft.pdf" target="_blank">Política Instuticional de PLD-CFT</a>
        </div>

        <div class="footer-box-single">
          <strong>ENDEREÇO TON</strong>
          <p>Rua Fidêncio Ramos, 308, A, 10 andar, sala 92, Vila Olímpia, São Paulo - SP - CEP 04551-010</p>
          <p>CNPJ: 34.699.670/0001-60</p>
        </div>

        <div class="footer-box-single">
          <strong>PREMIOS TON</strong>
          <img src="./assets/premios/premio1.png" alt="RA1000">
          <img src="./assets/premios/premio2.png" alt="iBest">
        </div>
      </div>
    </div>
  </footer>

<script src="https://github.com/codermarcos/simple-mask-money/releases/download/v3.0.0/simple-mask-money.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
<script src="./dist/main.js"></script>
</body>
</html>