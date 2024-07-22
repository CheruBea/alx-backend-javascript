// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // Block scoped
    let task2 = false;  // Block scoped
  }

  return [task, task2];
}

