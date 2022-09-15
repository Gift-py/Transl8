$(document).ready(function () {
  $(".translationbtn").on("click", function (e) {
    e.preventDefault();
    var _form = $("#translationform")[0];
    var paradata = new FormData(_form);

    $.ajax({
      type: "POST",
      url: "{{url_for( 'mtDanish') }}",
      data: paradata,
      dataType: "script",
      processData: false,
      contentType: false,
      cache: false,
      timeout: 800000,
      success: function (res) {
        $("#outputparatext").text(res);
      },
      error: function (e) {
        console.log("ERROR : ", e);
      },
    });
  });
});
