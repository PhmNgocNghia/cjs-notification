Demo
```vue
<template>
  <div class="demo">
    <b class="display">System Log</b>
    <notification_item
      :notificationData="systemLogNotification"
      diffTime="4 hours ago"
    />
    
    <b class="display mt-3">Normal notification</b>
     <notification_item
      :notificationData="normalNotification"
      diffTime="4 hours ago"
    />
  </div>
</template>
<style scoped>
  .demo {
    width: 355px
  }

  body {
    font-family: HelveticaNeue !important;
  }

  .display {
    color: white;
    font-weight: bold
  }
</style>
<script>
  export default {
    data () {
      return {
        systemLogNotification: {
          "actor_name": "SYSTEM CJS", 
          "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
          "version": "5.2.0", 
          "release_date": "2018-07-31", 
          "type_notification": "change_log", 
          "timestamp": "2018-08-01T00:44:07.989845", 
          "unread": false, 
          "description": "OK",
          "id": 2490979, 
          "actor_object_id": "13152"
        },
        normalNotification: {
          "actor_name": "phmngocnghia", 
          "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
          "version": "", 
          "release_date": "", 
          "type_notification": "", 
          "timestamp": "2018-09-05T19:54:51.660614", 
          "unread": true, 
          "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
          "id": 11, 
          "actor_object_id": "5"
        },
      }
    }
  }
</script>
```