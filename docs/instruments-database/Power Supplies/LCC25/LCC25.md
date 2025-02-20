---
title: Connecting to LCC25 by Thorlabs in Python
sidebar_label: LCC25
description: The LCC25 is a liquid crystal controller compatible with all Thorlabs LC VariableRetarders. The LCC25 will drive most nematic liquid crystal devices. The liquid crystaldevice is connected to the BNC voltage output port. The amplitude of the output voltage,adjusted by the front panel knob, and external signal, and a computer via a USB interface,controls the retardance of the LC device.
keywords: [power supplies, Thorlabs, InstrumentKit]
slug: /instruments-database/power-supplies/thorlabs/lcc25
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394009/Instruments/Power%20Supplies/LCC25/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LCC25

## Instrument Card

<div className="flex">

<div>

The LCC25 is a liquid crystal controller compatible with all Thorlabs LC Variable
Retarders. The LCC25 will drive most nematic liquid crystal devices. The liquid crystal
device is connected to the BNC voltage output port. The amplitude of the output voltage,
adjusted by the front panel knob, and external signal, and a computer via a USB interface,
controls the retardance of the LC device.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394009/Instruments/Power%20Supplies/LCC25/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.thorlabs.com/_sd.cfm?fileName=18828-D02.pdf&partNumber=LCC25">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126009/Instruments/Vendor%20Logos/Thorlabs.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
  <li>Vendor Website: <a href="https://www.thorlabs.com/">here</a></li>
</ul>
</details>

## Connect to the LCC25 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
from instrumentkit import Instrument, ConnectionType
from instrumentkit.contrib.thorlabs import LCC25

# Connect to the LCC25 Power Supply
instrument = Instrument.from_uri("tcp://<ip_address>:<port>", LCC25, connection_type=ConnectionType.TCP_IP)

# Print the name and version number of the device
print(instrument.name)

# Set the frequency at which the LCC oscillates between the two voltages
instrument.frequency = 10  # 10 Hz

# Set the output mode of the LCC25
instrument.mode = LCC25.Mode.voltage1

# Enable the output
instrument.enable = True

# Set the voltage value for output 1
instrument.voltage1 = 5  # 5 Volts

# Set the voltage value for output 2
instrument.voltage2 = 10  # 10 Volts

# Save the current settings to memory
instrument.save()

# Disconnect from the LCC25 Power Supply
instrument.disconnect()
```

Note: Replace `<ip_address>` and `<port>` with the actual IP address and port number of the LCC25 Power Supply.

</TabItem>
</Tabs>