jQuery().ready(function(){
	jQuery('#navigation').accordion({
		active: false,
		header: '.head',
		navigation: true,
		event: 'mouseover',
		fillSpace: true,
		animated: 'easeslide'
	});
	
	var accordions = jQuery('#navigation');
		
		jQuery('#switch select').change(function() {
			accordions.accordion("activate", this.selectedIndex-1 );
		});
		jQuery('#close').click(function() {
			accordions.accordion("activate", -1);
		});
		jQuery('#switch2').change(function() {
			accordions.accordion("activate", this.value);
		});
		jQuery('#enable').click(function() {
			accordions.accordion("enable");
		});
		jQuery('#disable').click(function() {
			accordions.accordion("disable");
		});
		jQuery('#remove').click(function() {
			accordions.accordion("destroy");
			wizardButtons.unbind("click");
		});
});