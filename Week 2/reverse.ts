function reverseWords(str: string): string {
  const words = str.split(" ");

  const reversedWords = words.map((word: string) =>
    word.split("").reverse().join("")
  );

  const result = reversedWords.join(" ");

  return result;
}

const inputString = "Geeks for Geeks";
const outputString = reverseWords(inputString);

console.log(outputString);
