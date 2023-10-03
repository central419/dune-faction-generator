import * as T from './enums';

export interface Location {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export type Scale = number;

export type TextField = [string, number];

export interface DecalField {
  id: keyof typeof T.Placeable;
  offset?: [number, number];
  scale?: number;
  outline?: boolean;
  fade?: boolean;
}

export interface FrontProps {
  id?: string;

  // alliance
  side?: {
    color: string;
    logo: keyof typeof T.Logo;
  };

  // leader
  leader?: {
    color: string;
    strength: string | number;
    logo: keyof typeof T.Logo;
    image: string;
  };

  // content
  title: TextField;
  sub: TextField;
  content: TextField;

  base: keyof typeof T.Front;
  head: keyof typeof T.Head;
  icon: keyof typeof T.Icon;
  release: keyof typeof T.Release;

  decals: DecalField[];

  recolor?: string[];
}
