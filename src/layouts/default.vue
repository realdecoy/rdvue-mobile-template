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
import Navigation from '@/components/navigation';

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

    // --------------------------------------------------------------------------
    // [Private] Lifecycle Hooks
    // --------------------------------------------------------------------------
}
</script>