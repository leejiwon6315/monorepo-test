import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Vue2Button from './Vue2Button.vue';

/**
 * @jest-environment jsdom
 */

describe('Vue2Button.vue', () => {
  it('mounted', () => {
    const wrapper = mount(Vue2Button,{
        propsData: {
            bgColor: 'red', 
            onClick: () => {},
        },
        slots: {
            default: 'Hello',
        },
    });
    expect(wrapper.text()).toContain('Hello');
  });
});
