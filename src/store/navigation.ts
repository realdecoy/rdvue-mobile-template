import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import store from './index';
import { Route } from '@/modules/types';
import { routes } from '@/config/route';

const MODULE_NAME = 'Navigation';
const HOME = 'Home';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
    private _routeHistory: Array<Route> = [];
    private _currentRoute = routes.filter(r => r.name === HOME)[0];

    // ------------------------------------------------------------------------
    // Getters
    // ------------------------------------------------------------------------
    public get routeHistory() {
        return this._routeHistory;
    }

    /**
     * Returns the current route
     */
    public get currentRoute() {
        return this._currentRoute;
    }

    // ------------------------------------------------------------------------
    // Actions
    // ------------------------------------------------------------------------
    @MultiParamAction()
    public updateRoute(route: Route) {
        this.setRoute(route);
        this.setCurrentRoute(route);
    }

    @MultiParamAction()
    public removeRoute() {
        if(this._routeHistory.length > 1) {
            this.removeLastRoute();
            this.setCurrentRoute(this.routeHistory[this.routeHistory.length - 1]);
        }
    }

    // ------------------------------------------------------------------------
    // Mutations
    // ------------------------------------------------------------------------
    @Mutation
    private setCurrentRoute(value: Route) {
        this._currentRoute = value;
    }

    @Mutation
    private setRoute(value: Route) {
        this._routeHistory.push(value);
    }

    @Mutation
    private removeLastRoute() {
        this._routeHistory.pop();
    }

}

const Navigation = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
    Navigation
};
