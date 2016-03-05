/**
 * assert condition is satisfied
 */
export default function (condition, error) {
  if (!condition) throw new Error(error);
}
