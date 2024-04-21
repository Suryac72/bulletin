import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from '@/components/Search';

describe('SearchInput', () => {
  test('renders with placeholder and icon', () => {
    const placeholder = 'Search here';
    const { getByPlaceholderText, getByTestId } = render(
      <SearchInput placeHolder={placeholder} name="search" handleSearch={() => {}} />
    );

    const inputElement = getByPlaceholderText(placeholder);
    const searchIcon = getByTestId('search-icon');

    expect(inputElement).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  test('calls handleSearch function on input change', () => {
    const handleSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput placeHolder="Search" name="search" handleSearch={handleSearchMock} />
    );

    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });
});
