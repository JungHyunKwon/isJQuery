/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	/**
	 * @name isJquery
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	window.isJquery = function(value) {
		var $ = window.jQuery;

		return typeof $ === 'function' && value instanceof $;
	};
})();