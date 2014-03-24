﻿define(["knockout", "../Services/ColorCalculator"], function (ko, ColorCalculator) {
    return function () {
        var self = this;
        var colorCalculator = new ColorCalculator();

        self.red = ko.observable();
        self.green = ko.observable();
        self.blue = ko.observable();
        self.hex = ko.observable();

        self.toHex = function () {
            var hex = colorCalculator.toHex(
                parseInt(self.red()),
                parseInt(self.green()),
                parseInt(self.blue()));
            self.hex(hex);
        };
    };
});