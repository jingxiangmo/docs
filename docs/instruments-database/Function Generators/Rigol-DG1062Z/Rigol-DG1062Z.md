---
title: Connecting to Rigol DG1062Z by Rigol in Python
sidebar_label: Rigol DG1062Z
description: The Rigol DG1062Z is a two channel Function / Arbitrary Waveform Generator to create high quality signals up to 60 MHz (Sine) with very low jitter (200 ps) and the new SiFi (SIgnal FIdelity) technology. Beside the two analog outputs, the device includes an USB-Host- and an USB-device interface.
keywords: [function generators, Rigol, QCodes]
slug: /instruments-database/function-generators/rigol/rigol-dg1062z
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395630/Instruments/Function%20Generators/Rigol-DG1062Z/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DG1062Z

## Instrument Card

<div className="flex">

<div>

The Rigol DG1062Z is a two channel Function / Arbitrary Waveform Generator to create high quality signals up to 60 MHz (Sine) with very low jitter (200 ps) and the new SiFi (SIgnal FIdelity) technology. Beside the two analog outputs, the device includes an USB-Host- and an USB-device interface.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395630/Instruments/Function%20Generators/Rigol-DG1062Z/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806170/Instruments/Vendor%20Logos/Rigol.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

RIGOL Technologies, Inc. specializes in development and production of test and measuring equipment and is one of the fastest growing Chinese companies in this sphere.
RIGOL’s line of products includes [digital storage oscilloscopes](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=227), [function/arbitrary waveform generators](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=230), [digital multimeters](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=233), PC-based devices compatible with LXI standard etc.

<ul>
  <li>Headquarters: Beijing, China</li>
  <li>Yearly Revenue (millions, USD): 23.0</li>
  <li>Vendor Website: <a href="https://www.rigol.com/">here</a></li>
</ul>
</details>

## Connect to the Rigol DG1062Z in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is a Python script that uses Qcodes to connect to a Rigol DG1062Z Function Generator:

```python
from qcodes.instrument_drivers.rigol.DG1062 import RigolDG1062

# Connect to the instrument
dg = RigolDG1062("dg", "TCPIP0::169.254.187.99::inst0::INSTR")

# Set the frequency, amplitude, and offset of channel 1
dg.channels[0].freq(1E3)  # Set frequency to 1 kHz
dg.channels[0].ampl(1.0)  # Set amplitude to 1 V
dg.channels[0].offset(0)  # Set offset to 0 V

# Enable the output of channel 1
dg.channels[0].state("ON")

# Trigger a burst on channel 1
dg.channels[0].burst.on("ON")  # Enable burst mode
dg.channels[0].burst.ncycles(10)  # Set number of cycles to 10
dg.channels[0].burst.trigger()  # Trigger the burst

# Disconnect from the instrument
dg.close()
```

This script connects to a Rigol DG1062Z Function Generator using the specified address. It then sets the frequency, amplitude, and offset of channel 1 using the `freq`, `ampl`, and `offset` parameters of the `RigolDG1062Channel` class. The output of channel 1 is enabled using the `state` parameter. Finally, a burst is triggered on channel 1 using the `on`, `ncycles`, and `trigger` parameters of the `RigolDG1062Burst` class.

Note: Make sure to replace the instrument address (`"TCPIP0::169.254.187.99::inst0::INSTR"`) with the actual address of your Rigol DG1062Z Function Generator.

</TabItem>
</Tabs>