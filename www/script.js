$(document).ready(function() {
    $('#dataform').submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
        //Prepare data form from web server

        var formData = {
            email: $('#email').val(),
            password: $('#password').val()
        }
        $.ajax({

            type : "POST",
            contentType : "application/json",
            url : "/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function (response){
                if(response.valid == true){
                    console.log('good');
                    $('#successmsg').removeClass('hidemessage').addClass('showmessage');
                    $('#errormsg').removeClass('showmessage').addClass('hidemessage');

                    // Redirect to account after short delay
                    setTimeout(() => {
                        window.location.href = "/account";

                    },1000)
                } else {
                    $('#errormsg').removeClass('hidemessage').addClass('showmessage');
                    $('#successmsg').removeClass('showmessage').addClass('hidemessage');
                }
            },
            error : function (error) {
                alert("Error!");
                console.log("ERROR: ", error)
            }
        }

        )
    }
})