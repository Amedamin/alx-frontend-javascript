export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const Result = mathFunction();
    queue.push(Result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
