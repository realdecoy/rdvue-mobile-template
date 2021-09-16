import { Lookup } from './lookup';

interface MultiDrawerAnimation {
    openDuration: number;
    closeDuration: number;
}

interface MultiDrawerDirectionOptions {
    width: string;
    height: null | string;
    backgroundColor: string;
    canSwipeOpen: boolean;
    swipeOpenTriggerWidth: number;
    swipeOpenTriggerHeight: null;
    swipeOpenTriggerMinDrag: number;
    swipeCloseTriggerMinDrag: number;
    swipeOpenTriggerProperties: Lookup<unknown>;
    animation: MultiDrawerAnimation;
    translationOffsetMultiplier: number;
    axis: string;
}

export interface MultiDrawerOptions {
    debug: boolean;
    backdropColor: string;
    right: MultiDrawerDirectionOptions;
    left: MultiDrawerDirectionOptions;
    top: MultiDrawerDirectionOptions;
    bottom: MultiDrawerDirectionOptions;
}
