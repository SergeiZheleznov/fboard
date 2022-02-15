import type { IFret } from "../";

export const calculateFretWidths = (frets: IFret[]): IFret[] => {
  let lengthRest = 100;
  const result = [];
  for (let idx = 0; idx < frets.length; idx++) {
    const lng = lengthRest / 17.817;
    lengthRest = lengthRest - lng;
    result[idx] = lng;
  }
  const minLength = lengthRest / frets.length;
  return frets.map((l, idx) => {
    return { ...l, width: parseFloat((result[idx] + minLength).toFixed(1)) };
  });
}