import List from '../listClass.js';
import Event from '../eventClass.js';

describe('listClass()', () => {
    test('list adds event', () => {
        const list = new List('jest');
        const event = new Event('title', 'description', '1/1/90', 'high', false);
    
        list.addEvent(event);
    
        expect(list.getEvents()).toStrictEqual([event]);
    });
    
    test('adding event updates parentList ID', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        const event2 = new Event('title', 'description', '1/1/90', 'high', false);
    
        const list = new List('jest');
        const list2 = new List('jest2');
        list.addEvent(event);
        list2.addEvent(event2);
    
        expect(event.getParent()).toBe(list.getID());
        expect(event2.getParent()).toBe(list2.getID());
    });
    
    test('cannot add event that is already on a list', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        const event2 = new Event('title', 'description', '1/1/90', 'high', false);
    
        const list = new List('jest');
        const list2 = new List('jest2');
        list.addEvent(event);
        const result = list2.addEvent(event);
    
        expect(result).toBe(1);
    })
    
    test('findEventByID finds event', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        const event2 = new Event('title', 'description', '1/1/90', 'high', false);
    
        const list = new List('jest');
        list.addEvent(event);
        list.addEvent(event2);
    
        expect(list.findEventByID(event.getID())).toBe(0);
        expect(list.findEventByID(event2.getID())).toBe(1);
    });
    
    test('getEventByID returns correct object', () => {
        const event = new Event('title1', 'description', '1/1/90', 'high', false);
        const event2 = new Event('title2', 'description2', '1/1/92', 'low', false);
    
        const list = new List('jest');
        list.addEvent(event);
        list.addEvent(event2);
    
        expect(list.getEventByID(event.getID())).toStrictEqual(event);
        expect(list.getEventByID(event2.getID())).toStrictEqual(event2);
    });
    
    test('getEventByID returns 1 if not fonud', () => {
        const list = new List('jest');
    
        expect(list.getEventByID(0)).toBe(1);
    });
    
    test('removeElementByID removes element from events array', () => {
        const event = new Event('title1', 'description', '1/1/90', 'high', false);
        const event2 = new Event('title2', 'description2', '1/1/92', 'low', false);
    
        const list = new List('jest');
        list.addEvent(event);
        list.addEvent(event2);
    
        list.removeElementByID(event.getID());
        expect(list.getEvents()).toStrictEqual([event2]);
    
        list.removeElementByID(event2.getID());
        expect(list.getEvents()).toStrictEqual([]);
    
        // Removal with no events in list
        const result = list.removeElementByID(1);
        expect(result).toBe(1);
    });
});