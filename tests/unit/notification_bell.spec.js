import notificationBell from '../../src/components/mirror_components/notification_bell/notification_bell.vue'
import {
  shallowMount,
  mount
} from '@vue/test-utils'
import {
  expect
} from 'chai'


describe('notification bell', () => {
  it('add notification_bell__button--toggle class to button when isToggle = true', () => {
    // Init with isToggle = true
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 0,
        isToggle: true
      }
    })

    // notification_bell__button is style class
    const button = wrapper.find('.notification_bell__button')
    expect(button.exists()).to.be.true
    expect(button.classes()).to.eql(['notification_bell__button',  'notification_bell__button--toggle'])
  })

  it('not add  notification_bell__button--toggle to button when isToggle = false', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 0,
        isToggle: false
      }
    })

    // notification_bell__button is style class
    const button = wrapper.find('.notification_bell__button')
    expect(button.exists()).to.be.true
    expect(button.classes()).to.eql(['notification_bell__button'])
  })

  it('should emmit click event if click on button', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 0
      }
    })

    const button = wrapper.find('button')
    expect(button.exists()).to.be.true
    button.trigger('click')
    expect(wrapper.emitted('click')).not.to.be.undefined
  })

  it('not render notification count when notification count is zero', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 0
      }
    })

    const number = wrapper.find('.notification_bell__number')
    expect(number.exists()).to.be.false
  })

  it('render notification count when notification count is smaller than or equal 9', () => {
    const wrapper = mount(notificationBell, {
      propsData: {
        notificationCount: 1
      }
    })

    const number = wrapper.find('.notification_bell__number')
    expect(number.exists()).to.be.true
    expect(number.text()).to.equal('1')
  })

  it('render notification count when notification acount is bigger than 9', () => {
    const wrapper = shallowMount(notificationBell, {
      propsData: {
        notificationCount: 10
      }
    })

    const number = wrapper.find('.notification_bell__number')
    expect(number.exists()).to.be.true
    expect(number.text()).to.equal('9+')
  })
})