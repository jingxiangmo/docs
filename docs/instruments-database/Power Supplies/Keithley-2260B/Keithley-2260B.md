---
title: Connecting to Keithley 2260B by Keithley in Python
sidebar_label: Keithley 2260B
description: Source a wide range of voltages and currents with the 360W, 720W, or 1080W Series 2260B Programmable DC Power Supplies. The 360W versions can output current of 36A, 13.5A, 4.5A, or 1.44A; the 720W models can output 72A, 27A, 9A, or 2.88A; and the 1080W instruments can output 108A, 40.5A, 13.5A or 4.32A. This wide range of output voltages and current, combined with multiple interface choices, makes the Series 2260B ideal for use in a wide range of applications, including research and design, quality control, and production test.
keywords: [power supplies, Keithley, PyMeasure]
slug: /instruments-database/power-supplies/keithley/keithley-2260b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395427/Instruments/Power%20Supplies/Keithley-2260B/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2260B

## Instrument Card

<div className="flex">

<div>

Source a wide range of voltages and currents with the 360W, 720W, or 1080W Series 2260B Programmable DC Power Supplies. The 360W versions can output current of 36A, 13.5A, 4.5A, or 1.44A; the 720W models can output 72A, 27A, 9A, or 2.88A; and the 1080W instruments can output 108A, 40.5A, 13.5A or 4.32A. This wide range of output voltages and current, combined with multiple interface choices, makes the Series 2260B ideal for use in a wide range of applications, including research and design, quality control, and production test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395427/Instruments/Power%20Supplies/Keithley-2260B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/1KW-73968-1_2260B_Programmable_DC_Power_Supplies_Datasheet_102122.pdf">here</a></p>

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

## Connect to the Keithley 2260B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">

Here is a Python script that uses Pymeasure to connect to a Keithley 2260B Power Supply:

```python
from pymeasure.instruments.keithley import Keithley2260B

# Create a connection to the Keithley 2260B Power Supply
power_supply = Keithley2260B("GPIB::1")

# Enable the output of the power supply
power_supply.output_enabled = True

# Set the voltage setpoint to 5 volts
power_supply.voltage_setpoint = 5

# Read the voltage, current, and power values from the power supply
voltage = power_supply.voltage
current = power_supply.current
power = power_supply.power

# Print the values
print("Voltage: {} V".format(voltage))
print("Current: {} A".format(current))
print("Power: {} W".format(power))

# Disable the output of the power supply
power_supply.output_enabled = False

# Close the connection to the power supply
power_supply.shutdown()
```

This script connects to a Keithley 2260B Power Supply using the GPIB interface. It enables the output of the power supply, sets the voltage setpoint to 5 volts, and then reads the voltage, current, and power values from the power supply. Finally, it disables the output of the power supply and closes the connection.

</TabItem>
</Tabs>