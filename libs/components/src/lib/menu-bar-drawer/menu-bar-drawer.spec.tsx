import React from 'react';
import { render } from '@testing-library/react';

import MenuBarDrawer from './menu-bar-drawer';

describe('MenuBarDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuBarDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
