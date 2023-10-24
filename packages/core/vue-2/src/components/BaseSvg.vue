<template>
  <i
    :class="[
      isHover ? 'hover' : '',
      isSelected ? 'selected' : '',
      isDisabled ? 'disabled' : '',
    ]"
    :style="{ transform: `rotate(${degree}deg)` }"
    class="base-svg"
    v-on="$listeners"
    @mouseover="mouseover"
    @mouseout="mouseout"
    v-html="name"
  />
</template>

<script lang="ts">
/**
 * NOTE: 정상 동작하지 않는 컴포넌트 입니다. 더이상 사용하지 말아주세요.
 */
export default {
  name: "BaseSvg",
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String || Number,
    },
    height: {
      type: String || Number,
    },
    fill: {
      type: String,
      default: "transparent",
    },
    stroke: {
      type: String,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    degree: {
      type: Number || String,
      default: 0,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    isSelected() {
      this.isHover = false;
      return this.selected;
    },
    isDisabled() {
      this.isHover = false;
      return this.disabled;
    },
    getImageURL() {
      return `@/assets/svg/${this.name}.svg?url`;
    },
  },
  watch: {
    stroke(newVal) {
      // 색 설정
      const selectedComponent = this.$el.querySelector(
        `#${this.name}`,
      ) as HTMLElement;

      if (this.$el.querySelector("#icons")) {
        selectedComponent.style.fill = newVal;
      }
      if (this.$el.querySelector("#icons-reversed")) {
        selectedComponent.style.fill = newVal;
      }
    },
    fill(newVal) {
      if (this.$el.querySelector("#icons-reversed")) {
        (this.$el.querySelector(`#${this.name}`) as HTMLElement).style.stroke =
          newVal;
      }
    },
  },
  mounted() {
    this.initIcon();
  },
  methods: {
    mouseover() {
      if (!this.isDisabled && !this.static && !this.isSelected) {
        this.isHover = true;
      }
    },
    mouseout() {
      if (!this.isDisabled && !this.static && !this.isSelected) {
        this.isHover = false;
      }
    },
    initIcon() {
      const selectedComponent = this.$el.querySelector(
        `#${this.name}`,
      ) as HTMLElement;

      const selectedSvgComponent = this.$el.querySelector("svg");

      if (selectedSvgComponent && this.width) {
        selectedSvgComponent.style.width = this.width.includes("px")
          ? this.width
          : this.width + "px";
      }
      if (selectedSvgComponent && this.height) {
        selectedSvgComponent.style.height = this.height.includes("px")
          ? this.height
          : this.height + "px";
      }
      // 색 설정
      if (
        this.$el.querySelector("#icons") &&
        selectedComponent &&
        this.stroke
      ) {
        selectedComponent.style.fill = this.stroke;
      }

      if (this.$el.querySelector("#icons-reversed") && selectedComponent) {
        if (this.stroke) {
          selectedComponent.style.stroke = this.stroke;
        }
        selectedComponent.style.fill = this.fill;
      }
    },
  },
};
</script>

<style lang="scss">
.base-svg {
  font-size: 0;
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.1s ease;

  svg {
    vertical-align: middle;
  }

  &.disabled {
    #icons {
      fill: $core-warm-gray-300;
    }
  }

  &.selected {
    cursor: pointer;

    #icons {
      fill: $core-warm-gray-700;

      path {
        fill: child;
      }
    }
  }

  &.hover {
    cursor: pointer;

    #icon-arrow-down-thin {
      fill: $core-warm-gray-400;
    }
  }
}
</style>
