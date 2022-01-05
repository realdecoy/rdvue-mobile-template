<template>
  <Page :actionBarHidden="true">
    <MultiDrawer >
      <GridLayout :slot="direction">
        <!-- <slot name="drawer" /> -->
        <navigation />
      </GridLayout>

      <Frame>
        <Page>
          <ActionBar :title="pageTitle" />
          <slot name="main" />
        </Page>
      </Frame>
    </MultiDrawer>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { AndroidApplication } from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';
import { Frame } from 'tns-core-modules/ui/frame';
import { routes } from '@/config/route';
import Navigation from '@/components/navigation';
import { Lookup, NavigationDetail } from '@/modules/types';
import { Navigation as Router } from '@/store/navigation';

@Component({
    components: {
      Navigation,
    },
    name: 'default',
})
export default class Default extends Vue {
    // --------------------------------------------------------------------------
    // [Public] Accessors
    // --------------------------------------------------------------------------
    @Prop({ type: String }) direction!: string;
    @Prop({ type: String }) pageTitle!: string;

    // --------------------------------------------------------------------------
    // [Private] Fields
    // --------------------------------------------------------------------------

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
      navigateBack() {
        Router.removeRoute();
        let Page;
        let pageOptions: Partial<NavigationDetail> | undefined = {} as Partial<NavigationDetail>;

        if(Router.currentRoute !== undefined) {
            const { path, options } = Router.currentRoute;
            pageOptions = options;
            Page = require(`@/pages${path}`).default;
        } else {
            Page = require(`@/pages${routes[0].path}`).default;
        }

        (this as unknown as Lookup<(arg: unknown, options?: Partial<NavigationDetail>) => void>).$navigateTo(Page, pageOptions);
    }

    // --------------------------------------------------------------------------
    // [Private] Lifecycle Hooks
    // --------------------------------------------------------------------------
    mounted() {

      let activity = (AndroidApplication as unknown as AndroidApplication).startActivity ||
        (AndroidApplication as unknown as AndroidApplication).foregroundActivity ||
        Frame.topmost().android.currentActivity ||
        Frame.topmost().android.activity;

      if(isAndroid && activity) {

        activity.onBackPressed = () => {
          this.navigateBack();
        }
      }
    }
}
</script>