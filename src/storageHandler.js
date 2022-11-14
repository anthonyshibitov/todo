// storageHandler.js
// Store lists & events
// Store JSON
// with events as children of list as an array
//
// default list holds all uncategorized events
// just be JSON stringified
//
// stored in 'todoData'

export default class LocalStorageHandler {

    writeList(lists){
        window.localStorage.setItem('todoData', JSON.stringify(lists))
    }

    getList(){
        return JSON.parse(window.localStorage.getItem('todoData'));
    }

}