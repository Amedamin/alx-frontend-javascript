const weakMap = new WeakMap();

function queryAPI(endPoint) {
  const N = weakMap.get(endPoint) ? weakMap.get(endPoint) + 1 : 1;

  if (N >= 5) { 
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endPoint, N);
}

export { queryAPI, weakMap };
