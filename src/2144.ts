function mostWordsFound(sentences: string[]): number {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    const wordsCount = sentences[i].split(' ').length;
    if (wordsCount > max) {
      max = wordsCount;
    }
  }

  return max;
}
