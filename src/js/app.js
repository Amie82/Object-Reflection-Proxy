function compare(a, b) {
    if (a.key[0] < b.key[0]) { return -1; }
    return 0;
  }
  
  const sortingByProps = (object, arr) => {
    const newArr = [];
    const dirArr = [];
  
    for (const prop in object) {
      if (arr.includes(prop)) {
        newArr.push({ key: prop, value: object[prop] });
      } else {
        dirArr.push({ key: prop, value: object[prop] });
      }
    }
    const result = newArr.concat(dirArr.sort(compare));
  
    return result;
  };
  
  export default sortingByProps;