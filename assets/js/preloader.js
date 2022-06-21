/*DND-2 Preloader */
var imagePreCount = 0;
var audioPreCount = 0;
var imgPreloadArray = new Array(
  "assets/images/logo.svg",
  "assets/images/exploriment-Logo.svg",
  "assets/images/Numberline_01.svg",
  "assets/images/Numberline_02.svg",
  "assets/images/Object_01.svg",
  "assets/images/Object_02.svg",
  "assets/images/phone-landscape-pngrepo-com.png",
  "assets/images/phone-portrait-pngrepo-com.png",
  "assets/images/texture.svg",
  "assets/images/theme-icon-outline-left.svg",
  "assets/images/theme-icon-outline-right.svg",
  "assets/images/watermark-2.png",
  "assets/images/instr-graph1.png",
  "assets/images/instr-graph2.png",
  "assets/images/instr-scale.png",
  "assets/images/A_01.svg",
  "assets/images/A_02.svg",
  "assets/images/A_03.svg",
  "assets/images/A_04.svg",
  "assets/images/A_05.svg",
);

/*--Audio--*/
var audioPreloadArray = [];
$(document).ready(function () { });
//Html is bydefault added to html
//generatePreloader();
setTimeout(function () {
  preloadImages();
}, 50);

function generatePreloader() {
  var preloaderhtml = `<div class="preloader">
  <div class="preloadpanel">
     <div class="preloadingInstr">
         <div class="progress"></div>
         <div class="progress-text">
             Loading ... 100%
         </div>
     </div>
 </div> 
</div>`;
  $("body").append(preloaderhtml);
}

function preloadImages() {
  imagePreCount = 0;
  for (var pId = 0; pId < imgPreloadArray.length; pId++) {
    var img = new Image();
    img.onload = imagePreloaded;
    img.src = imgPreloadArray[pId];
  }
}
function imagePreloaded() {
  imagePreCount++;
  var percentageload = Number(
    ((imagePreCount / imgPreloadArray.length) * 100).toFixed(0)
  );
  $(".preloader .progress-text").text("Loading..." + percentageload + "%");
  if (imagePreCount == imgPreloadArray.length) {
    setTimeout(function () {
      $(".preloader").remove();
      $(".container-so.launch").show();
      ActivityShell.Init();
    }, 50);
  }
}
