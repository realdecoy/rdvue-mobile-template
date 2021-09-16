import { Vue } from 'vue-property-decorator';
import { routes } from '@/config/route';
import { Lookup, NavigationDetail } from '@/modules/types';
import { Navigation as Router } from '@/store/navigation';

export class RDVueMobile extends Vue {
    // --------------------------------------------------------------------------
    // [Private] Fields
    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------
    // [Public] Accessors
    // --------------------------------------------------------------------------
    get routes() {
        return routes;
    }

    protected get currentRoute() {
        return Router.currentRoute;
    }

    protected get routeHistory() {
        return Router.routeHistory;
    }

    // --------------------------------------------------------------------------
    // [Public] Constructor
    // --------------------------------------------------------------------------
    constructor() {
        super();
    }

    // --------------------------------------------------------------------------
    // [Private] Event Handlers
    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------
    // [Private] Methods
    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------
    // [Protected] Methods
    // --------------------------------------------------------------------------

    /**
     * RdVue Mobile's Navigation method - Foward Method
     * @param path
     * type: String Path of page being accessed
     */
    protected navigateTo(path: string, options?: Partial<NavigationDetail>) {
        const newRoute = this.routes.find(r => r.path === path);

        if(newRoute !== undefined) {
            const Page = require(`@/pages${path}`).default;
            newRoute.options = options;
            Router.updateRoute(newRoute);
            (this as unknown as Lookup<(arg: unknown, options?: Partial<NavigationDetail>) => void>).$navigateTo(Page, options);
        }
    }

    /**
     * RdVue Mobile's Navigation method - Back Method
     */
    protected navigateBack() {
        Router.removeRoute();
        const { path, options } = Router.currentRoute;
        const Page = require(`@/pages${path}`).default;
        (this as unknown as Lookup<(arg: unknown, options?: Partial<NavigationDetail>) => void>).$navigateTo(Page, options);
    }
}
