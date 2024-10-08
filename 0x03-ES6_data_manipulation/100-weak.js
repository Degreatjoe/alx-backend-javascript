// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Function to track and limit queries
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  const queryCount = weakMap.get(endpoint) || 0;

  // If query count reaches 5 or more, throw an error
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Otherwise, increase the count by 1 and update the weakMap
  weakMap.set(endpoint, queryCount + 1);
}
