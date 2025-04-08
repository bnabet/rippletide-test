export const valueFormatter = Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});
