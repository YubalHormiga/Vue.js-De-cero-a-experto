import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
// Mock de `useChat` composable
vi.mock('@/composable/useChat', () => ({
  useChat: () => ({
    messages: [{ id: 1, message: 'Hola' }],
    sendMessage: vi.fn(),
  }),
}));

describe('IndecisionView', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = mount(IndecisionView);

    // Verifica que el componente principal se renderiza
    expect(wrapper.exists()).toBe(true);
  });

  it('debería renderizar los subcomponentes correctamente', () => {
    const wrapper = mount(IndecisionView);

    // Verifica que `ChatMessages` y `MessageBox` se renderizan
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  it('debería pasar mensajes al componente ChatMessages', () => {
    const wrapper = mount(IndecisionView);

    // Verifica que la propiedad `messages` se pasa correctamente
    const chatMessages = wrapper.findComponent(ChatMessages);
    expect(chatMessages.props('messages')).toEqual([{ id: 1, message: 'Hola' }]);
  });


  it('debería tener la estructura DOM correcta', () => {
    const wrapper = mount(IndecisionView);

    // Verifica las clases CSS importantes
    expect(wrapper.find('.bg-gray-100').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-500').exists()).toBe(true);
  });
});
