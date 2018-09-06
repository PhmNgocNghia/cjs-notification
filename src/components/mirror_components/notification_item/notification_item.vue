<template>
  <div class="notification-item">
    <img :src="notificationData.actor_avatar" class="notification-item__image col-md-2">
    <div class="col-md-10">
      <div class="notification-item__data">
        <div v-if="notificationData.type_notification==='change_log'">
          <b class="notification-item__display-name">Cloudjet KPI updated new version:</b>
          <span class="notification-item__version">Version {{notificationData.version}}</span>
          <span class="notification-item__release-date">updated {{notificationData.release_date}}</span>
          <span class="notification-item__content-action" v-html="notificationData.description"></span>
        </div>
      
        <div v-else>
          <b class="notification-item__display-name">{{notificationData.actor_name}}: </b>
          <span class="notification-item__content-action" v-html="notificationData.description"></span>
        </div>
      </div>
      <div class="notification-item__diffTime">{{diffTimeToString}}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Diff = now - timestamp
     * Business:
     */
    diffTimeToString() {
      var now = new Date()
      var past = new Date(this.notificationData.timestamp)
      var diffTime = now.getTime() - past.getTime();
      var diffmin = diffTime / (1000 * 60);
      var diffHours = diffmin / 60;
      var diffDay = diffHours / 24;

      if (diffDay >= 1.5) {
        return
          past.getDate() +
            "/" +
            past.getMonth() +
            "/" +
            past.getFullYear() +
            ' at ' +
            past.getHours() +
            ":" +
            past.getMinutes() +
            ":" +
            past.getSeconds();
      }
      
      if (diffDay < 1.5 && diffDay >= 1) {
        return parseInt(diffDay) + ' day ago';
      }
      
      if (diffHours >= 1) {
        return parseInt(diffHours) + ' hours ago';
      }

      if (diffmin < 60 && diffmin >= 1) {
        return parseInt(diffmin) + ' minutes ago';
      } else {
        return 'recent';
      }
    }
  },
  props: {
    /**
     * Link redirect when click notification item
     */
    href: String,
    /**
     * Notofication object api
     */
    notificationData: Object,

    /**
     * Notification number,
     * After click will set notification Number to zero
     * Only display when notification bigger than 0
     */
    notificationCount: Number
  }
};
</script>

<style  scoped lang="scss">
.notification-item {
  color: #333333;
  &:hover {
    background: #f1faf9;
    cursor: pointer;
  }

  background: white;
  display: flex;
  font-size: 12px;
  align-items: center;

  &__image {
    width: 34px;
    height: 34px;
  }

  &__content-action {
    // Clould jet button style
    > a {
      background: red;
    }
  }

  &__diffTime {
    font-size: 85%;
    color: #ababab;
  }

  .notification-item__content-action a {
    background: red !important;
  }
}
</style>
