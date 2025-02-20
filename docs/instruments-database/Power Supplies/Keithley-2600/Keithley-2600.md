---
title: Connecting to Keithley 2600 by Keithley in Python
sidebar_label: Keithley 2600
description: Series 2600A System SourceMeter instruments are Keithley’s latest I-V source measurement unit(SMU) instruments for use as either bench-top I-V characterization tools or as building block components of multi-channel I-V test systems. For bench-top use, Series 2600A instruments feature anembedded TSP Express Software Tool that allows users to quickly and easily perform common I-Vtests without programming or installing software. For system level applications, the Series 2600A’sTest Script Processor (TSP) architecture, along with other new capabilities such as parallel test execution and precision timing, provides the highest throughput in the industry, lowering the cost of test.To simplify the testing, verification, and analysis of semiconductor components, the optional ACSBasic Edition software is also available.
keywords: [power supplies, Keithley, QCodes, PyMeasure]
slug: /instruments-database/power-supplies/keithley/keithley-2600
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692815018/Instruments/Power%20Supplies/Keithley-2600/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2600

## Instrument Card

<div className="flex">

<div>

Series 2600A System SourceMeter instruments are Keithley’s latest I-V source measurement unit
(SMU) instruments for use as either bench-top I-V characterization tools or as building block components of multi-channel I-V test systems. For bench-top use, Series 2600A instruments feature an
embedded TSP Express Software Tool that allows users to quickly and easily perform common I-V
tests without programming or installing software. For system level applications, the Series 2600A’s
Test Script Processor (TSP) architecture, along with other new capabilities such as parallel test execution and precision timing, provides the highest throughput in the industry, lowering the cost of test.
To simplify the testing, verification, and analysis of semiconductor components, the optional ACS
Basic Edition software is also available.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692815018/Instruments/Power%20Supplies/Keithley-2600/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.imperial.ac.uk/media/imperial-college/research-centres-and-groups/centre-for-bio-inspired-technology/7291001.PDF">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the Keithley 2600 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">


```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2600 import Keithley2600

# Connect to the Keithley 2600 Power Supply
keithley = Keithley2600('keithley', 'TCPIP::192.168.1.1::INSTR')

# Print the instrument ID
print(keithley.get_idn())

# Set the voltage and current limits
keithley.smua.limitv(10)  # Set voltage limit to 10V
keithley.smua.limiti(0.1)  # Set current limit to 0.1A

# Enable the output
keithley.smua.output(1)  # Turn on the output

# Set the voltage and current levels
keithley.smua.volt(5)  # Set the voltage to 5V
keithley.smua.curr(0.05)  # Set the current to 0.05A

# Measure the voltage and current
voltage = keithley.smua.volt()
current = keithley.smua.curr()
print(f"Voltage: {voltage}V, Current: {current}A")

# Disable the output
keithley.smua.output(0)  # Turn off the output

# Close the connection
keithley.close()
```

Note: Replace `'TCPIP::192.168.1.1::INSTR'` with the actual IP address or VISA resource address of your Keithley 2600 Power Supply.

This script connects to the Keithley 2600 Power Supply, sets the voltage and current limits, enables the output, sets the voltage and current levels, measures the voltage and current, disables the output, and then closes the connection.

Make sure you have Qcodes and the necessary dependencies installed before running this script.

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

Here is a Python script that uses Pymeasure to connect to a Keithley 2600 Power Supply:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2600

# Create a VISA adapter for communication
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")

# Connect to the Keithley 2600 Power Supply
keithley = Keithley2600(adapter)

# Set the source mode to voltage and apply a voltage of 5V
keithley.ChA.source_mode = 'voltage'
keithley.ChA.source_voltage = 5.0

# Enable the output
keithley.ChA.source_output = 'ON'

# Measure the voltage and current
voltage = keithley.ChA.voltage
current = keithley.ChA.current

# Print the measured values
print("Voltage: %.3f V" % voltage)
print("Current: %.3f A" % current)

# Disable the output and close the connection
keithley.ChA.source_output = 'OFF'
# Disconnect from the Keithley 2600 Power Supply
keithley.disconnect()
```

This script connects to a Keithley 2600 Power Supply using a VISA adapter. It sets the source mode to voltage and applies a voltage of 5V to channel A. Then, it enables the output and measures the voltage and current. Finally, it disables the output and closes the connection.

</TabItem>
</Tabs>