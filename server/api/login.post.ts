export default defineEventHandler(async event => {
  const body = await readBody(event) //readBody是全局封装好的获取body的方法
  const { username, password } = body
  //判断传递参数 数据为空报错
  if (!username || !password) {
    // createError可以直接抛出错误
    throw createError({
      statusCode: 400,
      statusMessage: '用户名密码不可以为空'
    })
  }
  //数据库操作
  return {
    mes: `已将${username}的数据存储成功,登录成功`
  }
})
