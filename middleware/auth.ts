export default defineNuxtRouteMiddleware((to, from) => {
  if (!localStorage.getItem('token')) {
    return navigateTo('/login') //一定要写return
  }
})
