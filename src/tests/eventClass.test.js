import Event from '../eventClass.js';

describe('eventClass()', () => {
    test('set title changes title', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        event.setTitle('jest');
        expect(event.getTitle()).toBe('jest');
    });
    
    test('blank title returns false', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        expect(event.setTitle('')).toBe(false);
    });
    
    test('new event generates unique ID', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
        expect(event.getID()).toBe(Event.eventCount - 1);
    });
    
    test('event with no parent has -1 has parentList', () => {
        const event = new Event('title', 'description', '1/1/90', 'high', false);
    
        expect(event.getParent()).toBe(-1);
    });
});