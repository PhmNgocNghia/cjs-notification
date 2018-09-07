<template>
  <div class="notification-list">
    <div class="notification-list__header">
      Thông báo
    </div>
  
    <div
      :class="notificationItemWrapperClass"
      @scroll="scroll"
      ref="notificationItemScrollableWrapper">

      <notification_item
        class="notification-list__item"
        :href="href"
        v-for="notificationItem in notificationItems"
        :notificationData="notificationItem"
        :key="notificationItem.id"/>

    </div>

    <div class="notification-list__footer">
      <a :href="href" class="notification-list__link" v-if="next">
        Xem tất cả
      </a>
    </div>
  </div>
</template>

<script>
import notification_item from "../notification_item/notification_item";

export default {
  methods: {
    /**
     *  Check behavior when scroll reach bottom
     */
    isNotificationItemScroller() {
      // Pr
      const notificationItemScrollableWrapper = this.$refs.notificationItemScrollableWrapper;

      return (
        /**
         * Scroll touch bottom
         * Don't know how this shit work but it was ameizing
         */
        notificationItemScrollableWrapper.scrollHeight -
          notificationItemScrollableWrapper.scrollTop ===
        notificationItemScrollableWrapper.clientHeight
      );
    },

    /**
     * Emmit if next prop exist
     * Manually test scroll behavior: No Unit Test idea yet ??
     *
     */
    scroll(e ,IisNotificationItemScroller = this.isNotificationItemScroller) {
      // Pass a function to mock that behavior
      if (this.next) {
        if (IisNotificationItemScroller()) {
          /**
           * Bubble to top componentn: notificatoin
           *
           * @event scroll
           * @type {string}
           */
          this.$emit("scroll", this.next);
        }
      }
    }
  },

  components: {
    notification_item
  },

  props: {
    /**
     * Link redirect when click "Xem tất cả"
     */
    href: {
      type: String,
      default: "#"
    },

    /**
     * Pass array object results
     * Return of API
     */
    notificationItems: {
      type: Array
    },

    /**
     * next exist then scroll will emmit scroll
     * eventually scroll will be bubble to notification component
     */
    next: {
      type: String
    }
  },

  computed: {
    notificationItemWrapperClass() {
      return this.next
        ? "notification-list__scrollable-wrapper"
        : "";
    }
  }
};
</script>

<style scoped lang="scss">
$padding: 10px;

.notification-list {
  background: white;
  width: 340px;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);

  &__scrollable-wrapper {
    height: 345px;
    overflow: auto;
  }

  &__item {
    padding: 10px 20px;
  }

  &__header {
    border-bottom: 1px solid #eee;
    color: #ababab !important;
    padding: $padding;
  }

  &__footer {
    border-top: 1px solid #eee;
    padding: $padding;
    text-align: center;
  }

  &__link {
    background: transparent;
    color: darkcyan;
    border: 0px;

    &,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
}
</style>
