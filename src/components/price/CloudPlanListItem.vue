<template>
  <article
    class="card-plan-item"
    :class="{ 'card-plan-item-current' : isCurrentPlan}"
    no-body
  >
    <div
      v-if="isCurrentPlan"
      class="card-header text-uppercase"
    >
      Current plan
    </div>
    <div class="card-body">
      <h4 class="card-title mb-2">
        {{ plan.name }}
      </h4>
    </div>
    <div class="card-body py-0">
      <cloud-plan-price
        :price="plan.price"
        :currency="plan.currency"
      />
    </div>
    <div class="card-body card-border-bottom">
      <p class="plan-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam rem natus tempora hic placeat vel ut nemo culpa asperiores incidunt ea quo earum reprehenderit alias illo ab nesciunt veniam.
      </p>
    </div>
    <div class="card-body py-0">
      <ul class="card-body plan-items py-0 mb-0">
        <li
          v-for="i in 3"
          :key="i"
        >
          <svg
            preserveAspectRatio="xMidYMax meet"
            height="18"
            width="18"
            viewBox="0 0 18.602 18.602"
          ><path
            id="Caminho_407"
            data-name="Caminho 407"
            d="M13.3,4a9.3,9.3,0,1,0,9.3,9.3A9.3,9.3,0,0,0,13.3,4Zm4.611,8.454-4.9,4.9a1.329,1.329,0,0,1-1.88,0L8.687,14.909A1.329,1.329,0,0,1,8.9,12.853a1.352,1.352,0,0,1,1.687.2l.492.492a.734.734,0,0,1,0,1.04h0a.332.332,0,0,0,0,.468h0a.332.332,0,0,0,.468,0l.525-.525h0l3.933-3.93a1.352,1.352,0,0,1,1.687-.2,1.329,1.329,0,0,1,.216,2.056Z"
            transform="translate(-4 -4)"
            fill="#0080fc"
          /></svg>
          Qualquer coisa
        </li>
      </ul>
    </div>
    <footer class="card-footer ">
      <button
        :disabled="disabled"
        block
        size="lg"
        class="btn justify-content-center"
        :variant="'primary'"
        @click="$emit('select', plan)"
      >
        {{ (activePlanId ? 'bw-upgrade' : 'ge-select') }}
      </button>
    </footer>
  </article>
</template>

<script>
import CloudPlanPrice from './CloudPlanListItemPrice'

export default {
  components: {
    CloudPlanPrice
  },

  props: {
    plan: {
      type: Object,
      default: () => {}
    },
    activePlanId: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    estimatedAccess () {
      try {
        return new Intl.NumberFormat(document.documentElement.lang, { style: 'decimal' })
          .format(this.plan.estimated_access)
      } catch (error) {
        console.error(error)
        return this.plan.estimated_access
      }
    },

    isCurrentPlan () {
      return this.activePlanId === this.plan.id
    }
  }

}
</script>

<style lang="scss">
.card-plan-item {
  box-shadow: 0px 3px 5px #00000026;
  border-radius: 10px;
  text-align: center;
  min-height: 400px;
  margin-bottom: 40px;
  height: calc(100% - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  .card-title {
    font: normal normal 800 1.8rem/38px Muli;
    color: #434343;
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;

    .plan-description {
      font: normal 600 normal 0.82rem/18px Muli;
      letter-spacing: 0.42px;
      color: #434343;
    }

    .plan-items {
      list-style-type: none;
      border-bottom: 1px solid #EBEBEC;
      li {
        font: normal normal bold 1.05rem/25px Muli;
        text-align: left;
        color: #434343;
        padding: 15px;
        max-width: 180px;
        margin: auto;
        display: flex;
        align-items: center;
        .bui-icon {
          margin: 0 12px;
        }
        &:not(:last-child) {
          border-bottom: 1px solid #EBEBEC;
        }
      }
    }
  }

  .card-footer {
    background: #fff;
    border: none;
    padding: 1.5rem 2.25rem;
    border-radius: 10px;
    .btn {
      box-shadow: 0px 4px 16px #21274b39;
      padding: 16px 50px;
      max-width: 215px;
    }
  }

  .card-border-bottom {
    border-bottom: 1px solid #EBEBEC;
  }

  &.card-plan-item-current {
    padding-bottom: 1.25rem;
    .card-header {
      font: normal normal bold 18px/26px Muli;
      color: #0F7BFF;
      text-transform: uppercase;
      padding: 22px;
    }
    .card-body {
      opacity: .65;
    }
    .card-footer {
      display: none;
    }
    .plan-items {
      border: none;
    }
  }
}
</style>
