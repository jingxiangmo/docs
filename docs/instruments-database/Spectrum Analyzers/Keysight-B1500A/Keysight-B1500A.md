---
title: Connecting to Keysight B1500A by Keysight in Python
sidebar_label: Keysight B1500A
description: It provides a wide range of measurement capabilities to cover the electrical characterization and evaluation of devices, materials, semiconductors, active/passive components, or virtually any other type of electronic device with uncompromised measurement reliability and efficiency. The B1500A modular architecture gives you the flexibility to upgrade when needed.
keywords: [spectrum analyzers, Keysight, QCodes, PyMeasure]
slug: /instruments-database/spectrum-analyzers/keysight/keysight-b1500a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692815186/Instruments/Spectrum%20Analyzers/Keysight-B1500A/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight B1500A

## Instrument Card

<div className="flex">

<div>

It provides a wide range of measurement capabilities to cover the electrical characterization and evaluation of devices, materials, semiconductors, active/passive components, or virtually any other type of electronic device with uncompromised measurement reliability and efficiency. The B1500A modular architecture gives you the flexibility to upgrade when needed.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692815186/Instruments/Spectrum%20Analyzers/Keysight-B1500A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-03960/technical-overviews/5991-2443.pdf">here</a></p>

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

## Connect to the Keysight B1500A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight B1500A Spectrum Analyzer using Qcodes, you can use the following code:

```python
from qcodes.instrument_drivers.Keysight.KeysightB1500 import KeysightB1500

# Create an instance of the KeysightB1500 instrument
b1500 = KeysightB1500('b1500', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
b1500.connect()

# Perform operations with the instrument

# Disconnect from the instrument
b1500.disconnect()
```

This code creates an instance of the `KeysightB1500` instrument with the name 'b1500' and the specified address ('TCPIP0::192.168.1.1::inst0::INSTR'). Then, it connects to the instrument using the `connect()` method. You can perform various operations with the instrument after connecting. Finally, it disconnects from the instrument using the `disconnect()` method.

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

Here is an example Python script that uses Pymeasure to connect to a Keysight B1500A Spectrum Analyzer:

```python
from pymeasure import Instrument

# Connect to the instrument
instrument = Instrument("GPIB::1::INSTR")

# Set the measurement mode to spectrum analyzer
instrument.write("MODE SA")

# Set the center frequency to 1 GHz
instrument.write("FREQ:CENT 1e9")

# Set the span to 1 MHz
instrument.write("FREQ:SPAN 1e6")

# Set the resolution bandwidth to 1 kHz
instrument.write("BAND:RES 1e3")

# Set the video bandwidth to 1 kHz
instrument.write("BAND:VID 1e3")

# Set the reference level to 0 dBm
instrument.write("DISP:TRAC:Y:RLEV 0")

# Start the measurement
instrument.write("INIT")

# Wait for the measurement to complete
instrument.wait_for_srq()

# Read the measurement data
data = instrument.ask("TRACE:DATA?")

# Print the measurement data
print(data)

# Disconnect from the instrument
instrument.disconnect()
```

This script connects to the instrument using the GPIB interface and sets up the measurement mode, center frequency, span, resolution bandwidth, video bandwidth, and reference level. It then starts the measurement, waits for it to complete, and reads the measurement data. Finally, it prints the measurement data and disconnects from the instrument.

</TabItem>
</Tabs>