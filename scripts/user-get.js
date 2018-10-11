$().ready(function() {
    var url= "http://localhost:8080/Users/Get/2"
    $.getJSON(url)
    .then(function(resp) {
        console.log(resp);
        render(resp)
    });
});
function render(user) {
        $("#id").val(user.id);
        $("#name").val(user.firstName +" " +user.lastName);
        $("#username").val(user.userName)
        $("#phoneNumber").val(user.phoneNumber)
        $("#email").val(user.email)
        $("#reviewer").prop("checked", user.reviewer)
        $("#admin").prop("checked", user.admin)
}