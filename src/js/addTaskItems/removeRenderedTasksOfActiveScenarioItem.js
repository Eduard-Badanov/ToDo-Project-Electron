import { user } from '../userInfo.js'

export function removeRenderedTasksOfActiveScenarioItem(DOMname) {
	if (DOMname !== 'item-all' && DOMname !== 'item-favorites' && DOMname !== 'special') {
		user.forEach((element) => {
			if (element.DOMname === DOMname) {
				if (element.tasks.length > 0) {
					element.tasks.forEach((el) => {
						if ((document.querySelector(`.${element.DOMname}-${el.id}`) !== null && element.DOMname !== 'item-all')) {
							document.querySelector(`.${element.DOMname}-${el.id}`).remove()
						}
					})
				}
			}
		})
	} else if (DOMname === 'item-all' || DOMname === 'special') {
		while (document.querySelector('.tasks__tasks-list').childNodes.length > 0) {
			document.querySelector('.tasks__tasks-list').childNodes.forEach((element) => {
				element.remove()
			})
		}
	} else if (DOMname === 'item-favorites') {
		while (document.querySelector('.tasks__tasks-list').childNodes.length > 0) {
			document.querySelector('.tasks__tasks-list').childNodes.forEach((element) => {
				element.remove()
			})
		}
	}
}