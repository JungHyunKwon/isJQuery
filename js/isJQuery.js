/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name isJQuery
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isJQuery = function(value) {
			return typeof window.jQuery === 'function' && value instanceof window.jQuery;
		};
	})();
}catch(e) {
	console.error(e);
}