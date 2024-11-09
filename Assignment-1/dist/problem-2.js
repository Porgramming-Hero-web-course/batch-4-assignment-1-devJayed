"use strict";
{
    //
    function removeDuplicates(numbers) {
        return numbers.filter((num, index) => numbers.indexOf(num) === index);
    }
    const result = removeDuplicates([3, 4, 4, 5, 6, 6, 7]);
    console.log(result);
    //
}
