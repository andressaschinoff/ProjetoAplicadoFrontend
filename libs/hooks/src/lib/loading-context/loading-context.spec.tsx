import React from 'react';
import { render } from '@testing-library/react';

import LoadingContext from './loading-context';

describe('LoadingContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingContext />);
    expect(baseElement).toBeTruthy();
  });
});
