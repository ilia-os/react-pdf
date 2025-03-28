import { beforeEach, describe, expect, test, vi } from 'vitest';

import * as Yoga from 'yoga-layout/load';

import setMargin, {
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
} from '../../src/node/setMargin';
import { SafeNode } from '../../src/types';

describe('node setMargin', () => {
  const mock = vi.fn();
  const mockAuto = vi.fn();
  const mockPercent = vi.fn();

  const node = {
    type: 'VIEW',
    props: {},
    style: {},
    children: [],
    yogaNode: {
      setMargin: mock,
      setMarginAuto: mockAuto,
      setMarginPercent: mockPercent,
    },
  } as SafeNode;

  const emptyNode = {
    type: 'VIEW',
    props: {},
    style: {},
    children: [],
    box: { top: 0, right: 0, bottom: 0, left: 0, width: 10, height: 20 },
  } as SafeNode;

  beforeEach(() => {
    mock.mockReset();
    mockAuto.mockReset();
    mockPercent.mockReset();
  });

  describe('setMarginTop', () => {
    test('should return node if no yoga node available', () => {
      const result = setMarginTop(null)(emptyNode);

      expect(result).toBe(emptyNode);
    });

    test('Should call appropiate yoga node method for auto value', () => {
      const result = setMarginTop('auto')(node);

      expect(mockAuto.mock.calls).toHaveLength(1);
      expect(mockAuto.mock.calls[0][0]).toBe(Yoga.Edge.Top);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for numeric values', () => {
      const result = setMarginTop(50)(node);

      expect(mock.mock.calls).toHaveLength(1);
      expect(mock.mock.calls[0][0]).toBe(Yoga.Edge.Top);
      expect(mock.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for percent values', () => {
      const result = setMarginTop('50%')(node);

      expect(mockPercent.mock.calls).toHaveLength(1);
      expect(mockPercent.mock.calls[0][0]).toBe(Yoga.Edge.Top);
      expect(mockPercent.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });
  });

  describe('setMarginRight', () => {
    test('should return node if no yoga node available', () => {
      const result = setMarginRight(null)(emptyNode);

      expect(result).toBe(emptyNode);
    });

    test('Should call appropiate yoga node method for auto value', () => {
      const result = setMarginRight('auto')(node);

      expect(mockAuto.mock.calls).toHaveLength(1);
      expect(mockAuto.mock.calls[0][0]).toBe(Yoga.Edge.Right);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for numeric values', () => {
      const result = setMarginRight(50)(node);

      expect(mock.mock.calls).toHaveLength(1);
      expect(mock.mock.calls[0][0]).toBe(Yoga.Edge.Right);
      expect(mock.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for percent values', () => {
      const result = setMarginRight('50%')(node);

      expect(mockPercent.mock.calls).toHaveLength(1);
      expect(mockPercent.mock.calls[0][0]).toBe(Yoga.Edge.Right);
      expect(mockPercent.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });
  });

  describe('setMarginBottom', () => {
    test('should return node if no yoga node available', () => {
      const result = setMarginBottom(null)(emptyNode);

      expect(result).toBe(emptyNode);
    });

    test('Should call appropiate yoga node method for auto value', () => {
      const result = setMarginBottom('auto')(node);

      expect(mockAuto.mock.calls).toHaveLength(1);
      expect(mockAuto.mock.calls[0][0]).toBe(Yoga.Edge.Bottom);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for numeric values', () => {
      const result = setMarginBottom(50)(node);

      expect(mock.mock.calls).toHaveLength(1);
      expect(mock.mock.calls[0][0]).toBe(Yoga.Edge.Bottom);
      expect(mock.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for percent values', () => {
      const result = setMarginBottom('50%')(node);

      expect(mockPercent.mock.calls).toHaveLength(1);
      expect(mockPercent.mock.calls[0][0]).toBe(Yoga.Edge.Bottom);
      expect(mockPercent.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });
  });

  describe('setMarginLeft', () => {
    test('should return node if no yoga node available', () => {
      const result = setMarginLeft(null)(emptyNode);

      expect(result).toBe(emptyNode);
    });

    test('Should call appropiate yoga node method for auto value', () => {
      const result = setMarginLeft('auto')(node);

      expect(mockAuto.mock.calls).toHaveLength(1);
      expect(mockAuto.mock.calls[0][0]).toBe(Yoga.Edge.Left);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for numeric values', () => {
      const result = setMarginLeft(50)(node);

      expect(mock.mock.calls).toHaveLength(1);
      expect(mock.mock.calls[0][0]).toBe(Yoga.Edge.Left);
      expect(mock.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for percent values', () => {
      const result = setMarginLeft('50%')(node);

      expect(mockPercent.mock.calls).toHaveLength(1);
      expect(mockPercent.mock.calls[0][0]).toBe(Yoga.Edge.Left);
      expect(mockPercent.mock.calls[0][1]).toBe(50);
      expect(result).toBe(node);
    });
  });

  describe('setMargin', () => {
    test('should return node if no yoga node available', () => {
      const result = setMargin(null)(emptyNode);

      expect(result).toBe(emptyNode);
    });

    test('Should call appropiate yoga node method for auto value', () => {
      const result = setMargin('auto')(node);

      expect(mockAuto.mock.calls).toHaveLength(4);
      expect(mockAuto.mock.calls[0][0]).toBe(Yoga.Edge.Top);
      expect(mockAuto.mock.calls[1][0]).toBe(Yoga.Edge.Right);
      expect(mockAuto.mock.calls[2][0]).toBe(Yoga.Edge.Bottom);
      expect(mockAuto.mock.calls[3][0]).toBe(Yoga.Edge.Left);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for numeric values', () => {
      const result = setMargin(50)(node);

      expect(mock.mock.calls).toHaveLength(4);
      expect(mock.mock.calls[0]).toEqual([Yoga.Edge.Top, 50]);
      expect(mock.mock.calls[1]).toEqual([Yoga.Edge.Right, 50]);
      expect(mock.mock.calls[2]).toEqual([Yoga.Edge.Bottom, 50]);
      expect(mock.mock.calls[3]).toEqual([Yoga.Edge.Left, 50]);
      expect(result).toBe(node);
    });

    test('Should call appropiate yoga node method for percent values', () => {
      const result = setMargin('50%')(node);

      expect(mockPercent.mock.calls).toHaveLength(4);
      expect(mockPercent.mock.calls[0]).toEqual([Yoga.Edge.Top, 50]);
      expect(mockPercent.mock.calls[1]).toEqual([Yoga.Edge.Right, 50]);
      expect(mockPercent.mock.calls[2]).toEqual([Yoga.Edge.Bottom, 50]);
      expect(mockPercent.mock.calls[3]).toEqual([Yoga.Edge.Left, 50]);
      expect(result).toBe(node);
    });
  });
});
