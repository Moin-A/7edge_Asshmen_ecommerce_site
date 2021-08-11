export default function Match(s = "", state) {
  if (s == "") {
    return [];
  }
  const p = Array.from(s).reduce(
    (a, v, i) => `${a}[^${s.substr(i)}]*?${v}`,
    ""
  );

  const re = RegExp(p);
  debugger;
  return Object.values(state)
    .map((x) => x.name.toUpperCase())
    .filter((v) => v.match(re));
}
