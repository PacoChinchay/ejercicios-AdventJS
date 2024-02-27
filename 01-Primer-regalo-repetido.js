function findFirstRepeated(gifts) {
  const numeros = {}

  for (const numero of gifts) {
    if (numeros[numero]) return numero

    numeros[numero] = true
  }

  return -1
}
