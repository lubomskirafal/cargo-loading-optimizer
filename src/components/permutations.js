const permutations = (arr)=> {
    const results = [];

    for(let i = 0; i< arr.length; i++) {
      const result = permutations(arr.slice(0, i).concat(arr.slice(i+1)));

      if(!result.length) {
        results.push([arr[i]]);
      }else {
        for( let j = 0; j<result.length; j++) {
          results.push([arr[i]].concat(result[j]));
        };
      };
    };

    return results;
  };

export default permutations;