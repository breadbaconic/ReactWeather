// /**
//  * Created by songbo on 2016/11/23.
//  */
// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Shanghai', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Shanghai').then(function (temp) {
//   console.log('promise success', temp);
// }, function (error) {
//   console.log('promise error', err);
// });

if (typeof 7 === 'number') {

}

// Challenge Area
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not a number');
    }
  });
}

addPromise(12, 123).then(function (c) {
  console.log('promise success', c);
}, function (err) {
  console.log('promise error', err);
});

addPromise('12', 123).then(function (c) {
  console.log('promise success', c);
}, function (err) {
  console.log('promise error', err);
});