/*!
 * gladstonebrews v0.0.1 (https://github.com/jeremycoulter/gladstonebrews)
 * Copyright 2019 Jeremy Coulter (https://jeremycoulter.github.io)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*
 * constants
 */
var CURRENT_VERSION = "0.0.1";

printCurrentVersion();
printCopyrightYear();

function printCurrentVersion() {
    document.getElementById('currentVersion').innerHTML = CURRENT_VERSION;
}

function printCopyrightYear() {
    document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();
}

$(function() {

    $('#instagram').hover(
        function() {
            $('#instagram').attr('src', './img/instagram-on.png');
        },
        function() {
            $('#instagram').attr('src', './img/instagram-off.png');
        });

    $('#instagram').click(function() {
        window.open('https://www.instagram.com/gladstonebrews', '_blank');
    });

    $('#facebook').hover(
        function() {
            $('#facebook').attr('src', './img/facebook-on.png');
        },
        function() {
            $('#facebook').attr('src', './img/facebook-off.png');
        });

    $('#facebook').click(function() {
        window.open('https://www.facebook.com/gladstonebrews', '_blank');
    });

    $('#twitter').hover(
        function() {
            $('#twitter').attr('src', './img/twitter-on.png');
        },
        function() {
            $('#twitter').attr('src', './img/twitter-off.png');
        });

    $('#twitter').click(function() {
        window.open('https://www.twitter.com/gladstonebrews', '_blank');
    });

    $('#email').hover(
        function() {
            $('#email').attr('src', './img/email-on.png');
        },
        function() {
            $('#email').attr('src', './img/email-off.png');
        });

    $('#email').click(function() {
        event.preventDefault();
        var email = 'jeremy@gladstonebrews.ca';
        var subject = 'Inquery From Website';
        var emailBody = 'Hi Jeremy!';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    });

});