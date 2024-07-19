import { addItems } from './addScenarioItems/addItems.js'
import { renderDefaultTasksOfActiveScenarioItem } from './addTaskItems/renderDefaultTasksOfActiveScenarioItem.js'
import('./listeners/scenariosAdd.js')
import('./listeners/scenarioItems.js')
import('./listeners/sortingElements.js')
import('./listeners/showCompletedTasks.js')
import('./listeners/taskItems.js')
import('./listeners/deleteElements.js')
addItems()

window.addEventListener('load', () => {
	renderDefaultTasksOfActiveScenarioItem()
})

document.querySelector('.todo__buttons-button-quit').addEventListener('click', () => {
	window.close()
});