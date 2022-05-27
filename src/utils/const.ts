let idCounter = 5000

// function to assign a sequential id to a user, starting from 5000
export const increaseIdCounter = () => {
  idCounter++
  return idCounter
}
