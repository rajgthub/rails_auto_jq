// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))  
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {  
  return new bootstrap.Popover(popoverTriggerEl)  
}) 
import "./src/jquery"
import "./src/jquery-ui"

$(function() {
  $('#book-autocomplete').autocomplete({
    source: '/autocomplete/books',
    minLength: 2,
    select: function(event, ui) {
      $('#book-autocomplete').val(ui.item.value);
      return false;
    }
  });
})

