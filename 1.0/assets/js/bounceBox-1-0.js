var bounceBox = new Class({
	
	Implements : Options,
    options: {
			showOnLoad: false,
			overlay: false,
			position: 0,
			containerId: 'drop_down',
			actionId: 'show_drop',
			closeId: 'drop_close',
			opacity: .8,
			colour: '#222222',
			transition: 'bounce:out', 
			duration: 2500
    },

	initialize: function(options){

		this.options.delay = 1300;
		
		this.setOptions(options);		
		
		this.moveDropdown = new Fx.Tween(
			this.options.containerId, {
				transition: this.options.transition, 
				duration: this.options.duration
			}
		);
		this.dropdownHeight = $(this.options.containerId).getStyle('height').toInt();
		this.dropdownStart  = '-'+ (this.dropdownHeight+100) +'px';
		this.dropdownFinish = this.setPosition();

		this.moveDropdown.set('top', this.dropdownStart);
		
		if(this.options.showOnLoad== true) {
			this.displayBounceBox();
		}
		
		$(this.options.actionId).addEvent(
			'click', function(){
				this.displayBounceBox();
			}.bind(this)
		);
		
			
		$(this.options.closeId).addEvent('click', function(e){ 
			this.displayBounceBox();
		}.bind(this));
		
	},
	
	setPosition: function() {
		if(this.options.position=='center') {
			return Math.ceil((window.getHeight() / 2) - ($(this.options.containerId).getHeight() /2)) +'px';
		} else {
			return Math.ceil(this.options.position) +'px';
		}
	},
	
	displayBounceBox: function() {
		if($(this.options.containerId).getStyle('top') != this.dropdownFinish) {
			this.showOverlay();
			this.moveDropdown.set('top', this.dropdownStart);
			this.moveDropdown.start('top', this.dropdownStart, this.dropdownFinish);
			window.addEvent('keydown', function(event) {
				if (event.code == '27' && Math.ceil($(this.options.containerId).getStyle('height').toInt()) != this.dropdownStart.toInt()) {
					this.displayBounceBox();
				}
			}.bind(this));
		} else {
			this.moveDropdown.start('top', this.dropdownFinish, this.dropdownStart);
			this.hideOverlay.delay(this.options.delay, this);
		}
		stop();
	},
	
	showOverlay: function() {
		if(this.options.overlay == true) {
			if(!$('overlay')) {
				$(document.body).adopt(
					$$([overlay = new Element("div", { id: "overlay" }) ])
				);
			}
			$('overlay').setStyles({
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				'width':  window.getSize().x + 'px',
				'height':  window.getSize().y + 'px',
				//'height': window.getDocument().height + 'px',
				'display': 'block',
				'background-color': this.options.colour
			}).fade(this.options.opacity);
		}
	},
	
	hideOverlay: function() {
		if(this.options.overlay == true) {
			$('overlay').fade('out');
		}
	}

});