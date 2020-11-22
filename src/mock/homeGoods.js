//存放首页模拟的商品数据

//保存模拟数据路径
import Mock from 'mockjs'

//生成数据
const info = Mock.mock({
    'newsList|15': [
        {
            name: '@cname()',
            address: '@city(true)',
            id: '@increment(1)'
        }
    ]
})
console.log(info)
//拦截请求
// export default {
//     'get|/api/info': () => {
//         return {
//             status: 200,
//             msg: 'success',
//             data: info
//         }
//     }
// }
Mock.mock('/api/info','get',() => {
    return {
        status: 200,
        msg: '获取数据成功',
        data: 'info'
    }
})









