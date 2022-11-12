import List from '../listClass.js';
import Event from '../eventClass.js';

test('list adds event', () => {
    const list = new List('jest');
    const event = new Event('title', 'description', '1/1/90', 'high', false);

    list.addEvent(event);

    expect(list.getEvents()).toStrictEqual([event]);
});