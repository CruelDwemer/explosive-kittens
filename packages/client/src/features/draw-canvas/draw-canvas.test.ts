// import React from 'react'
// import { render, fireEvent, waitFor } from '@testing-library/react'
// import DrawCanvas from './draw-canvas'

// describe('DrawCanvas', () => {
//   it('рендер hiddenWord и canvas', () => {
//     const hiddenWord = 'test'
//     const onCompleteClick = jest.fn()
//     const { getByText, getByTestId } = render(
//       <DrawCanvas hiddenWord={hiddenWord} onCompleteClick={onCompleteClick} />
//     )

//     expect(getByText(hiddenWord)).toBeInTheDocument()
//     expect(getByTestId('lobby-canvas')).toBeInTheDocument()
//   })

//   it('вызов onCompleteClick', () => {
//     const hiddenWord = 'test'
//     const onCompleteClick = jest.fn()
//     const { getByText, getByTestId } = render(
//       <DrawCanvas hiddenWord={hiddenWord} onCompleteClick={onCompleteClick} />
//     )

//     const button = getByText('Готово!')
//     fireEvent.click(button)

//     waitFor(() => {
//       expect(onCompleteClick).toHaveBeenCalledTimes(1)
//       expect(onCompleteClick).toHaveBeenCalledWith(
//         expect.stringContaining('data:image/jpeg;base64')
//       )
//     })
//   })

//   it('смена ширины кисти', () => {
//     const hiddenWord = 'test'
//     const onCompleteClick = jest.fn()
//     const { getByTestId } = render(
//       <DrawCanvas hiddenWord={hiddenWord} onCompleteClick={onCompleteClick} />
//     )

//     const slider = getByTestId('line-width-slider')
//     fireEvent.change(slider, { target: { value: 10 } })

//     expect(getByTestId('lobby-canvas')).toHaveAttribute('lineWidth', '10')
//   })

//   it('смена цвета', () => {
//     const hiddenWord = 'test'
//     const onCompleteClick = jest.fn()
//     const { getByTestId } = render(
//       <DrawCanvas hiddenWord={hiddenWord} onCompleteClick={onCompleteClick} />
//     )

//     const colorPicker = getByTestId('color-picker')
//     fireEvent.change(colorPicker, { target: { value: '#FF0000' } })

//     expect(getByTestId('lobby-canvas')).toHaveAttribute('color', '#FF0000')
//   })
// })
