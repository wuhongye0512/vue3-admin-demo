/*
 * @Author: your name
 * @Date: 2022-03-15 13:56:27
 * @LastEditTime: 2022-03-16 17:24:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-demo\.cz-config.js
 */
module.exports = {
    // 可选类型
    types: [{
            value: 'feat',
            name: '✨ feat:     新功能'
        },
        {
            value: 'fix',
            name: '🐛 fix:      修复'
        },
        {
            value: 'init',
            name: '🎉 init:     初始化'
        },
        {
            value: 'docs',
            name: '✏️ docs:     文档变更'
        },
        {
            value: 'style',
            name: '💄 style:    代码格式（不影响代码运行的变动）'
        },
        {
            value: 'refactor',
            name: '♻️ refactor: 重构（既不是增加featrue，也不是修复bug）'
        },
        {
            value: 'perf',
            name: '⚡ perf:     性能优化'
        },
        {
            value: 'test',
            name: '✅ test:     增加测试'
        },
        {
            value: 'chore',
            name: '🚀 chore:    构建过程或辅助工具的变动'
        },
        {
            value: 'revert',
            name: '⏪ revert:   回退'
        },
        {
            value: 'build',
            name: '📦‍ build:      打包'
        },
        {
            value: 'ci',
            name: '👷 ci:      CI 配置'
        }
    ],
    // 步骤
    messages: {
        type: '请选择提交的类型：',
        customScope: '请输入修改的范围（可选）',
        subject: '请简要描述提交（必填）',
        body: '请输入详细描述（可选）',
        footer: '请输入要关闭的描述（可选）',
        confirmCommit: '确定要使用以上信息提交吗？（y/n）'
    },
    // 跳过步骤
    skipQuestions: ['body', 'footer'],
    // limit subject length
    subjectLimit: 100
};
