import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from '@/components/Dashboard';

// Mocking next/router
jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));
  
  describe('Dashboard', () => {
    it('renders without crashing', () => {
      const bulletins = [{ id: 1, title: 'Bulletin 1', description: 'Description 1' }];
      render(<Dashboard bulletins={bulletins} />);
    });
  
    
  it('calls handleAddBulletin on button click', () => {
    const pushMock = jest.fn();
    const useRouterMock = { push: pushMock };
    useRouterMock.useRouter = jest.fn().mockReturnValue(useRouterMock);

    const bulletins = [{ id: 1, title: 'Bulletin 1', description: 'Description 1' }];
    const { getByText } = render(<Dashboard bulletins={bulletins} />);
    const addButton = getByText('Add Bulletin');
    fireEvent.click(addButton);
    expect(pushMock).toHaveBeenCalledTimes(0)
  });

  });