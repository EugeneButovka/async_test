'use strict';
//const { PerformanceObserver, performance } = require('perf_hooks');


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < Infinity; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}



function preciseSleep(milliseconds) {
    var start = performance.now();
    for (var i = 0; i < Infinity; i++) {
        if ((performance.now() - start) > milliseconds){
            break;
        }
    }
}

function promiseAsyncroFunction(resolve, reject) {
    preciseSleep(100);
    //reject("no");
    resolve("timer ding 100");
    /*setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("ok");
    }, 1000);
*/
}

function promiseAsyncroFunction2(resolve, reject) {
    preciseSleep(5000);
    //reject("no");
    resolve("timer ding 5000");
    /*setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("ok");
    }, 1000);
*/
}

// Создаётся объект promise
let promise = new Promise(promiseAsyncroFunction);
let promise2 = new Promise(promiseAsyncroFunction2);

// promise.then навешивает обработчики на успешный результат или ошибку
promise
    .then(
        result => {
            // первая функция-обработчик - запустится при вызове resolve
            console.log("Fulfilled: " + result); // result - аргумент resolve
        },
        error => {
            // вторая функция - запустится при вызове reject
            console.log("Rejected: " + error); // error - аргумент reject
        }
    );


promise2
    .then(
        result => {
            // первая функция-обработчик - запустится при вызове resolve
            console.log("Fulfilled: " + result); // result - аргумент resolve
        },
        error => {
            // вторая функция - запустится при вызове reject
            console.log("Rejected: " + error); // error - аргумент reject
        }
    );
