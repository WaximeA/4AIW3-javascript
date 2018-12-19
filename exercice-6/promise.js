let timeout = function(resolve, reject) {
  setTimeout(() => reject('timeout'), 3000)
}

let process = function(resolve, reject) {
  setTimeout(() => resolve('ok'), 3000)
}

Promise
.race([new Promise(process), new Promise(timeout)])
.then((result) => console.log(result))
.catch((error) => console.log(error));