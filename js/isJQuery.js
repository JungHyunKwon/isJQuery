/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name 제이쿼리 객체인지 확인
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