<template>
  <div class="notification">
    <notification_bell
      @click="toggleNotificationList"
      :isToggle="isShowNotificationList"
      :notificationCount="notificationCount"
    />
    
    <notification_list
      @scroll="notificationListOnScroll"
      v-if="isShowNotificationList"
      class="notification__list"
      :notificationItems="notificationItems"
      :href="href"
      :next="notificationData.data.next"
    />
  </div>
</template>

<script>
/**
 * MAINTAINER: NGHĨA
 */
import notificationBell from "../notification_bell/notification_bell";
import notificationList from "../notification_list/notification_list";

export default {
  methods: {
    /**
     * Input new lazy load data here
     * Automatically assign net + concat notification
     */
    concatNotificationData (notificationData) {

    },

    notificationListOnScroll(next) {
      /**
       * this will be emmited if next provided
       * param: next... resolve outside due to system heavily couple clouldjetAjax
       *
       * @event scroll
       * @type {string}
       */
      this.$emit("scroll", next);
    },

    toggleNotificationList() {
      this.isShowNotificationList = !this.isShowNotificationList;

      /**
       * Set data will trigger re-render and computation
       * Should calculate before set data
       */
      if (this.notificationCount !== 0) {
        this.notificationCount = 0;
      }
    }
  },

  created() {
    this.notificationCount = this.notificationData.data.unread_list
      ? this.notificationData.data.unread_list.length
      : 0;
    this.notificationItems = this.notificationData.data.results;
  },

  data() {
    return {
      abc: "123",
      isShowNotificationList: false,
      notificationCount: 0,
      notificationItems: this.notificationData.results,
      notificationData: this.propNotificationData
    };
  },

  props: {
    /**
     * Pass anything the api return when OK
     * into this. will format data automatically
     */
    propNotificationData: {
      type: Object
    },

    /**
     * Link to show all notification
     */
    href: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.notification {
  position: relative;
  display: flex;
  justify-content: flex-end;

  &__list {
    position: absolute;
    top: 50px;
  }
}
</style>
