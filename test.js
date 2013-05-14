var util = require('util');
var assert = require('assert');
var countSort = require('./');

// create an array
var min = 0, max = 100, unsorted = [];
for (var i = 0; i < 20; i++) {
    unsorted.push((Math.random() * max) << 0);
}

var sorted = unsorted.slice(0);
sorted.sort(function(a,b) { return a - b; });

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

describe('sorting', function() {
    var results;
    beforeEach(function() {
        results = unsorted.slice(0);
    });
    describe('an array', function() {
        it('should be sorted correctly', function() {
            countSort(results, min, max);
            assert(
                arraysEqual(results, sorted),
                "Expected: " + util.inspect(sorted) + " but got " + util.inspect(results)
            );
        });
    });
});


