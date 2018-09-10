import notification_container from '../../src/components/mirror_components/notification_container/notification_container.vue'
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
      1,
      2
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

  const wrapper = mount(notification_container, {
    propsData: {
      notificationData: mockedData,
      href: '#'
    }
  })

  // wrapper.vm.concatNotificationData(addMoreData)

  // describe('concat function', () => {
  //   it('set next', () => {
  //     expect(wrapper.vm.next).to.equal('next_page_after_update')
  //   })

  //   it('concat results', () => {
  //     expect(wrapper.vm.notificationItems).to.have.length(6)
  //   })
  // })

  describe('emit scroll event with next as params when call notification onscroll', () => {
    wrapper.vm.notificationListOnLazyLoad()
    expect(wrapper.emitted('lazyLoad'))
  })

  describe('toggle notification list', () => {
    const button = wrapper.find('.notification_bell__button')
    button.trigger('click')

    it('set notificationCount to 0', () => {
      expect(wrapper.vm.notificationCount).to.equal(0)
    })

    it('reverse toggleNotificationStatus (current is false)', () => {
      expect(wrapper.vm.isShowNotificationList).to.be.true
    })

    it('emmit markAsRead, set notificationCount to zero, and clear unread_list if have notification and notfication being Toggle', () => {
      // Mount with 
      const customMockedData = {
        "count": 10,
        "unread_list": [
          1, 2
        ],
        "next": "next page before update",
        "previous": null,
        "results": [
        ]
      }


      // Mount data
      const customWrapper = shallowMount(notification_container, {
        propsData: {
          notificationData: customMockedData,
          href: '#'
        }
      })

      // Find and click button
      customWrapper.vm.toggleNotificationList()

      // Assertion
      expect(customWrapper.emitted('markAsRead')[0][0]).to.eql([1,2])
      expect(customWrapper.vm.notificationCount).to.equal(0) // Reset notification count to zero
    })

    it('not emmit markAsRead if no notification count and notification being Toggle', () => {
      // Mount with 
      const customMockedData = {
        "count": 10,
        "unread_list": [
        ],
        "next": "next page before update",
        "previous": null,
        "results": [
        ]
      }


      // Mount data
      const customWrapper = shallowMount(notification_container, {
        propsData: {
          notificationData: customMockedData,
          href: '#'
        }
      })

      // Find button and click
      customWrapper.vm.toggleNotificationList()

      // Assert
      expect(customWrapper.emitted('markAsRead')).to.be.undefined
      expect(customWrapper.vm.notificationCount).to.equal(0)
    })
  })
})