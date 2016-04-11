   function changeBarVal(){
      var cx = $("#barInput").val();
      if(cx>=80){
         $("#barId").removeClass();
         $("#barId").addClass("progress-bar progress-bar-warning");
      }else if(cx>=50){
         $("#barId").removeClass();
         $("#barId").addClass("progress-bar progress-bar-info");
      }else{
         $("#barId").removeClass();
         $("#barId").addClass("progress-bar progress-bar-success");
      }

      var sw = $("#bar").width()*(cx/100);

      $("#barId").width(sw);
      var xxx = cx + "%";
      $("#info").text(xxx);
      $("#maxSize").text("100GB");
   }