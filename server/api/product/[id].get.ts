// 固定的导出一个defineEventHandle方法

export default defineEventHandler(async event => {
  // 这里通过 event.context.params.id来获取到id 的值
  const id = event.context.params?.id
  // 获取cookie 使用自带的parseCookies方法
  const cookie = parseCookies(event)
  const res = await $fetch(`/api/userInfo?id=${id}`)
  return res
})
