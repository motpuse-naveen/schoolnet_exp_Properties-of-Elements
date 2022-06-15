var element_id;
var optionValue;
var popupheight;
var bodyheight;

$(document).ready(function(){
    for (var i = 0; i < elementInfo.length; i++) {
        $(".popupContent p span.element_select select").append(
            $('<option />', {
                'value': elementInfo[i].id,
                'text': elementInfo[i].element
            })
        );               
    }

})
$(document).on("click", "table tr td div", function (event) {
    element_id=$(this).attr("data-id");
    $("table tr td div").removeClass("element_border");
    $(this).addClass("element_border");
            console.log(element_id);
                // var list = '<li><span>' + elementInfo[element_id-1].series + '</span></li>';
            
            // var span = $('<span />').attr('data-attr', 'series_"+element_id+"').html('Elway');
            // for (var i = 0; i < elementInfo.length; i++) {
            //     $(".popupContent p span.element_select").append(
            //         $('<option />', {
            //             'value': elementInfo[i].id,
            //             'text': elementInfo[i].element
            //         })
            //     );               
            // }​
            addElementInfo(element_id);
            
  });
  function addElementInfo(element_id){
      $(".popupContent").removeClass("hidePop").addClass("showPop");
    //   if(window.innerWidth >= 1024) {
    //     $("#split-main.split").css("height","43%");
    //     return;
    //   }
    //   $(".container-so.main .exp_body .split").css("height","26%");
    $('.popupContent p span.element_select select>option[value="' + element_id + '"]').prop('selected', true);
    // $(".popupContent p span.element_select").html(elementInfo[element_id-1].series);
    $(".popupContent p span.series").html(elementInfo[element_id-1].series);
    $(".popupContent p span.shells").html(elementInfo[element_id-1].shells);
    $(".popupContent p span.symbol").html(elementInfo[element_id-1].symbol);
    $(".popupContent p span.at_radius").html(elementInfo[element_id-1].atomicRadius);
    $(".popupContent p span.fillling_or").html(elementInfo[element_id-1].fillingOrbital);
    $(".popupContent p span.at_no").html(elementInfo[element_id-1].atomicno);
    $(".popupContent p span.radius").html(elementInfo[element_id-1].covalentRadius);
    $(".popupContent p span.electron_negativity").html(elementInfo[element_id-1].electroNegativity);
    $(".popupContent p span.at_mass").html(elementInfo[element_id-1].atomicMass);
    $(".popupContent p span.density").html(elementInfo[element_id-1].density);
    $(".popupContent p span.period_no").html(elementInfo[element_id-1].period);
    $(".popupContent p span.bp").html(elementInfo[element_id-1].boilingPoint);
    $(".popupContent p span.group").html(elementInfo[element_id-1].group);
    $(".popupContent p span.mp").html(elementInfo[element_id-1].meltingPoint);
    $(".popupContent p span.block").html(elementInfo[element_id-1].block);
    $(".popupContent p span.valencies").html(elementInfo[element_id-1].valencies);
    $("button.popup_btn").css("display","none");
    popupheight=$(".showPop").height();
    bodyheight=$(".exp_body_content").height();
    if(window.innerWidth >= 1024) {
            $("#split-main.split").css("height",bodyheight-popupheight-30);
            return;
          }

  }
  $(document).on("change", ".popupContent p span.element_select select", function (event) {
    $(this).find("option:selected").each(function(){
     optionValue = $(this).attr("value");
        console.log(optionValue);
        $('table tr td div').removeClass("element_border");
        $('table tr td div[data-id="'+optionValue+'"]').addClass("element_border");
        addElementInfo(optionValue);
    })

       
  })

  $(document).on("click", ".popupContent button.popdown_btn", function (event) {

    $(".popupContent").removeClass("showPop").addClass("hidePop");
    $("button.popup_btn").css("display","block");
    $(".container-so.main .exp_body .split").css("height","100%");
    // $(".element_table table tr td div").removeClass("element_border");
  })
  $(document).on("click", "button.popup_btn", function (event) {

    $(".popupContent").addClass("showPop");
    $("button.popup_btn").css("display","none");
    $(".container-so.main .exp_body .split").css("height","100%");
    // $(".element_table table tr td div").removeClass("element_border");
  })
  