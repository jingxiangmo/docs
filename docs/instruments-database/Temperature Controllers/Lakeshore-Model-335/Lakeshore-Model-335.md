---
title: Connecting to Lakeshore Model 335 by Lakeshore in Python
sidebar_label: Lakeshore Model 335
description: The Model 335 supports the industry's most advanced line of cryogenic temperature sensors as manufactured by Lake Shore, including diodes, resistance temperature detectors (RTDs), and thermocouples. The controller's zone tuning feature allows you to measure and control temperatures seamlessly from 300 mK to over 1,500 K. This feature automatically switches temperature sensor inputs when your temperature range goes beyond the usable range of a given sensor.
keywords: [temperature controllers, Lakeshore, QCodes]
slug: /instruments-database/temperature-controllers/lakeshore/lakeshore-model-335
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395612/Instruments/Temperature%20Controllers/Lakeshore-Model-335/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore Model 335

## Instrument Card

<div className="flex">

<div>

The Model 335 supports the industry's most advanced line of cryogenic temperature sensors as manufactured by Lake Shore, including diodes, resistance temperature detectors (RTDs), and thermocouples. The controller's zone tuning feature allows you to measure and control temperatures seamlessly from 300 mK to over 1,500 K. This feature automatically switches temperature sensor inputs when your temperature range goes beyond the usable range of a given sensor.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395612/Instruments/Temperature%20Controllers/Lakeshore-Model-335/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.lakeshore.com/docs/default-source/product-downloads/lstc_335_l.pdf?sfvrsn=becadb1e_3">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813206/Instruments/Vendor%20Logos/Lakeshore_Cryotronics.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
  <li>Vendor Website: <a href="https://www.lakeshore.com/home">here</a></li>
</ul>
</details>

## Connect to the Lakeshore Model 335 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is a Python script that uses Qcodes to connect to a Lakeshore Model 335 Temperature Controller:

```python
import qcodes as qc
from qcodes.instrument_drivers.Lakeshore.Model_335 import LakeshoreModel335

# Create an instance of the Lakeshore Model 335 driver
lakeshore = LakeshoreModel335("lakeshore", "TCPIP::192.168.1.1::INSTR")

# Connect to the instrument
lakeshore.connect()

# Print the instrument ID
print("Instrument ID:", lakeshore.IDN())

# Set the sensor type for channel A to platinum RTD
lakeshore.channel_A.sensor_type("platinum_rtd")

# Enable autoranging for channel A
lakeshore.channel_A.auto_range_enabled(True)

# Set the range for channel A to 1
lakeshore.channel_A.range(1)

# Enable compensation for channel A
lakeshore.channel_A.compensation_enabled(True)

# Set the preferred units for channel A to celsius
lakeshore.channel_A.units("celsius")

# Get the sensor type for channel A
print("Sensor type for channel A:", lakeshore.channel_A.sensor_type())

# Get the autoranging status for channel A
print("Autoranging enabled for channel A:", lakeshore.channel_A.auto_range_enabled())

# Get the range for channel A
print("Range for channel A:", lakeshore.channel_A.range())

# Get the compensation status for channel A
print("Compensation enabled for channel A:", lakeshore.channel_A.compensation_enabled())

# Get the preferred units for channel A
print("Preferred units for channel A:", lakeshore.channel_A.units())

# Set the output voltage for output 1 to 1 V
lakeshore.output_1.V(1)

# Set the output current for output 1 to 0.1 A
lakeshore.output_1.I(0.1)

# Set the output mode for output 1 to closed loop
lakeshore.output_1.mode("closed_loop")

# Get the output voltage for output 1
print("Output voltage for output 1:", lakeshore.output_1.V())

# Get the output current for output 1
print("Output current for output 1:", lakeshore.output_1.I())

# Get the output mode for output 1
print("Output mode for output 1:", lakeshore.output_1.mode())

# Disconnect from the instrument
lakeshore.disconnect()
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual address of your Lakeshore Model 335 Temperature Controller.

</TabItem>
</Tabs>