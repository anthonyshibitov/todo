import Event from './eventClass.js';
import List from './listClass.js';
import Storage from './storageHandler.js';

export default class DOMHandler {

    lists = [];
    
    constructor() {
        const storage = new Storage();
        this.lists = storage.getList();
        
        this.attachListeners();
        this.redrawLists();
        this.drawListEvents(this.lists[0]);
    }

    attachListeners() {
        const homeLists = window.document.getElementById('home-lists');
        const homeListsLabel = homeLists.firstElementChild;
        homeListsLabel.addEventListener('click', () => {
            homeLists.classList.toggle('active');
        });

        const userLists = window.document.getElementById('user-lists');
        const userListsLabel = userLists.firstElementChild;
        userListsLabel.addEventListener('click', () => {
            userLists.classList.toggle('active');
        })

        const formAddList = window.document.getElementById('form-add-list');
        formAddList.addEventListener('click', (e) => {
            e.preventDefault();
            const listTitle = window.document.getElementById('list-name').value;

            const form = window.document.getElementById('new-list-form');
            const valid = form.checkValidity();
            if(valid){
                const newList = new List(listTitle);
                this.lists.push(newList);
                this.redrawLists();
                this.closeModal(formAddList.closest('.modal'), window.document.getElementById('overlay'));
                this.save();
            }
        });

        const formAddEvent = window.document.getElementById('form-add-event');
        formAddEvent.addEventListener('click', (e) => {
            e.preventDefault();
            const eventTitleEl = window.document.getElementById('event-title');
            const eventTitle = eventTitleEl.value;
            const eventDescEl = window.document.getElementById('event-desc');
            const eventDesc = eventDescEl.value;
            const eventDueDateEl = window.document.getElementById('due-date');
            const eventDueDate = eventDueDateEl.value;
            const eventPriorityEl = window.document.getElementById('event-priority');
            const eventPriority = eventPriorityEl.value;
            const eventParentListEl = window.document.getElementById('event-list-parent');
            const eventParentList = parseInt(eventParentListEl.value);

            eventTitleEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            eventDescEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            eventDueDateEl.addEventListener('click', () => {
                if(eventTitleEl.classList.contains('invalid')){
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDescEl.classList.contains('invalid')){
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDateEl.classList.contains('invalid')){
                    eventDueDateEl.classList.remove('invalid');
                }
            });

            // Close modal now

            const form = window.document.getElementById('new-event-form');
            const valid = form.checkValidity();
            if(valid){
                this.closeModal(formAddEvent.closest('.modal'), window.document.getElementById('overlay'));

                const newEvent = new Event(eventTitle, eventDesc, eventDueDate, eventPriority, false);
                
                let listToAddTo = this.lists.find(list => {
                    return list.getID() == eventParentList;
                });

                listToAddTo.addEvent(newEvent);
                this.save();
                // Redraw list to parent of new event
                // May want to update to redraw list which was
                // already being viewed. List ID built into
                // table dataset for this functionality
                this.drawListEvents(this.lists.find(list => list.getID() == eventParentList));
                listToAddTo.printMe();

                eventTitleEl.classList.remove('invalid');
                eventDescEl.classList.remove('invalid');
                eventDueDateEl.classList.remove('invalid');
            } else {
                if(eventTitle == ''){
                    eventTitleEl.classList.add('invalid');
                } else {
                    eventTitleEl.classList.remove('invalid');
                }
                if(eventDesc == ''){
                    eventDescEl.classList.add('invalid');
                } else {
                    eventDescEl.classList.remove('invalid');
                }
                if(eventDueDate == ''){
                    eventDueDateEl.classList.add('invalid');
                } else {
                    eventDueDateEl.classList.remove('invalid');
                }
            }

            //redraw added to list
        });

        // const allEvents = document.getElementById('all-events');
        // allEvents.addEventListener('click', (e) => {
        //     let combinedLists = new List('All Events');
        //     this.lists.forEach(list => {
        //         const currentEvents = list.getEvents();
        //         currentEvents.forEach(event => {
        //             const eventCopy = event;
        //             eventCopy.setParent(-1);
        //             combinedLists.addEvent(event);
        //         });
        //     });
        //     this.drawListEvents(combinedLists);
        // });

        const openNewEventButtons = window.document.querySelectorAll('[data-modal-target]');
        const closeNewEventButtons = window.document.querySelectorAll('[data-close-button]');
        const overlay = window.document.getElementById('overlay');

        overlay.addEventListener('click', () => {
            const modals = window.document.querySelectorAll('.modal.active');
            modals.forEach(modal => {
                this.closeModal(modal, overlay);
            });
        });

        openNewEventButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = window.document.querySelector(button.dataset.modalTarget);
                this.openModal(modal, overlay);
            });
        });

        closeNewEventButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                this.closeModal(modal, overlay);
            })
        });
    }

    redrawLists() {
        const listListElement = window.document.getElementById('list-container');
        const listParentElement = window.document.getElementById('event-list-parent');

        listListElement.innerHTML = '';

        this.lists.forEach(list => {
            let liElement = document.createElement('li');
            liElement.innerHTML = "&#10095; " + list.getTitle();
            liElement.classList.add('clickable-list');
            liElement.addEventListener('click', () => {
                const table = window.document.getElementById('data-displayer-wrapper');
                table.dataset.list = list.getID();
                this.drawListEvents(list);
                const listItems = document.querySelectorAll('.clickable-list');
                listItems.forEach(list => {
                    list.style.backgroundColor = 'inherit';
                });
                liElement.style.backgroundColor = '#f2f1f4';
            });
            listListElement.appendChild(liElement);

            let optionElement = document.createElement('option');
            optionElement.value = list.getID();
            optionElement.innerText = list.getTitle();
            listParentElement.appendChild(optionElement);
        });

        const addListButton = document.createElement('li');
        addListButton.innerHTML = "<i>add new list</i>";
        addListButton.id = 'new-list-btn';
        addListButton.dataset.modalTarget = '#new-list-modal';
        addListButton.name = 'new-list-btn';
        
        const overlay = window.document.getElementById('overlay');
        addListButton.addEventListener('click', () => {
            const modal = window.document.querySelector(addListButton.dataset.modalTarget);
            this.openModal(modal, overlay);
        });
        listListElement.appendChild(addListButton);
    }

    drawListEvents(list) {
        const listHeader = document.getElementById('list-header');
        listHeader.innerHTML = '';
        const listNameEl = document.createElement('div');
        listNameEl.innerHTML = list.getTitle();
        const listDel = document.createElement('div');
        listDel.innerHTML ='&#10008;';
        listDel.addEventListener('click', (e) => {
            this.lists = this.lists.filter(currentList => currentList !== list);
            this.redrawLists();
            this.drawListEvents(this.lists[0]);
        });

        listHeader.appendChild(listNameEl);
        listHeader.appendChild(listDel);

        const listTable = window.document.getElementById('data-displayer-wrapper');
        listTable.innerHTML = '';
        const events = list.getEvents();

        const eventHeader = document.createElement('div');
        eventHeader.classList.add('data-header');

        const eventTitleTH = document.createElement('div');
        eventTitleTH.innerHTML = 'Title';
        const eventDueDateTH = document.createElement('div');
        eventDueDateTH.innerHTML = 'Due Date';
        const eventPriorityTH = document.createElement('div');
        eventPriorityTH.innerHTML = 'Priority';
        const eventCompletedTH = document.createElement('div');
        eventCompletedTH.innerHTML = 'Completed';
        const eventActionsTH = document.createElement('div');
        eventActionsTH.innerHTML = 'Actions';
        
        eventHeader.appendChild(eventTitleTH);
        eventHeader.appendChild(eventDueDateTH);
        eventHeader.appendChild(eventPriorityTH);
        eventHeader.appendChild(eventCompletedTH);
        eventHeader.appendChild(eventActionsTH);

        listTable.appendChild(eventHeader);

        events.forEach(event => {
            const tableRow = window.document.createElement('div');
            tableRow.classList.add('data-row');
            tableRow.dataset.eventId = event.getID();

            const eventTitleTD = window.document.createElement('div');
            eventTitleTD.innerHTML = event.getTitle();
            const eventDueDateTD = window.document.createElement('div');
            eventDueDateTD.innerHTML = event.getDueDate();
            const eventPriorityTD = window.document.createElement('div');
            eventPriorityTD.innerHTML = event.getPriority();
            const eventCompletedTD = window.document.createElement('div');
            eventCompletedTD.innerHTML = event.getCompletedStatus();
            if(event.getCompletedStatus()){
                tableRow.classList.add('completed');
            }

            const actionsTD = window.document.createElement('div');
            actionsTD.classList.add('actions');
            
            const completeActionTD = document.createElement('div');
            completeActionTD.innerHTML = '&#10004;';
            completeActionTD.addEventListener('click', (e) => {
                const currentStatus = event.getCompletedStatus();
                event.setCompletedStatus(!currentStatus);
                tableRow.classList.toggle('completed');
                eventCompletedTD.innerHTML = event.getCompletedStatus();
                this.save();
            });

            const deleteActionTD = document.createElement('div');
            deleteActionTD.innerHTML = '&#10008;';
            deleteActionTD.addEventListener('click', (e) => {
                const result = list.removeElementByID(event.getID());
                this.drawListEvents(list);
                this.save();
            });

            actionsTD.appendChild(completeActionTD);
            actionsTD.appendChild(deleteActionTD);
            
            tableRow.appendChild(eventTitleTD);
            tableRow.appendChild(eventDueDateTD);
            tableRow.appendChild(eventPriorityTD);
            tableRow.appendChild(eventCompletedTD);
            tableRow.appendChild(actionsTD);

            listTable.appendChild(tableRow);
        });
    }

    save(){
        const storage = new Storage();
        storage.writeList(this.lists);
    }

    openModal(modal, overlay) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    closeModal(modal, overlay) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    updateParentList(lists) {

    }
}