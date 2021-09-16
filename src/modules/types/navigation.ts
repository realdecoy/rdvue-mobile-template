import { Lookup } from './lookup';
import { Transition } from '../core'

interface NavigationTransition {
    name: Transition;
    duration: number;
    curve: string;
}

export interface NavigationDetail {
    transition: {},
    transitioniOS: {},
    transitionAndroid: {},
    props: Lookup;
}

export interface Route {
    path: string;
    name: string;
    options?: Partial<NavigationDetail>;
}
