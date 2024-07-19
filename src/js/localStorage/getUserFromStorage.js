import { scenarioIcons } from '../pathsToIcons.js'


export function getUserFromStorage() {
	let userData = JSON.parse(localStorage.getItem('todo-user-js'))

	if (userData === null) {
		return [
			{
				icon: scenarioIcons.user,
				text: 'Все задачи',
				DOMname: 'item-all',
				isCreated: false,
				tasks: []
			},
			{
				icon: scenarioIcons.sun,
				text: 'Свободное время',
				DOMname: 'item-free-time',
				isCreated: false,
				tasks: []
			},
			{
				icon: scenarioIcons.briefcase,
				text: 'Рабочие дела',
				DOMname: 'item-work',
				isCreated: false,
				tasks: []
			},
			{
				icon: scenarioIcons.home,
				text: 'Домашние дела',
				DOMname: 'item-home',
				isCreated: false,
				tasks: []
			},
			{
				icon: scenarioIcons.bookmark,
				text: 'Избранное',
				DOMname: 'item-favorites',
				isCreated: false,
				tasks: []
			}
		]
	} else {
		return userData[0]
	}
}

export function getUserParametersFromStorage() {
	let userData = JSON.parse(localStorage.getItem('todo-user-js'))
	if (userData === null) {
		return {
			sorting: false
		}
	} else {
		return userData[1]
	}
}