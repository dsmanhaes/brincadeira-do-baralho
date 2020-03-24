function shuffleArray (array) {
  const shuffled = []

  while (array.length > 0) {
    const index = Math.floor(Math.random() * array.length)

    shuffled.push(array[index])
    array.splice(index, 1)
  }

  return shuffled
}

export { shuffleArray }
