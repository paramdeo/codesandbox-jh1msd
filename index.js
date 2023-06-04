import { argv } from "node:process"

let [_, __, _size, _fill] = argv

let reduce = "Array.reduce"
let map = "Array.map"
let forEach = "Array.forEach"
let forOf = "for..of"
let forLoop = "for"

function elapsedTime(method, start, end) {
  console.log(`${method} --> ${Math.trunc(end - start)} ms`)
}

function sumReduce(size, fill) {
  let array = Array(size).fill(fill)
  let start = performance.now()
  let result = array.reduce((acc, cur) => (cur += acc))
  let end = performance.now()
  elapsedTime(reduce, start, end)
  // console.log(result)
}

function sumMap(size, fill) {
  let array = Array(size).fill(fill)
  let start = performance.now()
  let result = 0
  array.map((element) => (result += element))
  let end = performance.now()
  elapsedTime(map, start, end)
  // console.log(result)
}

function sumForEach(size, fill) {
  let array = Array(size).fill(fill)
  let start = performance.now()
  let result = 0
  array.forEach((element) => (result += element))
  let end = performance.now()
  elapsedTime(forEach, start, end)
  // console.log(result)
}

function sumForOf(size, fill) {
  let array = Array(size).fill(fill)
  let start = performance.now()
  let result = 0
  for (let element of array) {
    result += element
  }
  let end = performance.now()
  elapsedTime(forOf, start, end)
  // console.log(result)
}

function sumForLoop(size, fill) {
  let array = Array(size).fill(fill)
  let start = performance.now()
  let result = 0
  for (let i = 0; i < size; i++) {
    result += array[i]
  }
  let end = performance.now()
  elapsedTime(forLoop, start, end)
  // console.log(result)
}

function runTests(_size, _fill) {
  console.log(`${Number(_size).toLocaleString()} Elements of Value ${_fill}`)
  sumReduce(Number(_size), Number(_fill))
  sumMap(Number(_size), Number(_fill))
  sumForEach(Number(_size), Number(_fill))
  sumForOf(Number(_size), Number(_fill))
  sumForLoop(Number(_size), Number(_fill))
  console.log("\n----------\n")
}

runTests(_size, _fill)
