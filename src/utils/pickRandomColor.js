export default pickRandomColor = () => {
  const colors = ['#facade', '#c0ffee', '#fb1', '#f00', '#b00']
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}