import { useChat } from "@/composable/useChat";
import { beforeEach, describe, expect, it, vi } from "vitest";
describe('<useChat/>', () => {
  beforeEach(() => {
    // Restaurar el comportamiento original de fetch antes de cada prueba
    global.fetch = vi.fn();
  });

  it('debería agregar un mensaje del usuario cuando `sendMessage` es llamado', async () => {
    const { messages, sendMessage } = useChat();

    await sendMessage('Hola Mundo');

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0]).toMatchObject({
      message: 'Hola Mundo',
      itsMine: true,
    });
  });

  it('no debería hacer nada si el mensaje está vacío', async () => {
    const { messages, sendMessage } = useChat();

    await sendMessage('');

    expect(messages.value.length).toBe(0);
  });

  it('debería llamar a `getHerResponse` si el mensaje termina en "?"', async () => {
    // Mock de `fetch` con una respuesta que simule la API
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          answer: "yes",
          image: "https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif",
        }),
      } as Response)
    );

    const { messages, sendMessage } = useChat();

    await sendMessage('Quieres ir?');
    await new Promise((r) => setTimeout(r, 200));

    expect(messages.value.length).toBe(2);
    expect(messages.value[1]).toMatchObject({
      id: expect.any(Number),
      message: 'yes',
      itsMine: false,
      image: "https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif",
    });
  });

  it('debería hacer mock de la respuesta de `fetch`', async () => {
    // Mock de `fetch` con una respuesta que simule la API
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          answer: "no",
          image: "https://yesno.wtf/assets/no/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif",
        }),
      } as Response)
    );

    const { messages, sendMessage } = useChat();

    await sendMessage('Quieres café?');
    await new Promise((r) => setTimeout(r, 200));

    expect(messages.value.length).toBe(2);
    expect(messages.value[1]).toMatchObject({
      id: expect.any(Number),
      message: 'no',
      itsMine: false,
      image: "https://yesno.wtf/assets/no/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif",
    });
  });
});
