window.onload = () =>{
'use strict';

if('serviceWiorker' in navigator){
navigator.serviceWorker.register('./sw.js');
}
}
