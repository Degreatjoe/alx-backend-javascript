export default function taskBlock(trueOrFalse) {
  let task = false;// Use let for block scope
  let task2 = true;

  if (trueOrFalse) {
    let task = true;// Block-scoped declaration
    let task2 = false;// Block-scoped declaration
  }

  return [task, task2];// Returns the values outside the if block
}
