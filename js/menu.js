var btnMenu = document.getElementById('btnMenu');
var menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');

});

$(function(){
    var texto = "Arquitectura De Computadoras";
    maquina("typer",texto,100,0);
   });
   
   function maquina(contenedor,texto,intervalo,n){
    var i=0,
     // Creamos el timer
     timer = setInterval(function() {
     if ( i<texto.length ) {
      // Si NO hemos llegado al final del texto..
      // Vamos añadiendo letra por letra y la _ al final.
      $("#"+contenedor).html(texto.substr(0,i++) + "_");
     } else {
      // En caso contrario..
      // Salimos del Timer y quitamos la barra baja (_)
      clearInterval(timer);
      $("#"+contenedor).html(texto);
      // Auto invocamos la rutina n veces (0 para infinito)
      if ( --n!=0 ) {
       setTimeout(function() {
        maquina(contenedor,texto,intervalo,n);
       },3600);
      }
     }
    },intervalo);
   };

   $(function(){
    var texto = "Contacto";
    maquina("contact",texto,130,0);
   });
   
   function maquina(contenedor,texto,intervalo,n){
    var i=0,
     // Creamos el timer
     timer = setInterval(function() {
     if ( i<texto.length ) {
      // Si NO hemos llegado al final del texto..
      // Vamos añadiendo letra por letra y la _ al final.
      $("#"+contenedor).html(texto.substr(0,i++) + "_");
     } else {
      // En caso contrario..
      // Salimos del Timer y quitamos la barra baja (_)
      clearInterval(timer);
      $("#"+contenedor).html(texto);
      // Auto invocamos la rutina n veces (0 para infinito)
      if ( --n!=0 ) {
       setTimeout(function() {
        maquina(contenedor,texto,intervalo,n);
       },3600);
      }
     }
    },intervalo);
   };

   $(function(){
    var texto = "Hardware";
    maquina("hard",texto,130,0);
   });
   
   function maquina(contenedor,texto,intervalo,n){
    var i=0,
     // Creamos el timer
     timer = setInterval(function() {
     if ( i<texto.length ) {
      // Si NO hemos llegado al final del texto..
      // Vamos añadiendo letra por letra y la _ al final.
      $("#"+contenedor).html(texto.substr(0,i++) + "_");
     } else {
      // En caso contrario..
      // Salimos del Timer y quitamos la barra baja (_)
      clearInterval(timer);
      $("#"+contenedor).html(texto);
      // Auto invocamos la rutina n veces (0 para infinito)
      if ( --n!=0 ) {
       setTimeout(function() {
        maquina(contenedor,texto,intervalo,n);
       },3600);
      }
     }
    },intervalo);
   };