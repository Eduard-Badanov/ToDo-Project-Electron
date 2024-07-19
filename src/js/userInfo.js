import { watchingTasksItems } from './addTaskItems/watchingTasksItems.js'
import { checkSorting } from './listeners/sortingElements.js'
import { getUserFromStorage, getUserParametersFromStorage } from './localStorage/getUserFromStorage.js'
import { saveUserFromStorage } from './localStorage/saveUserToStorage.js'

export let user = getUserFromStorage()
export let userParameters = getUserParametersFromStorage()

user = new Proxy(user, {
    set: (target, prop, value) => {
        if (prop !== 'length') {
            target[prop] = value
            saveUserFromStorage()
        }
        return true
    },
    deleteProperty: (target, prop) => {
        delete target[prop]
        saveUserFromStorage()
        return true
    }
})

userParameters = new Proxy(userParameters, {
    set: (target, prop, value) => {
        if (prop !== 'length') {
            target[prop] = value
            checkSorting()
            watchingTasksItems()
            saveUserFromStorage()
        }
        return true
    }
})