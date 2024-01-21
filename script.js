const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}