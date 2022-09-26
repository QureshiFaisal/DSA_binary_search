function binary(arr, num) {
  if (!arr.length) return null;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) return middle;
    else if (arr[middle] > num) end = middle - 1;
    else start = middle + 1;
  }
  return false;
}

console.log(binary([1, 2, 3, 4, 5, 6], 5));
