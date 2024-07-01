export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const B = new ArrayBuffer(length);
  const V = new DataView(B);
  V.setInt8(position, value);

  return V;
}
