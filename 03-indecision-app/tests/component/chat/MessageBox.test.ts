import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<MessageBox/>', () => {
  it('renders input an button elements correctly', () => {
    const wrapper = mount(MessageBox);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button svg').exists()).toBeTruthy();
  });

  it('emits sendMessage event with input value on button click', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    await input.setValue('Hello');
    await button.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('sendMessage');
    expect(wrapper.emitted().sendMessage[0]).toEqual(['Hello']);
    console.log('Hola', wrapper.emitted());
  });
  it('emits sendMessage event with input value on enter key press', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.setValue('Hello');
    await input.trigger('keypress.enter');
    expect(wrapper.emitted()).toHaveProperty('sendMessage');
    expect(wrapper.emitted().sendMessage[0]).toEqual(['Hello']);
  });
});
