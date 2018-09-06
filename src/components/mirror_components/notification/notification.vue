<template>
  <div class="notification">
    <notification_bell
      @click="toggleNotificationList"
      :isToggle="isShowNotificationList"
      :notificationCount="notificationCount"
    />
    
    <notification_list
      class="notification__list"
      :notificationItems="notificationItems"
      :href="href"
    />

    {{abc}}
  </div>
</template>

<script>
import notificationBell from "../notification_bell/notification_bell";
import notificationList from "../notification_list/notification_list";

export default {
  methods: {
    toggleNotificationList() {
      this.isShowNotificationList = !this.isShowNotificationList;
      console.log(this.isShowNotificationList)
      /**
       * Set data will trigger re-render and computation
       * Should calculate before set data
       */
    }
  },

  created() {
    /**
     * Container should only need to focus pass props and it's child behavior
     * Calculate manually
     * notification count
     */
    this.notificationCount = this.notificationData.results.length();
    this.notificationItems = this.notificationData.results;
  },

  data() {
    return {
      abc: '123',
      isShowNotificationList: false,
      notificationCount: 0,
      notificationItems: this.notificationData.results
    };
  },

  props: {
    /**
     * Pass anything the api return when OK
     * into this. will format data automatically
     */
    notificationData: {
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
    top: 50px
  }
}
</style>
