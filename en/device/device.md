# Device details

Click the **Device Management** -> **Devices** tab to display the device list, and click device name on the list page  to enter the device information page. This page includes 7 pages of **device information**, **sub-device**,**connection log**,**device event**,**functional data**,**chart data**,**device issue **  with features and displays as follows:

![device_](_assets/device_.png)



### Device Information

- Basic information: device name, subordinate products, authentication method, uplink system, etc. ;
- Authentication information: device number, key, and connection user name.
- Location information: Display device location information on the map;
- Two tabs in the upper right corner: display the status of the device separately, such as online and offline. The second tab shows the name of the protocol to which the device belongs.

Click the device basic information->location information, where the edit button in the upper right corner can be used to modify the related information. The  subordinate products of basic information cannot be modified, and the information that cannot be modified between different protocols may be different. Location information can open the map and drag the pin to select the location or search the location. It can also automatically define the corresponding location after entering longitude and latitude:

![select_location](_assets/select_location.png)


### Connection log

The connection log of the device is the online or offline information of the connected device. The displayed log information includes the online and offline of the device and the authentication failure.


### Sub device

The device uplink system can be another device. The sub device list under the device is displayed here , and the list operation is the same as the device list.



### Device event

- The device uplink message record is the message reported by the device. The page can display the latest reported message of the device in real time without refreshing. To view more data about device events, user can jump to the historical data page to view all the data, and filter and search based on the reporting time and data flow.

  ![device_evnets](_assets/device_evnets.png)


### Functional data

- The page can display the latest parsed information reported by the device without refreshing. The user can also view real-time data and historical data, which can be filtered and searched according to the reporting time and function points.

  ![device_capability_data](_assets/device_capability_data.png)


### Chart data

- For the data reported by the device,  the function point data under the data flow reported by the device can be displayed in the form of chart in real time according to different time dimensions. The chart showing the data can be displayed in a time range of 5 minutes, 1 hour, 6 hours, 1 day, and 1 week. If there are too many function point charts, you can click on the top left corner of the custom chart filter to display the function point data chart you are interested in. All data is real-time data.

  ![device_chart_data](_assets/device_chart_data.png)


### Device issue

- **ActorCloud** or **External Application** issued a message to the device. Click **Add Command** to send a message to the current device either instantly or periodically.

  - LwM2M device:

  Support the LwM2M standard command, fill in the corresponding PATH as the issue topic and issue it to the device. For the **write**, **execution** operation, additional execution instructions are required.

  - Other device:

    - Custom command: Customize the sending of messages in JSON format;
  - Platform command: select the data stream defined by the subordinate product, and send it after perfecting the function point;

- Timed tasks:

If the user wants to send a message to the device periodically or regularly,  he can add a scheduled task. The issue mode of all platforms supports timed issue. The timing task is issued in the same manner as the normal command. The timed task is divided into fixed timed and interval timed. The fixed timed task is issued after the time is specified. The interval time can be hourly, daily, or weekly. , and the command is issued after the interval is repeated.

![device_control](_assets/device_control.png)
