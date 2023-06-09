function balancedStringSplit(s: string): number {
  let rCount = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    rCount += char == 'R' ? 1 : -1;

    if (rCount == 0) {
      result++;
    }
  }

  return result;
}
