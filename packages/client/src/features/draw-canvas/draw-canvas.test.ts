import generateImageFromCanvas from './draw-canvas'

describe('generateImageFromCanvas', () => {
  beforeEach(() => {
    // создаем имитацию DOM
    document.body.innerHTML = '<canvas id="lobby-canvas"></canvas>'
  })

  afterEach(() => {
    // очищаем имитацию DOM
    document.body.innerHTML = ''
  })

  it('должен вызвать onCompleteClick с изображением', () => {
    // создаем виртуальный DOM
    const dom = new JSDOM()
    const document = dom.window.document

    // добавляем канвас в DOM
    const canvas = document.createElement('canvas')
    canvas.id = 'lobby-canvas'
    document.body.appendChild(canvas)

    // имитируем onCompleteClick
    const onCompleteClick = jest.fn()
    generateImageFromCanvas(onCompleteClick)

    // проверяем, что onCompleteClick был вызван
    expect(onCompleteClick).toHaveBeenCalledTimes(1)

    // проверяем, что onCompleteClick был вызван с изображением
    const image = onCompleteClick.mock.calls[0][0]
    expect(image).toBeInstanceOf(String)
    expect(image.startsWith('data:image/jpeg;base64')).toBe(true)
  })

  it('не должен вызвать onCompleteClick, если canvas не найден', () => {
    // удаляем canvas из DOM
    document.body.innerHTML = ''

    // имитируем onCompleteClick
    const onCompleteClick = jest.fn()
    generateImageFromCanvas(onCompleteClick)

    // проверяем, что onCompleteClick не был вызван
    expect(onCompleteClick).not.toHaveBeenCalled()
  })
})
