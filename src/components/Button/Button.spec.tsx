import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render', () => {
    const { getByText } = render(<Button btnType="blue" label="Click me" />);
    expect(getByText('Click me')).toBeTruthy();
  });
});
