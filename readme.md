### Javascript implementation of count sort

Sort an array of integers using count sort

Count sort is the fastest sorting algorithm when the following criteria are met:
- You only have integers
- You know the minimum and the maximum value contained in the array

**Note:** Not only is it better to sort an integer array using countSort, it will
actually ***not work*** if you try to sort anything else (like floats), so if things
don't work, that's where you should be looking

### Usage:

```javascript
var countSort = require('countsort');

var myArray = [5,3,2,0,6,4,3,6,10,0,3,2];

countSort(myArray, 0, 10); // should result in [0,0,2,2,3,3,3,4,5,6,6,10]
```

### Todo:

- It would be nice if you could pass in a callback for sorting an array of objects containing integers
- It would be nice to support sparse arrays as well

### License

MIT
