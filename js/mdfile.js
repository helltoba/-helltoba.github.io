$(window).on('load', function () {
	function notf() {
		return $.ajax({
			type: 'GET',
			url: let = '/md/' + (window.location.search.substring(1)) + '.html',
			cache: false,
		})
	}

	notf().done(function () {
		const loadMarkdown = async () => {
			let converter = new showdown.Converter()
			converter.setFlavor('github')

			let filename = '/md/' + (window.location.search.substring(1)) + '.html'
			let text = await (await fetch(filename)).text()
			let html = converter.makeHtml(text)

			document.getElementById('embed').innerHTML = html
		}

		loadMarkdown()
		load()

	}).fail(function () {
		document.getElementById('embed').innerHTML = `<h1>Fail！</h1>`
		load()
	})
})