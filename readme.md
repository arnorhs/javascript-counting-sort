### Javascript implementation of Counting sort

Sort an array of integers using [Counting sort](http://en.wikipedia.org/wiki/Counting_sort)

Counting sort is the fastest sorting algorithm when the following criteria are met:
- You only have integers
- You know the minimum and the maximum value contained in the array

**Note:** Not only is it better to sort an integer array using Counting sort, it will
actually ***not work*** if you try to sort anything else (like floats), so if things
don't work, that's where you should be looking

### Install using npm

    npm install contingsort

### Usage:

```javascript
var countingSort = require('countingsort');

var myArray = [5,3,2,0,6,4,3,6,10,0,3,2];

countingSort(myArray, 0, 10); // should sort the array to [0,0,2,2,3,3,3,4,5,6,6,10]
```

**Note:** Like the Array#sort() method in Javascript, it will not make a new array, but modify the one passed in.

### Comparison to javascript Array#sort()

![Counting sort on jsperf.com](http://f.cl.ly/items/1l3E2U1V3w3W2z0D0m2T/Screen%20Shot%202013-05-14%20at%2012.42.30%20AM.png)

http://jsperf.com/countsort

### License

MIT
