$(document).ready(function() {
  $.ajax({
    url: 'http://www.mazdausa.com/webservices/mx/carCareCoupon/50237',
    type: 'GET',
    dataType: 'xml',
    success: xmlParser
  });
});

function xmlParser(xml) {
  $('#load').fadeOut();

  $(xml).find('coupon').each(function() {
    var servicesPlez = $(this).find('services').find('service').text();

    $('#container').append(
      `<div class="coupon">
        <h3>${$(this).find('title').text()}</h3>
        <h1>${$(this).find('deal').text()}</h1>
        <p class='desc'>${$(this).find('description').text()}</p>
          <p>${servicesPlez}</p>
        <p id='test' class="disc">${$(this).find('disclaimer').text()}</p>
      </div>`
    );
  });
  $("body").children().each(function () {
      $(this).html( $(this).html().replace(/39.95/g,'<span class="price">69.95</span>') );
  });

  $("body").children().each(function () {
      $(this).html( $(this).html().replace(/59.95/g,'<span class="price">89.95</span>') );
  });

  $("body").children().each(function () {
      $(this).html( $(this).html().replace(/Inspect\/adjust caster, camber and toe-in as applicableInspect suspension and steering linkageCheck tire wearCheck tire pressure, adjust as necessaryComputerized alignmentRoad test/g,`
        <ul>
          <li>Inspect/adjust caster, camber and toe-in as applicable</li>
          <li>Inspect suspension and steering linkage</li>
          <li>Check tire wear</li>
          <li>Check tire pressure, adjust as necessary</li>
          <li>Computerized alignment</li>
          <li>Road test</li>  
        </ul>
        `) );
  });



}
