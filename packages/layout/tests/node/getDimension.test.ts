import { describe, expect, test } from 'vitest';

import getDimension from '../../src/node/getDimension';

const getComputedWidth = () => 10;
const getComputedHeight = () => 20;

describe('node getDimension', () => {
  test('Should return 0 by default if no yoga node available', () => {
    const result = getDimension({
      type: 'VIEW',
      props: {},
      style: {},
      children: [],
    });

    expect(result).toHaveProperty('width', 0);
    expect(result).toHaveProperty('height', 0);
  });

  test('Should return yoga values if node available', () => {
    const yogaNode = { getComputedWidth, getComputedHeight };
    const result = getDimension({
      type: 'VIEW',
      props: {},
      style: {},
      children: [],
      yogaNode,
    });

    expect(result).toHaveProperty('width', 10);
    expect(result).toHaveProperty('height', 20);
  });
});
