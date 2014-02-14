modules.define(
    'spec',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

describe('i-bem__dom_init', function() {
    it('block should exist on init', function(done) {
        var name = 'b' + Math.random();

        modules.define({ block : name }, function(provide) {
            provide({});
        });

        modules.require(['i-bem__dom_init'], function() {
            BEMDOM.blocks.should.have.property(name);
            done();
        });
    });
});

provide();

});
