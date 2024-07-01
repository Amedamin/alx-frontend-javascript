export default function updateUniqueItems(I_MAP) {
  if (!(I_MAP instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    I_MAP.forEach((V, key) => {
      if (V === 1) {
        I_MAP.set(key, 100);
      }
    });
  }
}
