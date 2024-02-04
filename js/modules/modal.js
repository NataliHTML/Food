function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector)
	modal.classList.add('show')
	modal.classList.remove('hide')
	// modal.classList.toggle('show')
	document.body.style.overflow = 'hidden'

	console.log(modalTimerId)
	if (modalTimerId) {
		clearInterval(modalTimerId)
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector)
	modal.classList.add('hide')
	modal.classList.remove('show')
	// modal.classList.toggle('show')
	document.body.style.overflow = ''
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	// Modal
	// это была я
	// 	const btns = document.querySelectorAll('[data-modal]');
	// 	const modal = document.querySelector('.modal');
	// 	const closes = document.querySelector('[data-close]')

	// 	btns.forEach(function(item){
	//     item.addEventListener('click', function() {
	// 			modal.classList.add('show', 'fade');
	// 			modal.classList.remove('hide')
	//      });
	// });
	// 	closes.addEventListener('click', () => {
	// 		modal.classList.add('hide');
	// modal.classList.remove('show')
	// })

	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector)

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => openModal(modalSelector, modalTimerId))
	})

	modal.addEventListener('click', e => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal(modalSelector)
		}
	})

	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal(modalSelector)
		}
	})

	function showModalByScroll() {
		// if (window.screenY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1)
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal(modalSelector, modalTimerId)
			window.removeEventListener('scroll', showModalByScroll)
		}
	}

	window.addEventListener('scroll', showModalByScroll)
}
export default modal
export { closeModal }
export { openModal }
