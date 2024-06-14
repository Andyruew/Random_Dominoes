function createDot () {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  return dot
}
function createSection () {
  const section = document.createElement('div')
  section.classList.add('section')
  return section
}
function createDominoe () {
  const dominoe = document.createElement('div')
  dominoe.classList.add('dominoe')
  const section1 = createSection()
  const randomOne = random()
  for (let i = 0; i < randomOne; i++) {
    let dot = createDot()
    section1.appendChild(dot)
  }
  section1.classList.add('section' + randomOne)
  const line = document.createElement('hr')
  const section2 = createSection()
  const randomTwo = random()
  for (let i = 0; i < randomTwo; i++) {
    let dot = createDot()
    section2.appendChild(dot)
  }
  section2.classList.add('section' + randomTwo)
  dominoe.appendChild(section1)
  dominoe.appendChild(line)
  dominoe.appendChild(section2)
  return dominoe
}
function random () {
  const random = Math.floor(Math.random() * 7)
  return random
}
const dominoes = document.getElementById('dominoes')
for (let i = 0; i < 100; i++) {
  const dominoe = createDominoe()
  dominoes.appendChild(dominoe)
}
