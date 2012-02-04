/*!
 * jQuery LoremImages v1.0.0
 * https://github.com/Darsain/loremImages
 *
 * LoremIpsum equivalent for populating elements with random images.
 * LoremImages is using the http://lorempixel.com service.
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/MIT
 */
;(function($, undefined){

	var pluginName = 'loremImages';

	// jQuery plugin extension
	$.fn[pluginName] = function( width, height, options ){

		// Parse options
		var o = $.extend( {}, $.fn[pluginName].defaults, options );

		// Execute plugin and return this
		return this.each(function(i,e){

			var container = $(e),
				output = '';

			for( var i = 0; i < o.count; i++ ){

				var LPwidth = width + Math.round( Math.random()*o.randomWidth ),
					LPheight = height + Math.round( Math.random()*o.randomHeight ),
					url = '//lorempixel.com/'+( o.grey ? 'g/' : '' )+LPwidth+'/'+LPheight+'/'+(o.category ? o.category+'/' : '')+'?'+Math.round( Math.random()*1000 );

				output += o.itemBuilder.call( container, i, url, LPwidth, LPheight );

			}

			container.append(output);

		});

	};

	// Default options
	$.fn[pluginName].defaults = {
		count:        10,    // how many items should be attached
		grey:         0,     // set to 1 for grey images
		randomWidth:  0,     // random range for width value. if 'width' is 100 and 'randomWidth' is 50, it'll produce a number in 100-150 range
		randomHeight: 0,     // random range for height value. if 'height' is 100 and 'randomHeight' is 50, it'll produce a number in 100-150 range
		category:     0,     // can be: abstract, animals, city, food, nightlife, fashion, people, nature, sports, technics, transport
		itemBuilder:  function( index, url, width, height ){  // function for generating items, where `this` is jQuery wrapped container
			return '<img src="'+url+'" alt="Lorempixel">';
		}
	};

})(jQuery);
