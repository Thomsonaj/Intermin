if (Drupal.jsEnabled) {
  $(document).ready(function () {
    $("div.foobar_A_group/div.form_item).each(function(){
      $(this).children("input:checkbox").click(function(){
        message = (this.checked) ? "message1" : "message2"; 
        $(this).parents().siblings().children("input:text").val(message);
      });  
    });      
  }); 
}