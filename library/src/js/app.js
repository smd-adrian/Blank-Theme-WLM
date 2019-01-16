/**
 * We'll load Lodash, a modern JavaScript utility library delivering modularity, performance & extras.
 * Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
 * Lodash’s modular methods are great for: Iterating variables, Manipulating & testing values, Creating composite functions.
 */
window._ = require('lodash');

/**
 * Solve problems with old browsers with es6 promise polyfill
 */
require('es6-promise').polyfill();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('categoria', require('./components/Categoria.vue'));

/*const app = new Vue({
    el: '#app',
    data : {
        menu : 0
    }
});*/


$(document).ready(function () {
    // Your custom code...
    console.log('File successfully loaded!');
});

