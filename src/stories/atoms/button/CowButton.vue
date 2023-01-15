<template>
  <button
    :disabled="disabled"
    :class="['cow-button-default', buttonClasses]"
    :style="buttonStyles"
    :type="type"
    @click="onClick"
  >
    <div :class="['cow-button-content [&>*]:cow-flex', iconPosition == 'right' && 'cow-flex-row-reverse']">
      <div data-test-id="loader-container" v-if="loader" class="cow-loader-default"></div>
      <slot></slot>
      <span class="cow-btn-label" v-if="label">{{ label }}</span>
    </div>
  </button>
</template>

<script lang="ts">
export enum RoundedValues {
  "full" = "full",
  "3xl" = "3xl",
  "2xl" = "2xl",
  "xl" = "xl",
  "lg" = "lg",
  "md" = "md",
  "sm" = "sm",
  "none" = "none",
}
</script>

<script lang="ts" setup>
import { pick } from "../../../assets/js/helpers";
import { computed } from "vue";

// ========================= Interfaces =========================
export interface AdditionalStyles {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  textTransform?: string;
  fontWeight?: string;
  opacity?: number;
}

export interface Props {
  label?: string;
  type?: "button" | "submit" | "reset";
  additionalClasses?: string;
  outline?: boolean;
  block?: boolean;
  loader?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  rounded?: keyof typeof RoundedValues;
  size?: "sm" | "md" | "lg";
  additionalStyles?: AdditionalStyles;
}

const allowedButtonStyles = ["backgroundColor", "color", "textTransform", "fontWeight", "opacity"];

// ========================= props =========================
const props = withDefaults(defineProps<Props>(), {
  label: "Button",
  type: "button",
  outline: false,
  block: false,
  loader: false,
  shadow: false,
  disabled: false,
  iconPosition: "left",
  rounded: RoundedValues.md,
  size: "md",
});

// ========================= events =========================
const emit = defineEmits(["click"]);

// ========================= computed =========================
const buttonClasses = computed(() => ({
  "cow-button-block": props.block,
  "cow-button-shadow": props.shadow,
  "cow-button-outline": props.outline,
  "cow-button-disabled": props.disabled,
  "cow-button-only-icon": !props.label?.length,
  [`cow-button-${props.size}`]: props.size,
  [`cow-button-rounded-${props.rounded}`]: props.rounded,
  [`${props.additionalClasses}`]: props.additionalClasses,
}));

const buttonStyles = computed(() => ({
  borderColor: props.additionalStyles?.borderColor || props.additionalStyles?.backgroundColor,
  ...pick(props.additionalStyles, allowedButtonStyles),
}));

// ========================= methods =========================

const onClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
.cow-button-content {
  @apply cow-flex cow-items-center cow-justify-center;
}

.cow-button-default {
  @apply cow-px-5 cow-py-3 cow-border-2 active:cow-scale-[0.985] focus:cow-outline-0 cow-outline-none cow-text-base-100 cow-bg-primary cow-border-primary;

  .cow-btn-label {
    @apply cow-mx-1;
  }

  &:hover {
    @apply cow-bg-primary  cow-opacity-80;
    .cow-loader-default {
      @apply cow-border-base-100 cow-border-t-transparent;
    }
  }
}

// loader
.cow-loader-default {
  @apply cow-border-base-100 cow-border-t-transparent cow-border-solid cow-animate-spin cow-rounded-full cow-border-2 cow-inline-block;
}

.cow-button-disabled {
  @apply hover:cow-bg-none cow-bg-disabled cow-border-disabled active:cow-scale-100 cow-cursor-not-allowed;

  &:hover {
    @apply hover:cow-bg-disabled;
  }
}

.cow-button-block {
  @apply cow-block cow-w-full active:cow-scale-[0.995];
}

.cow-button-shadow {
  @apply cow-shadow-[5px_5px_0px] cow-shadow-shadow;
}

.cow-button-outline {
  @apply cow-bg-transparent cow-text-primary;

  &:hover {
    @apply hover:cow-text-base-100;
    .cow-loader-default {
      @apply cow-border-base-100 cow-text-base-100 cow-border-t-transparent;
    }
  }
  .cow-loader-default {
    @apply cow-border-primary cow-border-t-transparent;
  }
}

.cow-button-sm {
  @apply cow-px-[11px] cow-py-1 cow-h-[35px];

  &.cow-button-only-icon {
    @apply cow-px-3 cow-py-3;
  }

  .cow-loader-default {
    @apply cow-h-2.5 cow-w-2.5;
  }
}

.cow-button-md {
  @apply cow-px-5 cow-py-2 cow-h-[46px];

  &.cow-button-only-icon {
    @apply cow-px-3.5 cow-py-3.5;
  }

  .cow-loader-default {
    @apply cow-h-3.5 cow-w-3.5;
  }
}

.cow-button-lg {
  @apply cow-px-6 cow-py-3.5 cow-h-[55px];

  &.cow-button-only-icon {
    @apply cow-px-4 cow-py-4;
  }

  .cow-loader-default {
    @apply cow-h-4 cow-w-4;
  }
}

.cow-button-rounded-full {
  @apply cow-rounded-[100%];
}

.cow-button-rounded-3xl {
  @apply cow-rounded-3xl;
}

.cow-button-rounded-2xl {
  @apply cow-rounded-2xl;
}

.cow-button-rounded-xl {
  @apply cow-rounded-xl;
}

.cow-button-rounded-lg {
  @apply cow-rounded-lg;
}

.cow-button-rounded-md {
  @apply cow-rounded-md;
}

.cow-button-rounded-sm {
  @apply cow-rounded-[3px];
}

.cow-button-rounded-none {
  @apply cow-rounded-none;
}
</style>
