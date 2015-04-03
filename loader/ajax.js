/**
 * Created by Christian Chiama on 03/04/2015.
 */
jQuery(document)
    .ajaxStart(function () { $('.page-loader').fadeIn(500);})
    .ajaxStop(function () {  $('.page-loader').fadeOut(500); })
    .ready(function () {
   
        $.ajax({
                url: your-file.php',
                type:'POST',
                success: function (data) {
                    alert(data);
                },
                error: function () {
                    alert('Error!');
                }
            });

        });
