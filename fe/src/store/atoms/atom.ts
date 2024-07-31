import { atom } from 'recoil';

export const titleAtom = atom<string>({
  key: 'titleAtom',
  default: '',
});

export const descriptionAtom = atom<string>({
  key: 'descriptionAtom',
  default: '',
});

export const loadingState = atom({
  key: 'loadingState',
  default: false,
});