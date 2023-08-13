import { reduxStore } from '@/store/redux/store';
import type { Action, ThunkAction } from '@reduxjs/toolkit';

type ReduxStore = typeof reduxStore;
type ReduxState = ReturnType<typeof reduxStore.getState>;
type ReduxDispatch = typeof reduxStore.dispatch;
type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>;

export type { ReduxStore, ReduxState, ReduxDispatch, ReduxThunkAction };
