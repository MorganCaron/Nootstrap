$(document).ready(function() {
    $('#notificationButton').click(function() {
        newNotification('Hello World !');
    });

    $('#debugButton').click(function() {
        toggleDebug();
    });
});
