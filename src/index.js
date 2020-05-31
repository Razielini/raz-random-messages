const messages = [
  'Te damos la bienvenida. Esperamos que hayas traído pizza.',
  'Acabamos de aterrizar.',
  'Hola, es una buena costrumbre, Saludar!',
  '¡Sííí, has llegado, ya te habias tardado.!',
  '¡Bienvenido, bienvenido!',
  'Menos mal que acabas de aparecer!',
  'Te damos la bienvenida. Esperamos que hayas traído pizza.',
  'Me alegra verte'
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }