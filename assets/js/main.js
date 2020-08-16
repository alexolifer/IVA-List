const quarter = window.prompt('Digite o numero do trimestre da planilha');
const year = window.prompt('Digite o ano da planilha');

const title = document.querySelector('h2');

if (quarter != null && year != null && quarter != '' && year != '') {
  title.innerHTML = `RECIBOS ${quarter}º TRIMESTRE DE ${year}`
} else {
  title.innerHTML = "Relatório Trimestral de IVA - Portugal"
}

var receivesLists = document.getElementById('receivesContainer');

var receiveNumber = document.querySelector('input#setReceive');
var client = document.querySelector('input#setClient');
var date = document.querySelector('input#setDate');
var receiveValue = document.querySelector('input#setValue');

var totalValue = [];
var ivaValues = [];
var irsValues = [];

var showTotal = document.querySelector('p.totalValue');
var showTotalIVA = document.querySelector('p.totalIVA');
var showTotalIRS = document.querySelector('p.totalIRS');

function ivaCalc(v) {
  return ((v * 0.23).toFixed(2));
}

function irsCalc(v) {
  return ((v * 0.25).toFixed(2));
}

function convert(date) {
  var datearray = date.split("-");
  var newdate = datearray[2] + '/' + datearray[1] + '/' + datearray[0];
  return newdate;
}

function adicionar() {
  
  if (receiveNumber.value != '' && client.value != '' && date.value != '' && receiveValue.value != '') {

    totalValue.push(receiveValue.value);
    ivaValues.push(ivaCalc(receiveValue.value));
    irsValues.push(irsCalc(receiveValue.value));

    let line = document.createElement('div');

    line.innerHTML = `<p class='receive'> ${receiveNumber.value} </p>
    <p class='client'> ${client.value} </p>
    <p class='date'> ${convert(date.value)} </p>
    <p class='value'> ${Number(receiveValue.value).toFixed(2)} €</p>
    <p class='valueIVA'> ${ivaCalc(receiveValue.value)} €</p>
    <p class='valueIRS'> ${irsCalc(receiveValue.value)} €</p>`;

    receivesLists.appendChild(line);

    let totalSum = 0;

    for (let pos in totalValue) {
      totalSum += Number(totalValue[pos]);
    }

    showTotal.innerHTML = `${(totalSum).toFixed(2)} €`;


    let ivaTotalSum = 0;

    for (let pos in ivaValues) {
      ivaTotalSum += Number(ivaValues[pos]);
    }

    showTotalIVA.innerHTML = `${(ivaTotalSum).toFixed(2)} €`;


    let irsTotalSum = 0;

    for (let pos in irsValues) {
      irsTotalSum += Number(irsValues[pos]);
    }

    showTotalIRS.innerHTML = `${(irsTotalSum).toFixed(2)} €`;

    receiveNumber.value = '';
    receiveNumber.focus();
    client.value = '';
    date.value = '';
    receiveValue.value = '';
  } else {
    window.alert('É necessário preencher todos os campos.');
  }
}

document.onkeydown = function(e){
  var key = e.key;

  if(key == 'Enter'){
    adicionar();
  }
};