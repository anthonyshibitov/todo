/** @jest-environment jsdom */
import StorageHandler from '../storageHandler.js'

test('storageHandler reads and writes', () => {
    const testData = { name: 'name', value: 'value' };
    const storage = new StorageHandler();

    storage.writeList(testData);

    expect(storage.getList()).toStrictEqual(testData);
});