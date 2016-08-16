describe('getDiv', function() {
    var d = document.querySelector('.items-start');

    it('Should exist', function() {
        expect(d.nodeName).toBe('DIV');
    });
});
