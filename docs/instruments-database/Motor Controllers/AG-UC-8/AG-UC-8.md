---
title: Connecting to AG UC 8 by Newport in Python
sidebar_label: AG UC 8
description: The AG-UC8 Agilis™ Controller provides USB computer control of up to eight Agilis axes. Power is supplied through the same USB port used for communication. USB hubs may also be used for powering and communication, but must provide the required 5 V supply, e.g. must feature an external power supply. Two holes in the controller allow stacking of several controllers and attachment to optical tables.
keywords: [motor controllers, Newport, QCodes Community]
slug: /instruments-database/motor-controllers/newport/ag-uc-8
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692387419/Instruments/Motor%20Controllers/AG-UC-8/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AG UC 8

## Instrument Card

<div className="flex">

<div>

The AG-UC8 Agilis™ Controller provides USB computer control of up to eight Agilis axes. Power is supplied through the same USB port used for communication. USB hubs may also be used for powering and communication, but must provide the required 5 V supply, e.g. must feature an external power supply. Two holes in the controller allow stacking of several controllers and attachment to optical tables.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692387419/Instruments/Motor%20Controllers/AG-UC-8/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.newport.com/mam/celum/celum_assets/np/resources/Agilis_Piezo_Motor_Driven_Components_User_Manual.pdf?1">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806178/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
  <li>Vendor Website: <a href="https://www.newport.com/">here</a></li>
</ul>
</details>

## Connect to the AG UC 8 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

```python
from qcodes.instrument_drivers.newport.ag_uc8 import Newport_AG_UC8

# Create an instance of the Newport_AG_UC8 driver
controller = Newport_AG_UC8('controller', 'ASRL3')

# Connect to the instrument
controller.connect()

# Get the identification information of the instrument
idn = controller.get_idn()
print(idn)

# Reset the controller
controller.reset()

# Select channel 1
channel1 = controller.channels.channel_1

# Move the axis 1 of channel 1 to absolute position 500
channel1.axis1.move_abs(500)

# Move the axis 2 of channel 1 to relative position -100
channel1.axis2.move_rel(-100)

# Stop the movement of axis 1 of channel 1
channel1.axis1.stop()

# Disconnect from the instrument
controller.disconnect()
```
Note: Replace `'ASRL3'` with the appropriate VISA address for your instrument.

</TabItem>
</Tabs>