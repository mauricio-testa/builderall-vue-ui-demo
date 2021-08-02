<template>
  <div class="grid-test">
    <div
      v-for="plan in plans"
      :key="plan.id"
    >
      <CloudPlanListItem
        :plan="plan"
        :active-plan-id="1"
        :disabled="false"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<script>
import CloudPlanListItem from '../components/price/CloudPlanListItem.vue'

export default {
  components: {
    CloudPlanListItem
  },
  data () {
    return {
      plans: [{ id: 1, name: 'Basic', slug: 'basic-usd', active: 1, cpu: 1, ram: 2, hd: 10, band: 1, estimated_access: 25000, price: 15, currency: 'usd', order: 1, created_at: null, updated_at: null }, { id: 2, name: 'Essential', slug: 'essential-usd', active: 1, cpu: 2, ram: 4, hd: 20, band: 2, estimated_access: 50000, price: 29, currency: 'usd', order: 2, created_at: null, updated_at: null }, { id: 3, name: 'Essential', slug: 'ultra-usd', active: 1, cpu: 4, ram: 8, hd: 40, band: 4, estimated_access: 100000, price: 59, currency: 'usd', order: 3, created_at: null, updated_at: null }, { id: 4, name: 'Hyper', slug: 'hyper-usd', active: 1, cpu: 8, ram: 16, hd: 80, band: 8, estimated_access: 250000, price: 115, currency: 'usd', order: 4, created_at: null, updated_at: null }, { id: 5, name: 'Elite', slug: 'elite-usd', active: 1, cpu: 16, ram: 32, hd: 160, band: 16, estimated_access: 500000, price: 229, currency: 'usd', order: 5, created_at: null, updated_at: null }]
    }
  }
}
</script>

<style scoped lang="scss">
.grid-test {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  background: #e9edf2;
  padding: 25px;
  > div {
    flex-basis: 300px;
    justify-content: center;
  }
}
</style>
