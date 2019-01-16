Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });

  $("#btnClose").click(function(){
    location.reload();
  });

  $('#date').val(new Date().toDateInputValue());

  $("input#start-time").change(function(){
    if ($("input#end-time").val() < $("input#start-time").val())
      $("input#end-time").val($("input#start-time").val());
  });

  $("input#end-time").change(function(){
    if ($("input#end-time").val() < $("input#start-time").val())
      $("input#start-time").val($("input#end-time").val());
  });

  $("#formOne").submit(function(event) {

    var date1= $("input#date").val();
    var starttime1 = $("input#start-time").val();
    var endtime1 = $("input#end-time").val();

    $(".date").text(date1);
    $(".start-time").text(starttime1);
    $(".end-time").text(endtime1);
    event.preventDefault();

  });
});
