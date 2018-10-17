# 设备

## 查看设备列表

!#!GET_/api/v1/devices?_page={page}&_limit={pageSize}!#!




## 查看设备详情

!#!GET_/api/v1/devices/{id}!#!




## 创建设备

!#!POST_/api/v1/devices!#!




## 编辑设备

!#!PUT_/api/v1/devices/{id}!#!




## 删除设备

!#!DELETE_/api/v1/devices?ids={ids}!#!




## 导出设备

!#!GET_/api/v1/devices_export!#!




## 导入设备

!#!POST_/api/v1/devices_import!#!




## 设备事件

!#!GET_/api/v1/devices/{id}/events?_page={page}&_limit={pageSize}!#!




## 设备控制

!#!POST_/api/v1/device_publish!#!




## 新建设备定时任务

!#!POST_/api/v1/device_schedule_publish!#!




## 删除设备定时任务

!#!DELETE_/api/v1/device_schedule_publish?ids={ids}!#!




## 查看设备指标数据

!#!GET_/api/v1/metrics_data?deviceID={deviceID}&metricType=1!#!




## 查看设备原始数据

!#!GET_/api/v1/original_data?deviceID={deviceID}&metricType=2&time_unit=day!#!




