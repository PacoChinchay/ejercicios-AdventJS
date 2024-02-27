function manufacture(gifts, materials) {
  return gifts.filter(regalo=>regalo.split('').every(letra=>materials.includes(letra)))
  }