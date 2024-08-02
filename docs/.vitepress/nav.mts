// 导航
export default [
    {
        text: 'Notes',
        items: [
            { text: 'Allegro', 
                items: [
                    { text: '添加、删除层', link: 'Notes/Allegro/添加、删除层' },
                    { text: '修改symbol颜色', link: 'Notes/Allegro/修改每层symbol的颜色' },
                    { text: 'skill脚本导入', link: 'Notes/Allegro/skill脚本导入'},
                    { text: '取消fix状态', link: 'Notes/Allegro/取消fix状态' }
                ],
            },
            {
                text: 'Command',
                items: [
                    { text: 'Docker', link: 'Notes/Command/关于Docker命令' },
                    { text: 'Git', link: 'Notes/Command/关于git命令' },
                    { text: '算法EAS-RPC服务测试环境部署流程', link: 'Notes/Command/算法EAS-RPC服务测试环境部署流程' },
                    { text: 'Skill', link: 'Notes/Command/skill' },
                    { text: 'p90/p95/p99', link: 'Notes/Command/p90，p95，p99计算方式' },
                    { text: 'User&Passwd', link: 'Notes/Command/User&Passwd'},
                    { text: '评论', link: 'Notes/Command/评论'},
                    { text: '接口请求数据获取', link: 'Notes/Command/接口请求数据获取' }
                ]
            },
            { text: 'PCB',
                items: [
                    { text: 'PCB-toolbox', link: 'Notes/PCB/PCB工具箱' },
                    { text: 'PCB字典', link: 'Notes/PCB/PCB字典' },
                ]
            },
        ],
    },
    {
        text: 'Script',
        items: [
            { text: 'Compare_Console', link: 'Script/Compare_Console'},
            { text: 'case-result', link: 'Script/case-result' },
            { text: 'Compare_Html', link: 'Script/Compare_Html' },
            { text: 'deploy', link: 'Script/deploy' },
        ]
    }
]
