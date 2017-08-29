/**
 * Created by mp2788 on 8/28/17.
 */


function clickListener () {

  $('.clickme').on('click', function (e) {

    e.preventDefault();

    var id = e.currentTarget.id;
    console.log($('#pascals-code').html());
    $('.code-container').html($('#' + id + '-code').html());

  });
}
$( document ).ready(function() {
  clickListener();
  console.log( "ready!" );
});
//clickListener();