import { userParameters } from '../userInfo.js'
import { deleteEmptyElements } from './deleteEmptyElements.js'

export function saveUserFromStorage() {
	let refactoredUser = deleteEmptyElements()
	localStorage.setItem('todo-user-js', JSON.stringify([refactoredUser, userParameters]))
}