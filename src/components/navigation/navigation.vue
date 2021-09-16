<style scoped lang="scss" src="./navigation.scss"></style>
<script lang="ts" src="./navigation.ts"></script>
<template>
  <FlexboxLayout flexDirection="column" class="[ navigation ]">
    <Button v-for="(route, index) in routes" :key="index" @tap="navigateTo(route.path)" class="mt-16">
      <FormattedString>
        <Span :text="route.name" />
      </FormattedString>
    </Button>
  </FlexboxLayout>
</template>