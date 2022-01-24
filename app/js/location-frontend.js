/**
 * LocalStorage for Choose Location
 */
const pageLocation = document.location.pathname
const localLang    = localStorage.getItem('lang')
const langLink     = document.querySelector('.location-list')
const htmlLang     = document.querySelector('html').getAttribute('lang')

/**
 * Output HTML lang
 */
console.log(`🚩 Site language: ${htmlLang}`)

/**
 * Записуємо дані в localStorage по кліку на мову.
 */
if( langLink ) {
	langLink.addEventListener('click', function(event) {
		let lang = event.target.dataset.lang

		if( lang != null || lang != undefined ) {
			console.log(`🔑 Selected: ${lang}`)
			localStorage.setItem('lang', lang)
			switchLanguage()
		}
	})
}

/**
 * Перевіряємо заповненість localStorage на обрану мову.
 * Якщо не знайдено запису, тоді робимо редірект на сторінку з вибором країни.
 */
if( ( localLang == null || localLang == undefined ) && ( pageLocation != '/page-location.html' ) ) {
	window.location.href = "page-location.html"
}

/**
 * Стираємо дані в localStorage:
 * 1. Якщо вибір мови користувачем був хибний тощо.
 * 2. Якщо користувач вперше завітав на сайт.
 */
if( pageLocation == '/page-location.html' ) {
	localStorage.removeItem('lang')
	console.log('✅ localStorage has been cleaned.')
	console.log('🌍 Please, choose your country.')
}

/**
 * Робимо перевірку ключа "lang" в localStorage та робимо редірект, 
 * якщо користувач повернувся на сайт по оригінальній (за замовчуванням) URL-адресі.
 */
if( localLang != null || localLang != undefined ) {
	/**
	 * Якщо вибрана мова не збігається з атрибутом "html => lang",
	 * виконуємо функцію switchLanguage().
	 */
	if( htmlLang != localLang ) {
		console.log(`Redirecting... ${localLang}`)
		switchLanguage()
	}
}

/**
 * Фукнція перевірки ключа "lang" в localStorage та його подальший редірект.
 */
function switchLanguage() {
	const lang = localStorage.getItem('lang')
	if( lang ) {
		switch ( lang ) {
			case "da-DK":
				// console.log('🔑 Denmark')
				localStorage.setItem('lang', lang)
				window.location.href = "/da.html"
				break
			case "uk":
				// console.log('🔑 Ukrainian')
				localStorage.setItem('lang', lang)
				window.location.href = "/uk.html"
				break
			case "en-US":
				// console.log('🔑 English')
				localStorage.setItem('lang', lang)
				window.location.href = "/en.html"
				break
			default:
				console.log('🔑 Default: ukrainian')
				localStorage.setItem('lang', 'uk')
				window.location.href = "/"
		}
	}
}