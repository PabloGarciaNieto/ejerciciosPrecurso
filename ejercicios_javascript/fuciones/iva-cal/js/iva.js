let iva = parseInt(prompt('Tipo de IVA'));
let base = parseInt(prompt('Base imponible'));

function baseMasIva (iva, base) {
   let cantidadIva = base * iva / 100;
   return cantidadIva + base;
}
const totalMasIva = baseMasIva(iva, base);

console.log('La base imponible de: ' + base + '€ incluido el ' + iva + ' % de IVA resulta en: ' + totalMasIva + '€');






