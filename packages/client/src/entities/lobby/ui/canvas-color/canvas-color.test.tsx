import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CanvasColor from './canvas-color'
import '@testing-library/jest-dom'
import { act } from 'react'

describe('CanvasColor Component', () => {
  let color: string, onColorChange: jest.Mock

  beforeEach(() => {
    color = '#ff0000' // Красный цвет
    onColorChange = jest.fn() // Мок функция
  })

  // test('отображает выбранный цвет корректно', () => {
  //   const { getByTestId } = render(
  //     <CanvasColor color={color} onColorChange={onColorChange} />
  //   );
  //   const colorPicker = getByTestId('color-picker')

  //   fireEvent.change(colorPicker, { target: { value: color } });
  //   expect(colorPicker).toHaveValue(color);
  // });

  test('должен отображать текст "Цвет кисти"', () => {
    const { getByText } = render(
      <CanvasColor color={color} onColorChange={onColorChange} />
    )
    expect(getByText('Цвет кисти')).toBeInTheDocument() // Проверяем наличие текста
  })
})
