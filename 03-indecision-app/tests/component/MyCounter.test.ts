import { describe, expect, it } from 'vitest';
import MyCounter from '../../src/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<MyCounter/>', () => {
  it('should match snapshot', () => {
    const wrapper = mount(MyCounter);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders correctly with initial values', () => {
    const wrapper = mount(MyCounter);
    // console.log(wrapper.find('h3').text());
    const [squareLabel, counterLabel] = wrapper.findAll('h3');
    expect(squareLabel.text()).toContain('Square: 25');
    expect(counterLabel.text()).toContain('Counter: 5');
    expect(wrapper.find('h3').text()).toContain('Square: 25');
    expect(wrapper.find('h3:nth-of-type(2)').text()).toContain('Counter: 5');
    expect(wrapper.find('[data-test="square-label"]').text()).toContain('Counter: 5');
  });

  it('incrementa el contador cuando se hace click en el botón +1', async () => {
    const wrapper = mount(MyCounter);
    // console.log('HOLA', wrapper.findAll('button')[1]);

    await wrapper.find('button').trigger('click');
    expect(wrapper.find('[data-test="square-label"]').text()).toContain('Counter: 6');
    expect(wrapper.find('h3').text()).toContain('Square: 36');
  });
  it('decrementa el contador cuando se hace click en el botón -1', async () => {
    const wrapper = mount(MyCounter);
    // await wrapper.findAll('button')[1].trigger('click');
    // await wrapper.findAll('button')[1].trigger('click');

    // for (let i = 0; i < 2; i++) {
    //   await wrapper.findAll('button')[1].trigger('click');
    // }
    await wrapper
      .findAll('button')[1]
      .trigger('click')
      .then(() => wrapper.findAll('button')[1].trigger('click'));
    expect(wrapper.find('h3').text()).toContain('Square: 9');
  });
});
