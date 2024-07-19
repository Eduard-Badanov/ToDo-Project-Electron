import { createTaskItem } from '../addTaskItems/createTaskItem.js'
import { checkSorting } from '../listeners/sortingElements.js'
import { user } from '../userInfo.js'
import { watchingTasksItems } from './watchingTasksItems.js'

export function renderTasksOfActiveScenarioItem(DOMname) {
	if (DOMname !== 'item-all' && DOMname !== 'item-favorites') {
		user.forEach((element) => {
			if (element.DOMname === DOMname) {
				if (element.tasks.length > 0) {
					if (checkSorting()) {
						element.tasks.sort((a, b) => {
							return new Date(a.data) - new Date(b.data)
						}).sort((a, b) => {
							return a.isImportant - b.isImportant
						}).forEach((el) => {
							createTaskItem(DOMname, el.id, el.text, el.data, el.isImportant)
							watchingTasksItems()
						})
					} else {
						element.tasks.sort((a, b) => {
							return new Date(b.data) - new Date(a.data)
						}).sort((a, b) => {
							return a.isImportant - b.isImportant
						}).forEach((el) => {
							createTaskItem(DOMname, el.id, el.text, el.data, el.isImportant)
							watchingTasksItems()
						})
					}
				}
			}
		})
	} else if (DOMname === 'item-all') {
		user.forEach((element) => {
			if (element.tasks.length > 0) {
				element.tasks.forEach((el) => {
					createTaskItem(element.DOMname, el.id, el.text, el.data, el.isImportant)
				})
			}
			watchingTasksItems()
		})
	} else if (DOMname === 'item-favorites') {
		user.forEach((element) => {
			if (element.tasks.length > 0) {
				element.tasks.forEach((el) => {
					if (el.isImportant) {
						createTaskItem(element.DOMname, el.id, el.text, el.data, el.isImportant)
					}
				})
			}
			watchingTasksItems()
		})
	}
}