let event = new Event('keydown');
event.keyCode = 32;
event.which = event.keyCode;
event.altKey = false;
event.metaKey = false;

let context = null;
context = document.querySelector('.runner-canvas');
context = context.getContext('2d');

setInterval(function () {
   const color = context.getImageData(120, 90, 30, 22).data;
   if (Math.max(...color) === 255) {
      document.dispatchEvent(event);
   }
}, 10);