export default defineNuxtRouteMiddleware((to, from) => {
  const limitList = ['/article']
  if (limitList.includes(to.fullPath)) {
    const token = useCookie('token')
    if (!token.value) {
      return navigateTo('/login') //一定要写return
    }
  }
})
