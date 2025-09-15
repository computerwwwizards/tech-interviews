import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Container from './container';

describe("Container - Search and Filter", () => {
  it("should filter and display items based on search input", async () => {
    render(<Container />)

    const searchInput = screen.getByRole('textbox');
    await userEvent.type(searchInput, 'apple');

    expect(screen.getByText('apple')).toBeInTheDocument();
  })
})