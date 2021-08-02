<template>
  <div class="plan-price">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="163"
      height="163"
      viewBox="0 0 163 163"
    >
      <defs>
        <clipPath>
          <rect
            width="163"
            height="163"
            transform="translate(450.367 530.367)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g transform="translate(-73.031 -132.816)">
        <g
          transform="translate(-377.336 -397.551)"
          opacity="0.394"
          clip-path="url(#clip-path)"
        >
          <g transform="translate(452.158 530)">
            <path
              d="M179.573,75.934c29.365,18.454,4.243,55.835-28.355,86.749-39.064,37.044-97.66,45.8-114.5-2.021C24.933,127.122,41.838-19.908,95.585,47.108,136.468,98.026,158.02,62.329,179.573,75.934Z"
              transform="translate(-33.156 -29.813)"
              fill="#dce5ff"
            />
          </g>
        </g>
        <text
          :transform="`translate(${false /*is RTL?*/ ? 200 : 142} 257.629)`"
          fill="#535353"
          font-size="15"
          font-family="Muli-Bold, Muli"
          font-weight="700"
          opacity="0.447"
        ><tspan
          x="-27.03"
          y="0"
        >/By month </tspan></text>
      </g>
    </svg>
    <span class="plan-price-value">
      <sup>{{ currencySymbol }}</sup>
      <span>{{ price }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: [String, Number],
      default: '0'
    },
    currency: {
      type: String,
      default: 'usd'
    }
  },

  computed: {
    currencySymbol () {
      return {
        brl: 'R$',
        usd: '$',
        eur: '€'
      }[this.currency]
    }
  }
}
</script>

<style lang="scss" scoped>
.plan-price {
  position: relative;
  text-align: center;
  .plan-price-value {
    position: absolute;
    font: normal normal 800 2.8rem/56px Muli;
    color: #0F7BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    left: 0;
    top: calc(62% - 50px);
    sup {
      font-size: 1.4rem;
      top: -0.2em;
    }
  }
}
</style>
