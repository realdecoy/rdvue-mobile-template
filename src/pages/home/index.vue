<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>

<template>
  <default direction="left" pageTitle="Home">
    <template v-slot:main>
      <FlexboxLayout flexDirection="column">
        <Label class="info">
          <FormattedString>
            <Span class="fas" text.decode="&#xf135; "/>
            <Span>{{ message() }}</Span>
          </FormattedString>
        </Label>
        <Label text="Welcome" />
        <button v-if="routeHistory.length > 0" text="Go Back" @tap="navigateBack()" />
      </FlexboxLayout>
    </template>
  </default>
</template>
