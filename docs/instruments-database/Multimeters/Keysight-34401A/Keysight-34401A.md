---
title: Connecting to Keysight 34401A by Agilent in Python
sidebar_label: Keysight 34401A
description: The Keysight Technologies, Inc. 34401A multimeter gives you the performance you need for fast, accurate bench and system testing. The 34401A provides a combination of resolution, accuracy and speed that rivals DMMs costing many times more. 6½ digits of resolution
keywords: [multimeters, Agilent, QCodes]
slug: /instruments-database/multimeters/agilent/keysight-34401a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639188/Instruments/Multimeters/Keysight-34401A/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34401A

## Instrument Card

<div className="flex">

<div>

The Keysight Technologies, Inc. 34401A multimeter gives you the performance you need for fast, accurate bench and system testing. The 34401A provides a combination of resolution, accuracy and speed that rivals DMMs costing many times more. 6½ digits of resolution

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639188/Instruments/Multimeters/Keysight-34401A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-06774/data-sheets/5968-0162.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 34401A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 34401A Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_344XXA import Keysight_344XXA

# Create an instance of the Keysight_344XXA driver
multimeter = Keysight_344XXA('multimeter', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the multimeter
multimeter.connect()

# Perform measurements or set parameters using the multimeter object

# Disconnect from the multimeter
multimeter.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::INSTR'` with the actual VISA resource name or address of your multimeter.

</TabItem>
</Tabs>