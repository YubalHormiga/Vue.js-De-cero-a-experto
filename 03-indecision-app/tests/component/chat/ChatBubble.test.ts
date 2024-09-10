import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

describe('<CharBublle/>', () => {
  it('should display the message on the right side when itsMine is true', () => {
    const wrapper = mount(ChatBubble, {
      props: {
        message: 'Hello!',
        itsMine: true,
      },
    });

    expect(wrapper.find('.flex.justify-end').exists()).toBe(true);
    expect(wrapper.find('.flex.justify-end').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toBe('Hello!');
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });
  it('should not display the image when image prop is not provided', () => {
    const wrapper = mount(ChatBubble, {
      props: {
        message: 'Hello!',
        itsMine: false,
      },
    });

    expect(wrapper.find('img').exists()).toBe(false);
  });
  it('should display the image when image prop is provided', () => {
    const wrapper = mount(ChatBubble, {
      props: {
        message: 'Hello!',
        itsMine: false,
        image: 'https://example.com/image.jpg',
      },
    });
    expect(wrapper.find('.flex.justify-end').exists()).toBe(false);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg');
    expect(wrapper.find('.object-cover').exists()).toBeTruthy();
  });
});
