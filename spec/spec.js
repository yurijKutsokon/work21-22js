//var app = require('../js/jsmicrotmpl.js');
//describe("jsmicrotmpl", function() {
//    it("it should load module", function() {
//        //prepare
//        var result;
//
//
//        //act
//        jsmicrotmpl.
//
//        //assert
//
//        expect(result).toBe(true);
//    });
//});
var pow = require('../js/script.js');
describe("pow", function() {
    it("it should load module", function() {
        //prepare
        var result;


        //act
        result = pow.exponent(2, 10);


        //assert

        expect(result).toBe(1024);
    });
});

