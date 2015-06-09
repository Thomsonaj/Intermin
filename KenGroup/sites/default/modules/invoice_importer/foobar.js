confirm("Drupal.jsEnabled sample");
if (Drupal.jsEnabled) {
    confirm("ttttt1");
  $(document).ready(function () {
      confirm("ttttt2");
    $("div.foobar_A_group/div.form_item").each(function(){
        confirm("ttttt3");
      $(this).children("input:checkbox").click(function(){
        message = (this.checked) ? "message1" : "message2"; 
        confirm("ttttt");
        $(this).parents().siblings().children("input:text").val(message);
      });  
    });      
  }); 
}