function petesTracker(action, category, label) {
  window.uetq = window.uetq || [];
  window._paq = window._paq || [];
  window.dataLayer = window.dataLayer || [];
  window.fbq = window.fbq || [];

  if (typeof dataLayer != "undefined") {
    dataLayer.push({
      event: "ga_event",
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
    });
    console.log(`dataLayer ${action} ${category} ${label} success`);
  }

  if (typeof fbq != "undefined") {
    fbq("track", "Contact", {
      content_category: category,
      content_name: label,
    });
    console.log(`fbq ${action} ${category} ${label} success`);
  }

  if (typeof uetq != "undefined") {
    uetq.push("event", action, {
      event_category: category,
      event_label: label,
    });
    console.log(`uetq  ${action} ${category} ${label} success`);
  }

  if (typeof _paq != "undefined") {
    window._paq.push(["trackEvent", category, action, label]);
    console.log(`_paq${action} ${category} ${label} success`);
  }
}

function gracefulTracking() {
  return;
}

document.addEventListener(
  "wpcf7mailsent",
  function (event) {
    var action = "Successful Contact Form 7 Submission";
    var category = "Form";
    var label = "CF7 wpcf7mailsent";
    petesTracker(action, category, label);
  },
  false
);

jQuery(document).ready(function ($) {
  $(document).on("submit_success", function (evt) {
    var action = "Successful Form Submission";
    var category = "Form";
    var label = evt.target.name + " Elementor Pro Form";
    petesTracker(action, category, label);
  });

  $('a[href^="tel"]').click(function () {
    var phone = this.href.replace("tel:", "");
    var action = "Phone Number Click on " + phone;
    var category = "Phone";
    var label = phone + " Click";
    petesTracker(action, category, label);
  });

  $('a[href^="mailto"]').click(function () {
    var email = this.href.replace("mailto:", "");
    var action = "Email Click on " + email;
    var category = "Email";
    var label = email + " Click";
    petesTracker(action, category, label);
  });

  $(".trackButton").click(function () {
    var currentUrl = this.href.replace("https://", "");
    var destUrl = this.text();
    var buttonText = $(".trackButton").text();
    var action =
      "Button click on " +
      button +
      " destURL: " +
      destUrl +
      " buttonText " +
      buttonText;
    var category = "Button";
    var label = button + " Click";

    petesTracker(action, category, label);
  });
});
