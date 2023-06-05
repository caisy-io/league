import { StateSnapshot } from "react-virtuoso";

export function encodeStateSnapshotURLSafe(state: StateSnapshot) {
  const ranges = state.ranges.map((range) => `${range.startIndex}_${range.endIndex}_${range.size}`).join("-");
  return `${ranges}-${state.scrollTop}`;
}

export function decodeStateSnapshotURLSafe(encodedState: string): StateSnapshot {
  const parts = encodedState.split("-");
  const scrollTop = Number(parts.pop());
  const ranges = parts.map((part) => {
    const [startIndex, endIndex, size] = part.split("_").map(Number);
    return { startIndex, endIndex, size };
  });
  return { ranges, scrollTop };
}
