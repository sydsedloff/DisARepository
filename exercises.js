//3-1
export function flattening(list) {
  let newArray = [];
  newArray = list.reduce((a, b) => a.concat(b), []);
  return newArray
}

//console.log(flattening([[1, 2, 3], [4, 5], [6]]))

//3-2
function body(){}
function update(){}
function test(){}
export function loop(value, test, update, body) {
  if (test(value) == true){
    body(value)
    value = update(value)
    loop(value, test, update, body)
    }
}
//loop(3, n => n > 0, n => n - 1, console.log)

//3-3
export function everyLoop(array, test) {
  let flag = true
  let returnValue = true
  array.forEach(element => {
    flag = test(element)
    if (flag == false){
      returnValue = false
    }
  });
  return returnValue
}
//console.log(everyLoop([1, 3, 5], n => n < 10))
//console.log(everyLoop([2, 4, 16], n => n < 10))

//3-4 - testing for True
export function everySome(array, test) {
  let flag = false
  let returnValue = false
  array.forEach(element => {
    flag = test(element)
    if (flag == true){
      returnValue = true
    }
  });
  return returnValue
}
console.log(everySome([1, 3, 5], n => n < 10))
console.log(everySome([11, 16, 14], n => n < 10))

