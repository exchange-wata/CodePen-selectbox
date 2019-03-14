$(function(){
  showedSelection();
  var selections = [];
  $('select').each(function() {
      selections.push($(this).text());
  });
  var animetionTitle = selections[0];
  for (var i = 1; i <= selections.length; i++ ){
    if (animetionTitle == true){
      $(animetionTitle).show();
    }else{
      $('#chara').attr('id','chara-' + [i]).hide();
      $('#return').attr('id','return-' + [i]).hide(); 
    }
  }
  function showedSelection(){
    $('label[for="anime-title"]').text('Animations');
    $('[name="favorite-animations"]').show();
    $('[name="favorite-animations"] option').eq(0).prop('selected', true);
    $('[name="characters"]').hide();
    $('small').hide();
  }
  var animations = [];
  $('[name="favorite-animations"] option').each(function() {
      animations.push($(this).text());
  });
  var unSelected = animations[0];
  $('[name="favorite-animations"]').change(function() {
    var SelectedAnimation = [];
    $('[name="favorite-animations"] option:selected').each(function() {
      SelectedAnimation.push($(this).text());
      if (SelectedAnimation == unSelected) {
        showedSelection();
      }else{
        $('[name="favorite-animations"]').hide();
        $('label[for="anime-title"]').text('SelectedAnimation：'  + SelectedAnimation);
        for (var i = 1; i <= animations.length; i++ ){
          if (SelectedAnimation == animations[i]){              
            $('#chara-' + [i]).append('label[for="anime-title"]').show();
            $('#return-' + [i]).show();
            $('#return-' + [i]).on('click',function(){
              showedSelection();
            }); 
          }
        }           
      } 
    });
  });
});