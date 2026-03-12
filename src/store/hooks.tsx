import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

import type { AppDispatch, RootState } from './Store.tsx';

export const useCartDispatch = () => useDispatch<AppDispatch>();
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
