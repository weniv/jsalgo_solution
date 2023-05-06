// https://www.notion.so/paullabworkspace/javascript-sort-compare-function-1b35e365e3db4c889464150ee15ec7d5

data = [1, 2, 10, 20, 30, 40, 11, 22]
data.sort()
data


data = [1, 2, 10, 20, 30, 40, 11, 22]
data.sort((a, b) => a - b)
data


data = [
    [6, 'a', 'hello'],
    [3, 'f', 'hello world'],
    [7, 'b', 'hello a'],
    [8, 'g', 'hello world hello'],
    [4, 'e', 'hello world hello world'],
    [2, 'c', 'hello aa'],
    [1, 'd', 'hello abc'],
]
data.sort((a, b) => a[2].length - b[2].length)
data


data = [
    [6, 'a', 'hello'],
    [3, 'f', 'hello world'],
    [7, 'b', 'hello a'],
    [8, 'g', 'hello world hello'],
    [4, 'e', 'hello world hello world'],
    [2, 'c', 'hello aa'],
    [1, 'd', 'hello abc'],
]
data.sort((a, b) => {
    if(a[1] > b[1]) return 1;
    if(a[1] < b[1]) return -1;
    if(a[1] === b[1]) return 0;
})
data