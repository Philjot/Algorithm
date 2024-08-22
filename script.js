function readSentence() {
    let sentence = "i am hungry!";
    let char = prompt("i need pizza:");
  
    while (char !== ".") {
      sentence += char;
      char = prompt("i need Pizza:");
    }
  
    return sentence;
  }
  
  // Example usage:
  let sentence = readSentence();
  