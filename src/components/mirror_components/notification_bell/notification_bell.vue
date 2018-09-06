<template>
  <div class="notification_bell">
    <button :class="notificationBellButtonClass" @click="notificationBellOnClick">
      <div class="notification_bell__number" v-if="notificationCount>0">{{formatNotificationCount}}</div>
      <img src="./notification_bell.svg" class="notification_bell__icon"/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Số lượng notification sẽ được hiển thị
     * Business:
     * Nếu nhỏ hơn hoặc bằng 9 hiển thị bình thường
     * Nếu lớn hơn 9 hiển thị 9+
     */
    notificationCount: {
      type: Number
    },

    /**
     * Bind class toggle to button
     * Apply style for state [hover, active, normal]
     */
    isToggle: {
      type: Boolean
    }
  },

  methods: {
    notificationBellOnClick() {
      /**
       * Event khi click vào cái chuông
       * @event click
       * @type {Undefined}
       */
      this.$emit("click");
    },
  },

  computed: {
    notificationBellButtonClass () {
      return [
        'notification_bell__button',
        this.isToggle ? 'notification_bell__button--toggle' : ''
      ]
    },

    formatNotificationCount () {
      if (this.notificationCount > 9) {
        return "9+"
      } else {
        return this.notificationCount
      }
    }
  }
};
</script>

<style scoped lang="scss">
.notification_bell {
  display: inline-block;

  &__number {
    color: white;
    top: 8px !important;
    background: #d9534f !important;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    line-height: 18px;
    font-size: 10px;
    text-align: center;
    right: 5px;
    cursor: pointer;
  }

  &__button {
    &:hover {
      background: #008b8b;
      cursor: pointer;
    }

    &:active > .notification_bell__number {
      display: none
    }

    &--toggle {
      &,
      &:hover,
      &:active {
        background: #008b8b;
      }
    }

    outline: 0;
    position: relative;
    background: transparent;
    border: 0px;
    padding: 10.5px 10px 3px 10px;
    height: 50px;
  }



  &__icon {
    font-size: 30px;
    background-image: url("./notification_bell.svg");
  }
}
</style>

<docs>
</docs>