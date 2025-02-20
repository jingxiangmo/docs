---
title: Connecting to Keysight N5767A by Keysight in Python
sidebar_label: Keysight N5767A
description: The single output, 1500 W N5767A, provides universal AC input, GPIB, LAN, USB, LXI compliance, and analog/resistance control of output voltage and current. It delivers reliable performance and enhanced capabilities in a compact 1U package.
keywords: [power supplies, Keysight, PyMeasure]
slug: /instruments-database/power-supplies/keysight/keysight-n5767a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395441/Instruments/Power%20Supplies/Keysight-N5767A/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5767A

## Instrument Card

<div className="flex">

<div>

The single output, 1500 W N5767A, provides universal AC input, GPIB, LAN, USB, LXI compliance, and analog/resistance control of output voltage and current. It delivers reliable performance and enhanced capabilities in a compact 1U package.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395441/Instruments/Power%20Supplies/Keysight-N5767A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01235/data-sheets/5989-1330.pdf">here</a></p>

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

## Connect to the Keysight N5767A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">

Here is a Python script that uses Pymeasure to connect to a Keysight N5767A Power Supply:

```python
from pymeasure.instruments import Instrument
from pymeasure.adapters import VISAAdapter

class KeysightN5767A(Instrument):
    # Current (A)
    current_range = Instrument.control(
        ":CURR?", ":CURR %g",
        """ A floating point property that controls the DC current range in
        Amps, which can take values from 0 to 25 A.
        Auto-range is disabled when this property is set. """,
        validator=truncated_range,
        values=[0, 25],
    )

    current = Instrument.measurement(":MEAS:CURR?",
                                     """ Reads a setting current in Amps. """
                                     )

    # Voltage (V)
    voltage_range = Instrument.control(
        ":VOLT?", ":VOLT %g V",
        """ A floating point property that controls the DC voltage range in
        Volts, which can take values from 0 to 60 V.
        Auto-range is disabled when this property is set. """,
        validator=truncated_range,
        values=[0, 60]
    )

    voltage = Instrument.measurement("MEAS:VOLT?",
                                     """ Reads a DC voltage measurement in Volts. """
                                     )

    # _status (0/1)
    _status = Instrument.measurement(":OUTP?",
                                     """ Read power supply current output status. """
                                     )

    def enable(self):
        """ Enables the flow of current. """
        self.write(":OUTP 1")

    def disable(self):
        """ Disables the flow of current. """
        self.write(":OUTP 0")

    def is_enabled(self):
        """ Returns True if the current supply is enabled. """
        return bool(self._status)

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::22::INSTR")

# Create an instance of the KeysightN5767A power supply
power_supply = KeysightN5767A(adapter)

# Connect to the power supply
power_supply.open()

# Example usage
print("Current Range:", power_supply.current_range)
print("Voltage Range:", power_supply.voltage_range)

power_supply.enable()
print("Is Enabled:", power_supply.is_enabled())

power_supply.disable()
print("Is Enabled:", power_supply.is_enabled())

# Close the connection
power_supply.close()
```

This script creates a class `KeysightN5767A` that represents the Keysight N5767A Power Supply. It defines properties and methods to control and measure the current and voltage of the power supply.

The script then creates a VISA adapter using `VISAAdapter("GPIB0::22::INSTR")`, where `"GPIB0::22::INSTR"` is the address of the power supply. You may need to change this address to match your setup.

An instance of the `KeysightN5767A` class is created using the adapter, and the power supply is opened with `power_supply.open()`.

You can then use the properties and methods of the `KeysightN5767A` class to interact with the power supply. In the example usage section, it prints the current range, voltage range, enables and disables the power supply, and checks if it is enabled.

Finally, the connection is closed with `power_supply.close()`.

</TabItem>
</Tabs>