(() => {

  const receive_form = document.getElementById('form-container')

  //submit_btn = document.getElementById('form-btn')
  let receives = []

  receive_form.addEventListener('submit', function (evt) {
    evt.preventDefault()

    let receive_number = document.getElementById('receive_number').value
    let client_name = document.getElementById('client-name').value
    let receive_date = document.getElementById('receive-date').value
    let value_no_taxes = document.getElementById('value-without-taxes').value
    let value_iva = document.getElementById('value-iva').value

    let idSetter = receives.length
    inputVal = {
      'id': idSetter++,
      'receive': receive_number,
      'client': client_name,
      'date': receive_date,
      'value': toCurrencyFormat(value_no_taxes),
      'taxes': toCurrencyFormat(value_iva),
    };

    receives.push(inputVal);

    renderReceives(receives)
    clearInputVal()
    
  })

})()

function toCurrencyFormat(num) {
  let val = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(num)
  return val
}

function renderReceives(receives) {
  const template = document.querySelector('.table-row')
  const table_content = document.getElementById('table-content')
  table_content.innerHTML = ''

  map = new Map(Object.entries(receives))

  map.forEach(function(rec) {
    let item = document.createElement('tr')
    item.id = rec.id
    item.innerHTML = template.innerHTML
    .replaceAll('{{ receive }}', rec.receive)
    .replaceAll('{{ client }}', rec.client)
    .replaceAll('{{ date }}', rec.date)
    .replaceAll('{{ value-pure }}', rec.value)
    .replaceAll('{{ value-iva }}', rec.taxes)
    
    item.classList.add('table-row', 'w-full', 'grid', 'grid-cols-6')

    table_content.appendChild(item)
  })
  // console.log(map)
  
}

function clearInputVal() {
  let all_inputs = document.querySelectorAll('input')
  all_inputs.forEach(element => {
    element.value = ''
  });
}