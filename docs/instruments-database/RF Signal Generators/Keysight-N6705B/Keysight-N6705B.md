---
title: Connecting to Keysight N6705B by Keysight in Python
sidebar_label: Keysight N6705B
description: The N6705B is a 4-slot mainframe that accepts up to 4 DC Power Modules, and up to 600 W total DC Power Module output power. The modules are ordered separately. N6705B accepts the same modules as N6700 Modular Power System, with over 30 modules to choose from
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-n6705b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395608/Instruments/RF%20Signal%20Generators/Keysight-N6705B/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N6705B

## Instrument Card

<div className="flex">

<div>

The N6705B is a 4-slot mainframe that accepts up to 4 DC Power Modules, and up to 600 W total DC Power Module output power. The modules are ordered separately. 

N6705B accepts the same modules as N6700 Modular Power System, with over 30 modules to choose from

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395608/Instruments/RF%20Signal%20Generators/Keysight-N6705B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01522/data-sheets/5989-6319.pdf">here</a></p>

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

## Connect to the Keysight N6705B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight N6705B Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_N6705B import Keysight_N6705B

# Create an instance of the N6705B instrument
n6705b = Keysight_N6705B('n6705b', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
n6705b.connect()

# Get the instrument identification
idn = n6705b.get_idn()
print(f"Instrument ID: {idn}")

# Set the voltage and current for channel 1
n6705b.ch1.source_voltage.set(3.0)
n6705b.ch1.source_current.set(0.5)

# Enable channel 1
n6705b.ch1.enable.set('on')

# Read the voltage and current from channel 1
voltage = n6705b.ch1.voltage.get()
current = n6705b.ch1.current.get()
print(f"Channel 1 - Voltage: {voltage} V, Current: {current} A")

print(f"Voltage: {voltage} V")
print(f"Current: {current} A")

# Disable channel 1
n6705b.ch1.enable('off')

# Close the connection to the instrument
n6705b.disconnect()
```

This script creates an instance of the `Keysight_N6705B` instrument, connects to it using the specified address (replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your instrument), gets the instrument identification, sets the voltage and current for channel 1, enables channel 1, reads the voltage and current from channel 1, and finally disconnects from the instrument.

</TabItem>
</Tabs>