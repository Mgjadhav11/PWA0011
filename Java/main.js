function regSW(){
  if('serviceWiorker' in navigator){
  navigator.serviceWorker.register('./sw.js');
  }
}
