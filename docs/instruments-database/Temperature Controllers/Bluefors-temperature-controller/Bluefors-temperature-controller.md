---
title: Connecting to Bluefors temperature controller
 by Bluefors in Python
sidebar_label: Bluefors temperature controller

description: With a modern and intuitive user interface, you gain direct control and overview of the dilution refrigerator system’s temperature status.
keywords: [temperature controllers, Bluefors, QCodes Community]
slug: /instruments-database/temperature-controllers/bluefors/bluefors-temperature-controller
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395710/Instruments/Temperature%20Controllers/Bluefors-temperature-controller/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bluefors temperature controller


## Instrument Card

<div className="flex">

<div>

With a modern and intuitive user interface, you gain direct control and overview of the dilution refrigerator system’s temperature status.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395710/Instruments/Temperature%20Controllers/Bluefors-temperature-controller/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://bluefors.com/blog/enhanced-user-experience-with-temperature-controller/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806205/Instruments/Vendor%20Logos/Bluefors.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Bluefors** is the world's leading manufacturer of ultra-low temperature dilution refrigerator measurement systems.

<ul>
  <li>Headquarters: Finland</li>
  <li>Yearly Revenue (millions, USD): 32.0</li>
  <li>Vendor Website: <a href="https://bluefors.com/">here</a></li>
</ul>
</details>

## Connect to the Bluefors temperature controller
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Bluefors temperature controller using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument_drivers.BlueFors.BlueFors import BlueFors

# Create an instance of the BlueFors instrument
bluefors = BlueFors(name='bluefors',
                    folder_path='/path/to/log/folder',
                    channel_vacuum_can=1,
                    channel_pumping_line=2,
                    channel_compressor_outlet=3,
                    channel_compressor_inlet=4,
                    channel_mixture_tank=5,
                    channel_venting_line=6,
                    channel_50k_plate=7,
                    channel_4k_plate=8,
                    channel_still=9,
                    channel_mixing_chamber=10,
                    channel_magnet=11)

# Connect to the BlueFors instrument
bluefors.connect_message()

# Get the temperature of the 50K plate
temperature_50k_plate = bluefors.temperature_50k_plate()

# Get the pressure of the vacuum can
pressure_vacuum_can = bluefors.pressure_vacuum_can()

# Print the temperature and pressure values
print(f"Temperature of the 50K plate: {temperature_50k_plate} K")
print(f"Pressure of the vacuum can: {pressure_vacuum_can} mBar")

# Disconnect from the BlueFors instrument
bluefors.disconnect()
```

Make sure to replace `/path/to/log/folder` with the actual path to the BlueFors log folder on your system. Also, adjust the channel numbers according to your specific setup.

Note: This script assumes that you have already installed the Qcodes Community package and its dependencies.

</TabItem>
</Tabs>