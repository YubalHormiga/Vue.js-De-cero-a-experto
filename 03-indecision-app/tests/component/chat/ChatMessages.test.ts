import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import type { ChatMessage } from "@/interfaces/chat-messages.interface";

const messages: ChatMessage[] = [
  { id: 1, itsMine: true, message: 'Hello', image: '' },
  { id: 2, itsMine: false, message: 'World', image: '' },
];

describe('<ChatMessages/>', () => {
  it('renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: { messages },
    });

    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });

});
