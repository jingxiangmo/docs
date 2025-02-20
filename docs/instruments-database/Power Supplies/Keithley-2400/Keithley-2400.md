---
title: Connecting to Keithley 2400 by Keithley in Python
sidebar_label: Keithley 2400
description: Keithley’s Standard Series 2400 Source Measure Unit (SMU) Instruments offer four-quadrant precision voltage and current source/load coupled with measurement. Each SMU instrument is both a highly stable DC power source and a true instrument-grade 6½-digit multimeter. The power source characteristics include low noise, precision, and readback. The multimeter capabilities include high repeatability and low noise.
keywords: [power supplies, Keithley, QCodes, PyMeasure]
slug: /instruments-database/power-supplies/keithley/keithley-2400
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395429/Instruments/Power%20Supplies/Keithley-2400/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2400

## Instrument Card

<div className="flex">

<div>

Keithley’s Standard Series 2400 Source Measure Unit (SMU) Instruments offer four-quadrant precision voltage and current source/load coupled with measurement. Each SMU instrument is both a highly stable DC power source and a true instrument-grade 6½-digit multimeter. The power source characteristics include low noise, precision, and readback. The multimeter capabilities include high repeatability and low noise.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395429/Instruments/Power%20Supplies/Keithley-2400/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/1KW-2798-4_2400_SourceMeter_SMU_Datasheet_061622.pdf">here</a></p>

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

## Connect to the Keithley 2400 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 2400 Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument_drivers.tektronix.Keithley_2400 import Keithley2400

# Create an instance of the Keithley2400 instrument
keithley = Keithley2400("keithley", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
keithley.connect()

# Now you can use the instrument to perform measurements and control the power supply
# For example, you can set the voltage range
keithley.rangev(10)  # Set the voltage range to 10V

# You can also set the current range
keithley.rangei(1)  # Set the current range to 1A

# Set the voltage compliance
keithley.compliancev(5)  # Set the voltage compliance to 5V

# Set the current compliance
keithley.compliancei(0.1)  # Set the current compliance to 0.1A

# Set the output mode to voltage
keithley.mode("VOLT")  # Set the mode to voltage

# Set the sense mode to voltage
keithley.sense("VOLT")  # Set the sense mode to voltage

# Enable the output
keithley.output("on")  # Turn on the output

# Set the voltage level
keithley.volt(2)  # Set the voltage level to 2V

# Read the current
current = keithley.curr()  # Read the current

# Read the resistance
resistance = keithley.resistance()  # Read the resistance

# Disable the output
keithley.output("off")  # Turn off the output

# Disconnect from the instrument
keithley.disconnect()
```

This script creates an instance of the `Keithley2400` instrument and connects to it using the specified address. It then uses the instrument's parameters and methods to control the power supply, set voltage and current ranges, set compliance values, set the output mode and sense mode, enable/disable the output, and read voltage, current, and resistance values. Finally, it disconnects from the instrument.

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.instruments.keithley import Keithley2400

# Connect to the Keithley 2400
keithley = Keithley2400("GPIB::1")

# Configure the measurement settings
keithley.measure_voltage()
keithley.voltage_range = 10
keithley.voltage_nplc = 1

# Enable the source and set the voltage
keithley.enable_source()
keithley.source_voltage = 5

# Perform a measurement
voltage = keithley.voltage
print("Measured voltage:", voltage)

# Disable the source and disconnect from the instrument
keithley.disable_source()
keithley.disconnect()
```

This script connects to a Keithley 2400 Power Supply using the GPIB interface (replace "GPIB::1" with the appropriate address for your setup). It configures the instrument to measure voltage, sets the voltage range and integration time, enables the source, sets the desired voltage, performs a measurement, and then disables the source and disconnects from the instrument.

Note: Make sure you have the `pymeasure` package installed before running this script.

</TabItem>
</Tabs>