/** @jest-environment jsdom */
import StorageHandler from '../storageHandler.js'
import Event from '../eventClass.js';
import List from '../listClass.js';

describe('storageHandler()', () => {
    test('storageHandler reads, rebuilds, writes', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        const event2 = new Event('title2', 'description2', '1/1/91', 'low', false);
        const event3 = new Event('title3', 'description3', '1/1/92', 'low', true);
    
        const list = new List('jest');
        const list2 = new List('jest2');
        list.addEvent(event);
        list2.addEvent(event2);
        list2.addEvent(event3);
    
        const lists = [];
        lists.push(list);
        lists.push(list2);
    
        const storage = new StorageHandler();
        storage.writeList(lists);
        const result = storage.getList();
    
        // Does a deep equality test to make sure these are exactly identical!
        expect(result).toStrictEqual(lists);
    });
});
