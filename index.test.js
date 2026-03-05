const { time, batch } = require('./index');

describe('relative-time', () => {
  test('should process string input', () => {
    expect(time('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => time(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = time('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
