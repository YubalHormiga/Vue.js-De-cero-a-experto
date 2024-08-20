import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-messages.interface';
import type { YesNoResponse } from '@/interfaces/yes-no';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);
  const url = 'https://yesno.wtf/api';
  const getHerResponse = async () => {
    const res = await fetch(url);
    const data = (await res.json()) as YesNoResponse;
    return data;
  };

  const sendMessage = async (message: string) => {
    if (message.length === 0) return;
    messages.value.push({ id: new Date().getTime(), message: message, itsMine: true });

    if (!message.endsWith('?')) return;

    await sleep(1.5);
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      itsMine: false,
      image: image,
    });
  };
  return {
    messages,
    sendMessage,
  };
};
