function fireEvent(action, category, label) {
	uetq = window.uetq || [];
	_paq = window._paq || [];
	dataLayer = window.dataLayer || [];
	fbq = window.fbq || [];
	gtag = window.gtag || [];
	console.log(action + '  ' + category + '  ' + label);

	if (typeof window.dataLayer != 'undefined') {
		dataLayer.push({
			event: 'ga_event',
			eventCategory: category,
			eventAction: action,
			eventLabel: label
		});
	}

	if (typeof window.gtag != 'undefined') {
		gtag('event', action, {
			event_category: category,
			event_label: label
		});
	}

	if (typeof window.fbq != 'undefined') {
		fbq('track', 'Contact', {
			content_category: category,
			content_name: label
		});
		console.log('fbq success');
	}

	if (typeof window.uetq != 'undefined') {
		uetq.push('event', action, {
			event_category: category,
			event_label: label
		});
		console.log(`uetq success`);
	}

	if (typeof window._paq != 'undefined') {
		_paq.push(['trackEvent', category, action, label]);
		console.log(`paq success`);
	}
}

document.addEventListener(
	'wpcf7mailsent',
	function (event) {
		var action = 'CF7 Submission';
		var category = 'Form';
		var label = 'CF7 wpcf7mailsent';
		fireEvent(action, category, label);
	},
	false
);

document.addEventListener(
	'nfFormSubmitResponse',
	function (event, response, id) {
		var action = 'Ninja Form Submission';
		var category = 'Form';
		var label = 'Ninja' + respons.id;
		fireEvent(action, category, label);
	},
	false
);

jQuery(document).ready(function ($) {
	$(document).on('submit_success', function (evt) {
		var action = 'Successful Form Submission';
		var category = 'Form';
		var label = `${evt.target.name} Elementor Pro Form`;
		fireEvent(action, category, label);
	});

	$('a[href^="tel"]').click(function () {
		var phone = this.href.replace('tel:', '');
		var action = `Phone Number Click on ${phone}`;
		var category = 'Phone';
		var label = `${phone} Click`;
		fireEvent(action, category, label);
	});

	$('a[href^="mailto"]').click(function () {
		var email = this.href.replace('mailto:', '');
		var action = `Email Click on ${email}`;
		var category = 'Email';
		var label = `${email} Click`;
		fireEvent(action, category, label);
	});

	$('.trackButton').click(function () {
		//I would love to get the link text and destination url of the child element a few elements down and report that as the action
		//var action = $('.trackButton').children('a').attr('href');
		var action = 'N/A'; 
		var category = 'Button';
		var label = 'Button Click';
		fireEvent(action, category, label);
	});
});
