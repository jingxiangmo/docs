---
title: Connecting to Lakeshore 475 by Lakeshore in Python
sidebar_label: Lakeshore 475
description: Lake Shore combined the technical advantages of digital signal processing with over a decade of experience in precision magnetic field measurements to produce the first commercial digital signal processor (DSP) based Hall effect gaussmeter, the Model 475. DSP technology creates a solid foundation for accurate, stable, and repeatable field measurement while simultaneously enabling the gaussmeter to offer an unequaled set of useful measurement features. The Model 475 is intended for the most demanding DC and AC applications. In many cases, it provides the functionality of two or more instruments in a field measurement system.
keywords: [power meters, Lakeshore, InstrumentKit]
slug: /instruments-database/power-meters/lakeshore/lakeshore-475
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394013/Instruments/Power%20Meters/Lakeshore-475/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore 475

## Instrument Card

<div className="flex">

<div>

Lake Shore combined the technical advantages of digital signal processing with over a decade of experience in precision magnetic field measurements to produce the first commercial digital signal processor (DSP) based Hall effect gaussmeter, the Model 475. DSP technology creates a solid foundation for accurate, stable, and repeatable field measurement while simultaneously enabling the gaussmeter to offer an unequaled set of useful measurement features. The Model 475 is intended for the most demanding DC and AC applications. In many cases, it provides the functionality of two or more instruments in a field measurement system.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394013/Instruments/Power%20Meters/Lakeshore-475/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.optixs.cz/data/ke-stazeni/475_dsp_gaussmeter-d879.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813206/Instruments/Vendor%20Logos/Lakeshore_Cryotronics.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
  <li>Vendor Website: <a href="https://www.lakeshore.com/home">here</a></li>
</ul>
</details>

## Connect to the Lakeshore 475 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
import instrumentkit as ik
import instrumentkit.devices as ikd
import instrumentkit.io as iki

# Connect to the Lakeshore 475 Gaussmeter
device = ikd.Lakeshore475()
connection = iki.GPIBConnection(device_address=1)
gaussmeter = ik.Instrument(connection, device)

# Read the field value
field = gaussmeter.field
print(f"Field: {field}")

# Set the field units to Tesla
gaussmeter.field_units = ik.units.tesla

# Set the field setpoint to 0.05 Tesla
gaussmeter.field_setpoint = 0.05 * ik.units.tesla

# Change the measurement mode
gaussmeter.change_measurement_mode(
    mode=gaussmeter.Mode.dc,
    resolution=4,
    filter_type=gaussmeter.Filter.wide,
    peak_mode=gaussmeter.PeakMode.periodic,
    peak_disp=gaussmeter.PeakDisplay.positive
)
```

Note: This code assumes that you have already installed the Instrumentkit library.

</TabItem>
</Tabs>