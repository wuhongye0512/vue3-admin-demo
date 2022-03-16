/*
 * @Author: your name
 * @Date: 2022-03-16 16:13:48
 * @LastEditTime: 2022-03-16 16:17:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-demo\commitlint.config.js
 */
module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    //定义规则: 表示git提交的type必须在以下类型范围内
    'type-enum': [
        // 当前验证错误级别
        2,
        // 在什么情况下进行验证
        'always',
        // 泛型内容
        [
            'feat', // 新功能 feature
            'fix', // 修复 bug
            'docs', // 文档注释
            'style', // 代码格式(不影响代码运行的变动)
            'refactor', // 重构(既不增加新功能，也不是修复bug)
            'perf', // 性能优化
            'test', // 增加测试
            'chore', // 构建过程或辅助工具的变动
            'revert', // 回退
            'build' // 打包
        ]
    ],
    // subject大小写不做校验
    'subject-case': [0]
}
