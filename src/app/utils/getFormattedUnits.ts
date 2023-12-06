export const getFormattedUnits = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const units = [
    { label: "day", value: Math.floor(seconds / 86400) },
    { label: "hr", value: Math.floor((seconds % 86400) / 3600) },
    { label: "min", value: Math.floor((seconds % 3600) / 60) },
  ];

  const formattedUnits = units
    .filter((unit) => unit.value !== 0)
    .map((unit) => {
      return `${unit.value} ${unit.label}`;
    })
    .join(" ");

  if (seconds < 60 && seconds > 0) {
    return formattedUnits + ` ${seconds} second${seconds !== 1 ? "s" : ""}`;
  }

  return formattedUnits.length ? 0 : formattedUnits;
};
