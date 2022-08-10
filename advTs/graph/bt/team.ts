const teamFormation = (
  arr: number[] = [12, 4, 5, 6, 7, 8, 10],
  minPlayer = 3,
  minLevel = 4,
  maxLevel = 10
) => {
  arr = arr.sort((a, b) => a - b);

  let _result: string[] = [];

  const dfs = (subResult: number[], start: number, _arr: number[], i = 0) => {
    if (start >= arr.length - 1) {
      return;
    }

    if (_arr[0] >= minLevel && _arr[0] <= maxLevel) {
      subResult.push(_arr[0]);
    }

    if (subResult.length >= minPlayer) {
      _result.push(subResult.join(""));
    }

    if (_arr.length <= 0) {
      if (subResult.length >= minPlayer) {
        _result.push(subResult.join(""));
      }
      dfs([], start + 1, [...arr.slice(start + 1)], 0);
    } else {
      dfs(subResult, start, _arr.slice(1), i + 1);
    }
  };

  dfs([], 0, arr, 0);

  return _result;
};

console.log(teamFormation());
