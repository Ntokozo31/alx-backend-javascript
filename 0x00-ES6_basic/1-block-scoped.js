export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // do nothing task and task2 remain unchanged
  }

  return [task, task2];
}
