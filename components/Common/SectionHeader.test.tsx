import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('renders the title, subtitle, and description', () => {
    const headerInfo = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      description: 'Test Description',
    };

    render(<SectionHeader headerInfo={headerInfo} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});