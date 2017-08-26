//<![CDATA[
(function(window, document) {
	var textareas = document.getElementsByTagName('textarea');
	var decoded = textareas[0];
	var encoded = textareas[1];
	var checkboxes = document.getElementsByTagName('input');
	var encodeSpecialOnly = checkboxes[0];
	var useNamedReferences = checkboxes[1];
	var stringFromCharCode = String.fromCharCode;

	function encode(string) {

		return encodeURIComponent(string).replace(/['()_*]/g, function(character) {
			return '%' + character.charCodeAt().toString(16);
		});
	}

	function update() {
		var shouldDecode = this == encoded;
		var value;
		if (shouldDecode) {
			value = he.decode(encoded.value);
			decoded.value = value;
		} else {
			value = he.encode(decoded.value, {
				'encodeEverything': !encodeSpecialOnly.checked,
				'useNamedReferences': useNamedReferences.checked
			});
			encoded.value = value;
		}
		value = decoded.value;
		permalink.hash = encode(value);
		storage && (storage.he = value);
	};


	decoded.onkeyup = encoded.onkeyup = encodeSpecialOnly.onchange = useNamedReferences.onchange = update;
	decoded.oninput = encoded.oninput = encodeSpecialOnly.onchange = useNamedReferences.onchange = function() {
		decoded.onkeyup = encoded.onkeyup = null;
		update.call(this);
	};


	


}(this, document));
//]]>
