export const useHeaderNav = () => {
  return useState('navStyle', () => {
    return {
      backgroundColor: 'transparent'
    }
  })
}
