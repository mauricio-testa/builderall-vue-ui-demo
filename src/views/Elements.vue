<template>
  <bui-page
    title="Elements"
    subtitle="Welcome to a Builderall application!"
  >
    <bui-alert
      index="alert-01"
      content="Welcome!"
    />

    <bui-icon
      name="next"
      class="rtl-mirror"
    />

    <b-tabs card>
      <b-tab
        title="Inputs"
        active
      >
        <bui-form-group
          label="Name"
          help="Help text"
          :required="true"
        >
          <b-form-input type="text" />
        </bui-form-group>

        <bui-form-group
          label="Language"
          help="Please select"
        >
          <bui-language-selector />
        </bui-form-group>

        <bui-form-group label="Label with actions">
          <b-form-input
            type="text"
            value="Form input error"
          />
          <template #actions>
            <bui-icon
              name="copy"
              gray
              size="16"
            />
          </template>
        </bui-form-group>

        <bui-form-group
          label="Label with help"
          help="Help text"
        >
          <b-form-input
            type="text"
            value="Form input"
          />
        </bui-form-group>

        <bui-form-group
          label="Label with error"
          error="error text"
        >
          <b-form-input
            type="text"
            value="Form input error"
          />
        </bui-form-group>

        <bui-form-group
          label="Textarea"
          help="Help text"
        >
          <b-form-textarea
            required
            value="Textarea"
            rows="3"
          />
        </bui-form-group>

        <bui-form-group
          label="Textarea error"
          error="Wrong!"
          help="Help text"
        >
          <b-form-textarea
            required
            value="Textarea"
            rows="3"
          />
        </bui-form-group>

        <bui-form-group label="Search">
          <b-form-input type="search" />
        </bui-form-group>

        <bui-form-group label="Select">
          <b-form-select :options="['one', 'two']" />
        </bui-form-group>

        <bui-form-group
          label="Radios"
          help="I need help"
          required
        >
          <b-form-radio-group
            :options="['one', 'two']"
            name="radio-options"
          />
        </bui-form-group>

        <bui-form-group
          label="Select complete"
          help="I need help"
          required
          error="Error!"
        >
          <b-form-select :options="['one', 'two']" />
        </bui-form-group>

        <bui-form-group
          label="Switches"
          required
          help="oi!!!!"
        >
          <b-form-checkbox
            switch
            :checked="true"
          >
            <label> Switch </label>
          </b-form-checkbox>
          <b-form-checkbox
            switch
            class="bui-switch-success"
            :checked="true"
          >
            <label> Switch </label>
          </b-form-checkbox>
          <b-form-checkbox
            class="bui-checkbox-rounded"
            :checked="true"
          >
            <label> Checkbox rounded </label>
          </b-form-checkbox>
        </bui-form-group>

        <b-form-checkbox
          id="boxed"
          class="bui-checkbox-boxed bui-checkbox-rounded"
          size="lg"
          :checked="true"
        >
          <label for="boxed">Checkbox boxed e rounded</label>
          <bui-icon
            v-b-tooltip.hover="'Tooltipzão'"
            name="info"
            :size="18"
          />
        </b-form-checkbox>

        <b-form-group class="my-3">
          <template #label>
            <label class="font-weight-bold">My website name is</label>
          </template>
          <b-input
            size="xl"
            placeholder="aksdj"
          />
        </b-form-group>
      </b-tab>
      <b-tab title="Dialogs">
        <b-button
          variant="danger"
          @click="deleteItem()"
        >
          <bui-icon
            name="trash"
            white
            size="18"
          />
          Modal Delete
        </b-button>
        <bui-modal-confirm ref="modal" />
        <b-button
          v-for="variant in ['success', 'danger', 'warning']"
          :key="variant"
          class="mx-1"
          :variant="variant"
          @click="toast('example ' + variant, variant)"
        >
          Toast {{ variant }}
        </b-button>
      </b-tab>
    </b-tabs>
  </bui-page>
</template>

<script>
export default {
  methods: {
    deleteItem () {
      this.$refs.modal.show({
        iconName: 'trash',
        title: 'Do you really want to delete?',
        message: "If I were you I wouldn't do that ...",
        okVariant: 'danger',
        okTitle: 'Delete',
        cancelVariant: 'default',
        cancelTitle: 'Cancel',
        data: { id: 16 },
        onSuccess: (data) => this.toast('delete id ' + data.id, 'success'),
        onCancel: (data) => this.toast('cancel id ' + data.id, 'danger')
      })
    },
    toast (message, variant) {
      this.$bvToast.toast(message, {
        variant: variant
      })
    }
  }
}
</script>
