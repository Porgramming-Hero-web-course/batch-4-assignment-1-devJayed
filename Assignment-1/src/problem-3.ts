{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    // Convert to lowercase
    const sentencelc = sentence.toLowerCase();
    const wordlc = word.toLowerCase();

    // split the sentencelc into words
    const words = sentencelc.split(" ");
    // console.log(words);

    // count
    const occurrences: string[] = words.filter((w) => w === wordlc);
    // console.log(occurrences);

    const result: number = occurrences.length;
    // console.log(result);

    return result;
  }
  console.log(countWordOccurrences("I love typescript", "typescript"));

  //
}
