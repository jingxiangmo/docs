---
title: Connecting to Keysight M3202A by Keysight in Python
sidebar_label: Keysight M3202A
description: Keysight's M3202A PXIe arbitrary waveform generator offers 4 channels, on-board FPGA with optional software tools that enable real-time sequencing, inter-module synchronization, and graphical FPGA design environment.
keywords: [rf signal generators, Keysight, QCodes Community]
slug: /instruments-database/rf-signal-generators/keysight/keysight-m3202a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395775/Instruments/RF%20Signal%20Generators/Keysight-M3202A/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight M3202A

## Instrument Card

<div className="flex">

<div>

Keysight's M3202A PXIe arbitrary waveform generator offers 4 channels, on-board FPGA with optional software tools that enable real-time sequencing, inter-module synchronization, and graphical FPGA design environment.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395775/Instruments/RF%20Signal%20Generators/Keysight-M3202A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-05392/data-sheets/5992-1798.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight M3202A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Keysight M3202A RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.KeysightM3202A import M3202A

# Connect to the M3202A RF Signal Generator
awg = M3202A('awg', chassis=0, slot=2)

# Connect to the instrument
awg.connect()

# Now you can use the instrument for various operations
# For example, you can upload a waveform
waveform = [0, 0.1, 0.2, 0.3, 0.4, 0.5]
ref = awg.upload_waveform(waveform)

# Queue the waveform for output on channel 1
awg.awg_queue_waveform(1, ref, awg.SD_TriggerModes.EXTTRIG, 0, 1, 0)

# Disconnect from the instrument
awg.disconnect()
```

In the above code, we import the `M3202A` class from the `qcodes.instrument_drivers.Keysight.KeysightM3202A` module. Then, we create an instance of the `M3202A` class by providing the name, chassis number, and slot number of the RF Signal Generator. Finally, you can perform various operations on the `awg` object, such as calling its methods.

Note: Replace `some_method()` with the actual methods you want to use on the RF Signal Generator.

</TabItem>
</Tabs>