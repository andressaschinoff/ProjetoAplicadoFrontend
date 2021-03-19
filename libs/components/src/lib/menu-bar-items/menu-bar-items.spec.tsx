import React from 'react';
import { render } from '@testing-library/react';

import MenuBarItems from './menu-bar-items';

describe('MenuBarItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuBarItems />);
    expect(baseElement).toBeTruthy();
  });
});
