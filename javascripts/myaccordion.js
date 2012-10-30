jQuery().ready(function(){
	jQuery('#navigation').accordion({
		active: false,
		header: '.head',
		navigation: true,
		event: 'mouseover',
		fillSpace: true,
		animated: 'easeslide'
	});	
});