//If relative IDs are passed inside 'define' call, they are treated as relative to defined module
//If relative IDs are passed inside callback function, they are treated as relative to config location/baseUrl
define(["squire"], function (Squire) {

    describe("ColorBoxViewModel tests", function () {
        var viewModel = undefined;
        var dependencies = undefined;

        //Jasmine 2.0 has 'done' callback which simplifies asynchronous test, if using jasmine < 2.0 use Jasmine.Async
        //https://github.com/derickbailey/jasmine.async
        beforeEach(function (done) {
            dependencies = {
                calculator: {
                    toHex: function () { }
                }
            };
            //injector has to be initialized before each test, otherwise it would cache mocks
            var injector = new Squire();
            //relative IDs inside callback, relative to baseUrl
            injector.mock("FrontEndTools.WebUI/Services/ColorCalculator", Squire.Helpers.returns(dependencies.calculator));
            injector.require(["FrontEndTools.WebUI/ViewModels/ColorBoxViewModel"], function (ColorBoxViewModel) {
                viewModel = new ColorBoxViewModel();
                done();
            })
        });

        it("toHex method should call colorCalculator.toHex method with int parameters", function () {
            //ARRANGE
            viewModel.red("1");
            viewModel.green("2");
            viewModel.blue("3");
            spyOn(dependencies.calculator, "toHex");

            //ACT
            viewModel.toHex();

            //ASSERT
            expect(dependencies.calculator.toHex).toHaveBeenCalledWith(1, 2, 3);
        });
    
        it("toHex method should assign hex property", function () {
            //ARRANGE
            viewModel.red("1");
            viewModel.green("2");
            viewModel.blue("3");
            spyOn(dependencies.calculator, "toHex").and.returnValue("#010203");

            //ACT
            viewModel.toHex();

            //ASSERT
            expect(viewModel.hex()).toBe("#010203");
        });
    });
});