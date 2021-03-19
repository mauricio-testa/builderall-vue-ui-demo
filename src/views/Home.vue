<template>
  <bui-page
    title="Dashboard"
    subtitle="Welcome to a Builderall application!"
  >
    <template #page-header-right>
      <b-button
        variant="primary"
        class="ml-auto"
      >
        <bui-icon
          name="plus"
          white
          :size="18"
        />
        New calendar
      </b-button>
    </template>
    <bui-alert
      index="alert-01"
      content="Welcome!"
    />
  </bui-page>
</template>
