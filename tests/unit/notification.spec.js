import notification from '../../src/components/mirror_components/notification/notification.vue'
import {
  expect
} from 'chai'
import {
  shallowMount, mount
} from '@vue/test-utils'

describe('notification component', () => {
  const mockedData = {
    "count": 10,
    "unread_list": [
      11
    ],
    "next": "next page before update",
    "previous": null,
    "results": [
      {
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
      {
        "actor_name": "phmngocnghia",
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
        "version": "",
        "release_date": "",
        "type_notification": "",
        "timestamp": "2018-09-05T18:19:38.802793",
        "unread": false,
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
        "id": 10,
        "actor_object_id": "5"
      },
      {
        "actor_name": "phmngocnghia",
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
        "version": "",
        "release_date": "",
        "type_notification": "",
        "timestamp": "2018-09-05T18:19:29.712501",
        "unread": false,
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
        "id": 9,
        "actor_object_id": "5"
      },
      {
        "actor_name": "phmngocnghia",
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
        "version": "",
        "release_date": "",
        "type_notification": "",
        "timestamp": "2018-09-05T18:19:18.042151",
        "unread": false,
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
        "id": 8,
        "actor_object_id": "5"
      },
      {
        "actor_name": "phmngocnghia",
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
        "version": "",
        "release_date": "",
        "type_notification": "",
        "timestamp": "2018-09-05T18:14:21.850865",
        "unread": false,
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
        "id": 7,
        "actor_object_id": "5"
      }
    ]
  }

  const addMoreData = {
    "count": 10,
    "unread_list": [
      11
    ],
    "next": "next_page_after_update",
    "previous": null,
    "results": [
      {
        "actor_name": "dummy",
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
        "version": "",
        "release_date": "",
        "type_notification": "",
        "timestamp": "2018-09-05T19:54:51.660614",
        "unread": true,
        "description": "added notification",
        "id": 11,
        "actor_object_id": "5"
      },
    ]
  }

  const wrapper = mount(notification, {
    propsData: {
      propNotificationData: mockedData,
      href: '#'
    }
  })

  wrapper.vm.concatNotificationData(addMoreData)

  describe('concat function', () => {
    it('set next', () => {
      expect(wrapper.vm.next).to.equal('next_page_after_update')
    })

    it('concat results', () => {
      expect(wrapper.vm.notificationItems).to.have.length(6)
    })
  })

  describe('emit scroll event with next as params when call notification onscroll', () => {
    wrapper.vm.notificationListOnScroll()
    expect(wrapper.emitted('scroll'))
  })

  describe('toggle notification list', () => {
    const button = wrapper.find('.notification_bell__button')
    button.trigger('click')

    it('set notificationCount to 0', () => {
      expect(wrapper.vm.notificationCount).to.have.length(0)
    })

    it('reverse toggleNotificationStatus', () => {
      expect(wrapper.vm.isShowNotificationList).to.be.false
    })
  })
})