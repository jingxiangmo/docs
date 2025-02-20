---
title: Connecting to Keithley 2601B by Keithley in Python
sidebar_label: Keithley 2601B
description: The Model 2601B SourceMeter SMU instrument, is a new and improved one channel SMU instrument with a tightly integrated four-quadrant design that allows it to simultaneously source and measure both voltage and current to boost productivity in applications ranging from R&D to automated production test. In addition to retaining all the features of the Model 2601A, the Model 2601B has 6½-digit resolution, USB 2.0 connectivity, and software command emulation of the Model 2400 SourceMeter SMU Instrument that enables easy migration of legacy test code. The Model 2601B model is equipped with Keithley's high speed TSP technology (over 190% faster than traditional PC-to-instrument communication techniques,) which dramatically improves the system-level speed to lower the cost of test.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-database/power-supplies/keithley/keithley-2601b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395553/Instruments/Power%20Supplies/Keithley-2601B/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2601B

## Instrument Card

<div className="flex">

<div>

The Model 2601B SourceMeter SMU instrument, is a new and improved one channel SMU instrument with a tightly integrated four-quadrant design that allows it to simultaneously source and measure both voltage and current to boost productivity in applications ranging from R&D to automated production test. In addition to retaining all the features of the Model 2601A, the Model 2601B has 6½-digit resolution, USB 2.0 connectivity, and software command emulation of the Model 2400 SourceMeter SMU Instrument that enables easy migration of legacy test code. The Model 2601B model is equipped with Keithley's high speed TSP technology (over 190% faster than traditional PC-to-instrument communication techniques,) which dramatically improves the system-level speed to lower the cost of test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395553/Instruments/Power%20Supplies/Keithley-2601B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-2601-Datasheet.pdf">here</a></p>

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

## Connect to the Keithley 2601B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here's an example Python script that uses Qcodes to connect to a Keithley 2601B Power Supply:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2600_channels import Keithley2600

# Create a connection to the Keithley 2601B Power Supply
keithley = Keithley2600("keithley", "TCPIP::192.168.1.1::INSTR")

# Print the instrument ID
print(keithley.get_idn())

# Set the voltage and current limits
keithley.smua.limitv(10)  # Set voltage limit to 10V
keithley.smua.limiti(0.1)  # Set current limit to 0.1A

# Enable the output
keithley.smua.output(1)  # Turn on the output

# Set the voltage and current levels
keithley.smua.volt(5)  # Set voltage to 5V
keithley.smua.curr(0.05)  # Set current to 0.05A

# Measure the voltage and current
voltage = keithley.smua.volt()
current = keithley.smua.curr()
print(f"Voltage: {voltage}V, Current: {current}A")

# Disable the output
keithley.smua.output(0)  # Turn off the output

# Close the connection
keithley.close()
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual IP address or VISA resource address of your Keithley 2601B Power Supply.

</TabItem>
</Tabs>