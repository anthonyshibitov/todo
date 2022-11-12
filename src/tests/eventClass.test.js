import Event from '../eventClass.js';

test('set title changes title', () => {
    const event = new Event('title', 'description', '1/1/90', 'high', false);
    event.setTitle('jest');
    expect(event.getTitle()).toBe('jest');
});

test('blank title returns false', () => {
    const event = new Event('title', 'description', '1/1/90', 'high', false);
    expect(event.setTitle('')).toBe(false);
})
