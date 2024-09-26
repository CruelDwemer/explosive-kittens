import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DrawCanvas from './draw-canvas'
import '@testing-library/jest-dom'

describe('DrawCanvas', () => {
  const mockOnCompleteClick = jest.fn()
  const hiddenWord = 'example'

  beforeEach(() => {
    render(
      <DrawCanvas
        hiddenWord={hiddenWord}
        onCompleteClick={mockOnCompleteClick}
      />
    )
  })

  test('renders компонента', () => {
    const hiddenWordElement = screen.getByTestId('hidden-word-paper')
    expect(hiddenWordElement).toBeInTheDocument()
  })

  test('рендер инструментов', () => {
    const toolsElement = screen.getByTestId('tools-paper')
    expect(toolsElement).toBeInTheDocument()
  })

  test('рендер кнопки', () => {
    const buttonElement = screen.getByTestId('complete-button')
    expect(buttonElement).toBeInTheDocument()
  })

  test('генерация картинки', () => {
    // Mock the canvas toDataURL method
    const mockToDataURL = jest
      .fn()
      .mockReturnValue('data:image/jpeg;base64,test-image')
    HTMLCanvasElement.prototype.toDataURL = mockToDataURL

    const buttonElement = screen.getByTestId('complete-button')
    fireEvent.click(buttonElement)

    expect(mockOnCompleteClick).toHaveBeenCalledWith(
      'data:image/jpeg;base64,test-image'
    )
    expect(mockToDataURL).toHaveBeenCalled()
  })
})
