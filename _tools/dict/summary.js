// 标题

const summary = [
  {
    title: '概览',
    path: 'README.md',
  },
  {
    title: 'ActorCloud 入门',
    path: 'introduction/introduction.md',
    child: [
      {
        title: '注册与登录',
        path: 'introduction/sign_in.md',
      },
      {
        title: '数据概率',
        path: 'introduction/data.md',
      },
      {
        title: '信息变更',
        path: 'introduction/account.md',
      },
    ],
  },
  {
    title: '设备快速接入指南',
    path: 'access_guide/access_guide.md',
  },
  {
    title: '设备管理',
    path: 'device/device_manage.md',
    child: [
      {
        title: '设备',
        path: 'device/device.md',
      },
      {
        title: '产品',
        path: 'device/product.md',
      },
      {
        title: '分组',
        path: 'device/group.md',
      },
    ],
  },
  {
    title: '安全管理',
    path: 'security/security.md',
    child: [
      {
        title: '证书',
        path: 'security/certs.md',
      },
      {
        title: '策略',
        path: 'security/policies.md',
      },
    ],
  },
  {
    title: '设备日志',
    path: 'log/log.md',
    child: [
      {
        title: '连接日志',
        path: 'log/connect_logs.md',
      },
      {
        title: '上行消息',
        path: 'log/upstream.md',
      },
      {
        title: '下行消息',
        path: 'log/downstream.md',
      },
    ],
  },
  {
    title: '测试中心',
    path: 'online/online.md',
    child: [
      {
        title: 'MQTT 客户端',
        path: 'online/mqtt.md',
      },
      {
        title: 'CoAP 客户端',
        path: 'online/coap.md',
      },
    ],
  },
  {
    title: '应用管理',
    path: 'application/app.md',
    child: [
      {
        title: '应用',
        path: 'application/application.md',
      },
      {
        title: '角色',
        path: 'application/roles.md',
      },
    ],
  },
  {
    title: '用户管理',
    path: 'usr/users.md',
    child: [
      {
        title: '用户',
        path: 'user/user.md',
      },
      {
        title: '用户邀请',
        path: 'user/nvitation.md',
      },
      {
        title: '角色',
        path: 'user/roles.md',
      },
      {
        title: '登陆日志',
        path: 'user/login_logs.md',
      },
    ],
  },
  {
    title: 'REST API',
    path: 'rest/rest.md',
  },
]

module.exports = summary
