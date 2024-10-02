export async function loadTest(opts) {
  const promises = [];
  for (let s = 0; s < opts.seconds; s++) {
    for (let r = 0; r < opts.rps; r++) {
      const p = opts.fn();
      promises.push(p);
    }
    await new Promise((r) => setTimeout(r, 1_000));
  }
  return Promise.all(promises);
}
