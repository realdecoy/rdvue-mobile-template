<style scoped lang="scss" src="./__PAGE__.scss"></style>
<script lang="ts" src="./__PAGE__.ts"></script>
<template>
  <default direction="left" pageTitle="__PAGE__">
    <template v-slot:main>
      <StackLayout class="[ __PAGE__ ]">
        <Label>
          <FormattedString>
            <Span text="__PAGE__"/>
          </FormattedString>
        </Label>
      </StackLayout>
    </template>
  </default>
</template>