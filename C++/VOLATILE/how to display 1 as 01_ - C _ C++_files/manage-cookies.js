// Enable and Disable Tracking Functions

// delete GDPR cookie and always display message
// don't show ads or tracking
// show message
function disableTracking(){

    var cookie_date = new Date();
    var cookie_years_alive = 50;
    cookie_date.setFullYear(cookie_date.getFullYear() + cookie_years_alive)

    set_cookie("bytes_tracking","disabled", cookie_date)

    // show message
    bytesShowMessage()

    // don't show ads or tracking
    bytesClearSettingsButton()
    bytesCmDisabledButton()

}

// set cookie that say it's ok to for ads and analytics
// show ads
// dont' show message
function enableTracking(){

    var cookie_date = new Date();
    var cookie_years_alive = 50;
    cookie_date.setFullYear(cookie_date.getFullYear() + cookie_years_alive)

    set_cookie("bytes_tracking","enabled", cookie_date)

    // // don't show message
    bytesHideMessage()
    bytesClearSettingsButton()
    bytesCmEnabledButton()

}

// Display Message Functions
function bytesShowMessage(){

    var E = "bytes-cm-display"
    var cmp_message = YAHOO.util.Dom.get(E);
    YAHOO.util.Dom.addClass(cmp_message, "bytes-cm-display-show");

}
function bytesHideMessage(){

    var E = "bytes-cm-display"
    var cmp_message = YAHOO.util.Dom.get(E);
    YAHOO.util.Dom.removeClass(cmp_message, "bytes-cm-display-show");

}


// Cookie Settings Functions
function bytesCmEnabledButton(){

    var E = "bytes-cm-settings-enabled"
    var cmp_message = YAHOO.util.Dom.get(E);
    YAHOO.util.Dom.addClass(cmp_message, "bytes-cm-enable");

}
function bytesCmDisabledButton(){

    var E = "bytes-cm-settings-disabled"
    var cmp_message = YAHOO.util.Dom.get(E);
    YAHOO.util.Dom.addClass(cmp_message, "bytes-cm-disable");

}

function bytesClearSettingsButton(){

    var E = "bytes-cm-settings-enabled"
    var cmp_message = YAHOO.util.Dom.get(E);
    YAHOO.util.Dom.removeClass(cmp_message, "bytes-cm-enable");

    var E = "bytes-cm-settings-disabled"
    var cmp_message = YAHOO.util.Dom.get(E);
    YAHOO.util.Dom.removeClass(cmp_message, "bytes-cm-disable");

}



function getTrackingCookie(){

    var trackingCookie = fetch_cookie("bytes_tracking")
    return trackingCookie

}



// Loading Tracking Functions
function loadBytesTracking(){

    var trackingVal = getTrackingCookie();

    if (!trackingVal) {
        // new visit
        // show ads
        // show message

        bytesShowMessage()
        bytesClearSettingsButton() // manage cookie settings function

    }
    if (trackingVal === "disabled"){

        bytesShowMessage()
        bytesClearSettingsButton()
        bytesCmDisabledButton()

    }
    if (trackingVal === "enabled") {
        bytesHideMessage()
        bytesClearSettingsButton()
        bytesCmEnabledButton()

    }

}