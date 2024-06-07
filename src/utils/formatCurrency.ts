export function formatCurrency(value: string) {
  let number = parseFloat(value)
  return '$ ' + number.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
