---
title: Connecting to Apsin 26G by Anapico in Python
sidebar_label: Apsin 26G
description: The APSINXXG is an analog signal generator (analog signal source) series covering RF and microwave frequency ranges from 9 kHz to 12, 20 and 26.5 GHz
keywords: [rf signal generators, Anapico, PyMeasure]
slug: /instruments-database/rf-signal-generators/anapico/apsin-26g
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395179/Instruments/RF%20Signal%20Generators/Apsin-26G/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Apsin 26G

## Instrument Card

<div className="flex">

<div>

The APSINXXG is an analog signal generator (analog signal source) series covering RF and microwave frequency ranges from 9 kHz to 12, 20 and 26.5 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395179/Instruments/RF%20Signal%20Generators/Apsin-26G/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.anapico.com/products/rf-signal-generators/single-output-rf-and-microwave-signal-generators/apsin-g-series-up-to-26-ghz/#:~:text=and%20outdoor%20fields.-,Download%20Datasheet,-Request%20for%20Quote">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125957/Instruments/Vendor%20Logos/Anapico.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**AnaPico** is an ISO 9001:2015 certified technology leader, developing, manufacturing and supplying RF and MW test & measurement instruments.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://www.anapico.com/">here</a></li>
</ul>
</details>

## Connect to the Apsin 26G in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">

```python
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import strict_range, strict_discrete_set


class APSIN26G(Instrument):
    """ Represents the Anapico APSIN26G Signal Generator with option 9K,
    HP and GPIB. """
    FREQ_LIMIT = [9e3, 26e9]
    POW_LIMIT = [-30, 27]

    power = Instrument.control(
        "SOUR:POW:LEV:IMM:AMPL?;", "SOUR:POW:LEV:IMM:AMPL %gdBm;",
        """ A floating point property that represents the output power
        in dBm. This property can be set. """,
        validator=strict_range,
        values=POW_LIMIT
    )
    frequency = Instrument.control(
        "SOUR:FREQ:CW?;", "SOUR:FREQ:CW %eHz;",
        """ A floating point property that represents the output frequency
        in Hz. This property can be set. """,
        validator=strict_range,
        values=FREQ_LIMIT
    )
    blanking = Instrument.control(
        ":OUTP:BLAN:STAT?", ":OUTP:BLAN:STAT %s",
        """ A string property that represents the blanking of output power
        when frequency is changed. ON makes the output to be blanked (off) while
        changing frequency. This property can be set. """,
        validator=strict_discrete_set,
        values=['ON', 'OFF']
    )
    reference_output = Instrument.control(
        "SOUR:ROSC:OUTP:STAT?", "SOUR:ROSC:OUTP:STAT %s",
        """ A string property that represents the 10MHz reference output from
        the synth. This property can be set. """,
        validator=strict_discrete_set,
        values=['ON', 'OFF']
    )

    def __init__(self, adapter, name="Anapico APSIN26G Signal Generator", **kwargs):
        super().__init__(
            adapter,
            name,
            **kwargs
        )

    def enable_rf(self):
        """ Enables the RF output. """
        self.write("OUTP:STAT 1")

    def disable_rf(self):
        """ Disables the RF output. """
        self.write("OUTP:STAT 0")
```

This code defines a new class `APSIN26G` that represents the Anapico APSIN26G Signal Generator. It inherits from the `Instrument` class provided by PyMeasure.

The class defines several properties such as `power`, `frequency`, `blanking`, and `reference_output` that can be controlled and queried using the `Instrument.control` method. Each property has a corresponding SCPI command for querying and setting its value.

The `power` property represents the output power in dBm and is validated using the `strict_range` validator with the limits defined in `POW_LIMIT`.

The `frequency` property represents the output frequency in Hz and is validated using the `strict_range` validator with the limits defined in `FREQ_LIMIT`.

The `blanking` property represents the blanking of output power when the frequency is changed. It can be set to either 'ON' or 'OFF' and is validated using the `strict_discrete_set` validator.

The `reference_output` property represents the 10MHz reference output from the synth. It can be set to either 'ON' or 'OFF' and is also validated using the `strict_discrete_set` validator.

The `enable_rf` method enables the RF output by sending the corresponding SCPI command.

The `disable_rf` method disables the RF output by sending the corresponding SCPI command.

The `APSIN26G` class can be used to connect to and control an Anapico APSIN26G Signal Generator using PyMeasure.

</TabItem>
</Tabs>