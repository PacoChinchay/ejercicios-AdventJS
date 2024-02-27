function findNaughtyStep(original, modified) {
  const palabra_1 = Array.from(original)
  const palabra_2 = Array.from(modified)

  if (palabra_1.length < palabra_2.length) {
    for (let i = 0; i <= palabra_2.length; i++) {
        let dif = []
        if (palabra_2[i] !== palabra_1[i]) {
            dif.push(palabra_2[i])
            return dif[0]
        }
    }
  } else if (palabra_1.length > palabra_2.length) {
    for (let i = 0; i <= palabra_1.length; i++) {
        let dif = []
        if (palabra_1[i] !== palabra_2[i]) {
            dif.push(palabra_1[i])
            return dif[0]
        }
    }
  } else {
    return ''
  }
}