// 固定的导出一个defineEventHandle方法

export default defineEventHandler(event => {
  const query = getQuery(event) //getQuery是全局自带的获取query的方法
  const { id } = query
  return {
    msg: `请求的是 ${id}的个人信息`
  }
})
