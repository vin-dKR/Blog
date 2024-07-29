import { atom } from 'recoil';

export const titleAtom = atom<string>({
  key: 'titleAtom',
  default: '',
});

export const descriptionAtom = atom<string>({
  key: 'descriptionAtom',
  default: '',
});

export const authorAtom = atom<string>({
  key: 'authorAtom',
  default: '',
});

export const userAtom = atom<string>({
  key: 'userAtom',
  default: '',
});