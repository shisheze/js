function vortex(n, m) {
  const nums = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let Z = 0,
    Y = 0,
    spani = 1,
    spanj = 0;
  let numss = 1;
  function wheel() {
    return !nums[Y] || nums[Y][Z] !== 0;
  }
  while (1) {
    nums[Y][Z] = numss++;
    Z += spani;
    Y += spanj;
    if (wheel()) {
      Z -= spani;
      Y -= spanj;
      if (spanj === 0) {
        spanj = spani;
        spani = 0;
      } else {
        spani = -spanj;
        spanj = 0;
      }
      Z += spani;
      Y += spanj;
    }
    if (wheel()) {
      break;
    }
  }
  return nums;
}
console.log(vortex(5, 6));
