#BOUNCEBOX

Website: [http://sheldon.lendrum.co.nz/](http://sheldon.lendrum.co.nz/)

A simple JS class to display a sliding box with a nice transition and with/out an overlay layer.

This Class requires no CSS styles other that cosmetic formatting, and can be called via DOM READY or an Event. If the BounceBox is open, then your ESC key will close the BounceBox.

##Requirements

To use BounceBox you will need the following:

* Mootools 1.2 or newer

##Licensing

BounceBox is released under the [GPL v2](http://www.gnu.org/licenses/gpl-2.0.html).

##Example Usage

<script type="text/javascript" charset="utf-8">

	window.addEvent('domready', function(){
		
		var mybouncebox = new bounceBox({
						showOnLoad: false,          // show BounceBox on DOM READY
						overlay: false,             // Show overlay with BounceBox
						position: 0,                // INT height of box or 'center'
						containerId: 'drop_down',   // BounceBox Container ID
						actionId: 'show_drop',      // Action Trigger ID
						closeId: 'drop_close',      // Action Close ID
						opacity: .8,                // Overlay Opacity
						colour: '#222222',          // Overlay Colour
						transition: 'bounce:out',   // BoucneBox Transitions
						duration: 2500              // BoucneBox Transition Speed
		});

		$('demo-link').addEvent('click', function() {
						// call bouncebox via a onClick Event
						mybouncebox.displayBounceBox();
		});

	});
	
</script>