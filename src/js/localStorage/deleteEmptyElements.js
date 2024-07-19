import { user as userChecker } from '../userInfo.js'

export function deleteEmptyElements() {
    let user = userChecker.reduce((acc, element) => {
        element.tasks = element.tasks.filter((a) => a)
        acc.push(element)
        return acc
    }, []);
    return user;
}