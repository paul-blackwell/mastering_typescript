const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
  return color.toUpperCase();
});

/**
 * We don't need to do this as TS will infer that the color
 * parameter is a string because it nows how MAP works
 * and is inferred
 */
// colors.map((color: string) => {
//   return color.toUpperCase();
// });
