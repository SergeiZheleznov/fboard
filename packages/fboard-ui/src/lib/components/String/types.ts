export type FretStatus = 'default' | 'active' | 'disabled';   
export type StringId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface IFret {
  idx: number;
  badge?: string;
  status?: FretStatus;
  onBadgeClick?: () => void;
  width?: number;
}

export interface IString {
  thikness: StringId,
  frets: IFret[]
}