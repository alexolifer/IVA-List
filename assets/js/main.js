(function () {

    /*function toArray(obj) {
        return [].slice.call(obj);
    }

    function findIndex(elm, parent) {
        var elms = toArray(parent.children);
        return elms.indexOf(elm);
    }

    function loadData(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch(err) {
            console.log(err);
        }
    }

    function saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch(err) {
            console.log(err);
        }
    }*/

    var calcList = loadData('ivaList') || [],
        calcLine = document.getElementsByClassName('.line');



    function renderItem(item) {
        return [
            '<div class="line">',
                '<p class="receive">001</p>',
                '<p class="client">Empresa</p>',
                '<p class="date">00/00/0000</p>',
                '<p class="value">500,00 €</p>',
                '<p class="valueIVA">115,00 €</p>',
                '<p class="valueIRS">125,00 €</p>',
            '</div>'
        ].join('');
    }

})();
