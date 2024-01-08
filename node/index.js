const { performance } = require('perf_hooks');
const {bubbleSort} = require('./sort');
const Module = require('../es/sortLib');

const maxNum = 80000;

const sortArray = () => {
    const nums = Array.from(Array(maxNum).keys()).reverse();
    const start = performance.now();
    const res = bubbleSort([...nums]);
    console.log('End in, (ms):', performance.now() - start);
};

const runWasmBubbleSort = () => {
    //var arr = [1, 3, 2, 6, 8, 15];
    var arr = Array.from(Array(maxNum).keys()).reverse();

    const typedArray = Int32Array.from(arr);
    const buffer = Module._malloc(typedArray.length * typedArray.BYTES_PER_ELEMENT);
    Module.HEAP32.set(typedArray, buffer >> 2);

    const start = performance.now();
    Module._bubbleSort(buffer, arr.length);
    console.log('WASM sort in, (ms):' + (performance.now() - start));

    let mem_view = Module.HEAP32.subarray(buffer >> 2, (buffer >> 2) + arr.length);
    // console.log('ARR:', arr, Array.from(mem_view));

    Module._free(buffer);
};

sortArray();
setTimeout(() => runWasmBubbleSort(), 1000);
