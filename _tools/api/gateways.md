# 网关管理

## 查看网关列表

!#!GET_/api/v1/gateways?_page={page}&_limit={pageSize}!#!




## 查看网关详情

!#!GET_/api/v1/gateways/{id}!#!




## 查看网关下设备列表

!#!GET_/api/v1/devices?gateway={id}&_page={page}&_limit={pageSize}!#!




## 查看网关事件

!#!GET_/api/v1/gateways/{id}/events?_page={page}&_limit={pageSize}!#!




## 查看网关控制

!#!GET_/api/v1/gateways/{id}/control_logs?_page={page}&_limit={pageSize}!#!




## 查看网关下设备数据

!#!GET_/api/v1/gateways/{id}/devices_data?_page={page}&_limit={pageSize}!#!




## 创建网关

!#!POST_/api/v1/gateways!#!




## 编辑网关

!#!PUT_/api/v1/gateways/{id}!#!




## 删除网关

!#!DELETE_/api/v1/gateways?ids={ids}!#!




