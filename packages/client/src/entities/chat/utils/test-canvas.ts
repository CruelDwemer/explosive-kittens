export const downloadImage = (bs64: string, name: string) => {
  const link = document.createElement('a')
  link.href = bs64
  link.download = `${name}.jpg` // имя загружаемого файла
  link.click()
}
