"use strict";
{
    //
    function sumArr(numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    const result = sumArr([1, 2, 3, 4, 5]);
    console.log(result);
    //
}
