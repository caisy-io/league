export const rgbHex = (red: number, green: number, blue: number, alpha?: string | number): string => {
  const isPercent = typeof alpha === "string" && (red + (alpha || "")).toString().includes("%");

  if (alpha !== undefined && typeof alpha === "string") {
    alpha = Number.parseFloat(alpha);
  }

  if (
    typeof red !== "number" ||
    typeof green !== "number" ||
    typeof blue !== "number" ||
    red > 255 ||
    green > 255 ||
    blue > 255
  ) {
    throw new TypeError("Expected three numbers below 256");
  }

  if (typeof alpha === "number") {
    if (!isPercent && alpha >= 0 && alpha <= 1) {
      alpha = Math.round(255 * alpha);
    } else if (isPercent && alpha >= 0 && alpha <= 100) {
      alpha = Math.round((255 * alpha) / 100);
    } else {
      throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
    }

    alpha = (alpha | (1 << 8)).toString(16).slice(1); // eslint-disable-line no-mixed-operators
  } else {
    alpha = "";
  }

  return (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1) + alpha;
};
