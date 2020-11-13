
function petesTracker(action,category,label) {
	window.uetq = window.uetq || []; 
    	window.gtag = window.gtag || [];
    	window.fbq = window.fbq || [];
	window._paq = window._paq || [];
	
	if (typeof gtag != "undefined") {
		gtag('event', action, {event_category: category, event_label: label});
	}

	if (typeof fbq != "undefined") {
		fbq('track', 'Contact', {content_category: category, content_name: label});
	}
	
	if (typeof uetq != "undefined") {
		uetq.push('event', action, {event_category: category, event_label: label});  
	}
	
	if (typeof _paq != "undefined") {
		window._paq.push(['trackEvent', category, action, label]);  
	}
    	
	//window.location.search += '&utm_event='+category;
	console.log(action + " " + category + " " + label);
}

function gracefulTracking(){
	//window.location.search += '&utm_event=no_tracking';
	return;
}


document.addEventListener('wpcf7mailsent', function(event) {
	var action = 'Successful Contact Form 7 Submission';
    	var category = 'Form';
    	var label = 'CF7 wpcf7mailsent';
	petesTracker(action,category,label);
}, false);

jQuery(document).ready(function($) {
	
	$(document).on('submit_success', function() {
		var form_name = evt.target.name;
    		var action = 'Successful Elementor Pro Form Submission';
    		var category = 'Form';
    		var label = 'Elementor submit_success';
    		petesTracker(action,category,label);
  	});

	$('a[href^="tel"]').click(function() {
		var phone = this.href.replace('tel:', '');
		var action = 'Phone Number Click on ' + phone;
		var category = 'Phone';
	    	var label = phone + ' Click';    
	    	petesTracker(action,category,label);
	});

	$('a[href^="mailto"]').click(function() {
		var email = this.href.replace('mailto:', '');
		var action = 'Email Click on ' + email;
		var category = 'Email';
	 	var label = email + ' Click';    
		petesTracker(action,category,label);
	});
	
  	$(".trackButton").click(function() {
		var currentUrl = this.href.replace('https://', '');
		var destUrl = this.text();
		var buttonText = $(".trackButton").text();
		var action = 'Button click on ' + button + ' destURL: ' + destUrl + ' buttonText ' + buttonText;
		var category = 'Button';
		var label = button + ' Click';    
		
		petesTracker(action,category,label);
  	});
});

