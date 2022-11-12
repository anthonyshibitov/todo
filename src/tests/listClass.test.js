import List from '../listClass.js';
import Event from '../eventClass.js';

test('list adds event', () => {
    const list = new List('jest');
    const event = new Event('title', 'description', '1/1/90', 'high', false);

    list.addEvent(event);

    expect(list.getEvents()).toStrictEqual([event]);
});

test('adding event updates parentList ID', () => {
    List.listCount = 0;
    const event = new Event('title', 'description', '1/1/90', 'high', false);
    const event2 = new Event('title', 'description', '1/1/90', 'high', false);

    const list = new List('jest');
    const list2 = new List('jest2');
    list.addEvent(event);
    list2.addEvent(event2);

    // Test above creates a list, which causes this to increment
    // Hence why its not 0, 1
    expect(event.getParent()).toBe(list.getID());
    expect(event2.getParent()).toBe(list2.getID());
});