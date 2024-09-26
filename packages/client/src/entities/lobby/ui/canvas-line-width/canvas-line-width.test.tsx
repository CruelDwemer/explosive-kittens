import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CanvasLineWidth from './canvas-line-width'
import '@testing-library/jest-dom'
import { act } from 'react'

describe('CanvasLineWidth Component', () => {
  let lineWidth: number, onChange: () => void

  beforeEach(() => {
    lineWidth = 10
    onChange = jest.fn()
  })

  test('должен корректно отображать начальную толщину линии', () => {
    const { getByLabelText } = render(
      <CanvasLineWidth lineWidth={lineWidth} onChange={onChange} />
    )
    const slider = getByLabelText('Default')
    expect(slider).toHaveAttribute('aria-valuenow', '10')
  })

  test('должен вызывать onChange при изменении толщины линии', () => {
    const { getByLabelText } = render(
      <CanvasLineWidth lineWidth={lineWidth} onChange={onChange} />
    )
    const slider = getByLabelText('Default')

    // Симулируем изменение значения слайдера
    fireEvent.change(slider, { target: { value: 15 } })

    expect(onChange).toHaveBeenCalledWith(15)
  })

  test('должен отображать текст "Толщина линии"', () => {
    const { getByText } = render(
      <CanvasLineWidth lineWidth={lineWidth} onChange={onChange} />
    )
    expect(getByText('Толщина линии')).toBeInTheDocument()
  })
})
