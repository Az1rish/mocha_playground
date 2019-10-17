function sort(list) {
    for(let i = 1; i < list.length; i++){
      let j = i;
      while(j > 0 && list[j - 1] > list[j]){
        let temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
        j--;
      }
    }
    return list;
  }

  module.exports = sort;