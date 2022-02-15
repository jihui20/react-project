let nums = [5, 10, 14, 13, 16, 12];

// 버블 정렬 (Bubble Sort)
function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i++) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) {
      return arr;
    }
  }

  return arr;
}

// console.log(bubbleSort(nums));

// 선택 정렬 (Selection Sort)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}
// console.log(selectionSort(nums));

// 삽입 정렬 (Insertion Sort)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}
// console.log(insertionSort(nums));
