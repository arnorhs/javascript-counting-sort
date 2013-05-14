var util = require('util');
var assert = require('assert');
var countingSort = require('./');

// create an array
var min = 0, max = 100, unsorted = [];
for (var i = 0; i < 20; i++) {
    unsorted.push((Math.random() * max) << 0);
}

// poor man's Array#clone
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
    describe('an array', function() {
        var results = unsorted.slice(0);
        countingSort(results, min, max);
        it('should be sorted correctly', function() {
            assert(
                arraysEqual(results, sorted),
                "Expected: " + util.inspect(sorted) + " but got " + util.inspect(results)
            );
        });
    });
    describe('an empty array', function() {
        var empty = [];
        countingSort(empty, min, max);
        it('should be sorted correctly', function() {
            assert(
                arraysEqual(empty, []),
                "Expected: " + util.inspect([]) + " but got " + util.inspect(empty)
            );
        });
    });
});


