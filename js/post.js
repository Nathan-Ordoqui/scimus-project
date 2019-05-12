$(document).ready(function(){
  var criter1,criter2,criter3,criter4,criter5,comments;
  $(".slider").change(function(){
    form_modified = true;
  });
  $("#submit").click(function(){
    if($("#submit").hasClass("unlocked")){
      criter1=$("#criter1").val();
      criter2=$("#criter2").val();
      criter3=$("#criter3").val();
      criter4=$("#criter4").val();
      criter5=$("#criter5").val();
      comments=$("textarea#comments").val();
      $.post("post_results?session_id="+session_id+"&sample_id="+parseInt(sample_id)+"&filter="+filter_order[sample_id-1],
        {criter1: criter1,criter2: criter2,criter3: criter3,criter4: criter4,criter5: criter5,comments: comments}, function(data){
          if(data==='done')
            {
              window.location.href = "rate?session_id="+session_id+"&sample_id="+(parseInt(sample_id)+1)+"&filter_order="+String(filter_order);
            }
      });
    };
  });
});
