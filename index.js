function bruteForceTwoSum(array, sum) {
  let pairs = [];

  while (array.length != 0){
    let currNum = array.shift()

    for (let i=0; i < array.length; i++){
      if (array[i] + currNum === sum){
        pairs.push([currNum, array[i]])
      }
    }
  }

  return pairs
}