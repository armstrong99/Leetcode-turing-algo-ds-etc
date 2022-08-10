const _main = (nums = [1, 2, 3], k = 4) => {
  
  let result: Array<number[]> = [];
         
  const recursiveTree = (_a: number[]): void => {
          
    console.log(_a);

    if (_a.length === nums.length) {
      result.push(_a.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!_a.includes(nums[i])) {

        _a.push(nums[i]);

        recursiveTree(_a);

        _a.pop();
      }
    }
  };

  recursiveTree([]);

  return result;
};

console.log(_main().length);
