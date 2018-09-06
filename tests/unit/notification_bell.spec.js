import notificationBell from  '../../src/components/mirror_components/notification_bell/notification_bell.vue'
import {
  shallowMount
} from '@vue/test-utils'

describe('notification bell component', () => {
  it('not render notification count when notification count is zero', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 0
      }
    })

    /**
     * Tìm thấy số
     */
    const number = wrapper.find('notification_bell__number')
    expect(number.exists()).to.be.false
  })

  it('render notification count when notification count is smaller than or equal 9', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 1
      }
    })
  })

  it('render notification count when notification acount is bigger than 9', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 10
      }
    })
  })
})