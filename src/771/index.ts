function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;

  const jewelsSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewelsSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) {
      count++;
    }
  }

  return count;
}
