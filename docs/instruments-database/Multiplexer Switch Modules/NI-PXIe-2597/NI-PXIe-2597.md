---
title: Connecting to NI PXIe-2597 by National Instruments in Python
sidebar_label: NI PXIe-2597
description: 26.5 GHz, 50 Ω, 6x1 (SP6T) Terminated PXI RF Multiplexer Switch Module—The PXI‑2597 is ideal for passing high-order harmonics from PXI RF Signal Upconverter modules or routing multiple sources to PXI RF Signal Downconverter modules. The internal termination of the PXI‑2597 helps prevent high-power reflections that arise from open channels on the module. You can use the PXI‑2597 onboard relay count tracking feature to predict relay lifetime and reduce unexpected system downtime.
keywords: [multiplexer switch modules, National Instruments, QCodes Community]
slug: /instruments-database/multiplexer-switch-modules/national-instruments/ni-pxie-2597
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/v1692639357/Instruments/Multiplexer%20Switch%20Modules/NI-PXIe-2597/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# NI PXIe-2597

## Instrument Card

<div className="flex">

<div>

26.5 GHz, 50 Ω, 6x1 (SP6T) Terminated PXI RF Multiplexer Switch Module—The PXI‑2597 is ideal for passing high-order harmonics from PXI RF Signal Upconverter modules or routing multiple sources to PXI RF Signal Downconverter modules. The internal termination of the PXI‑2597 helps prevent high-power reflections that arise from open channels on the module. You can use the PXI‑2597 onboard relay count tracking feature to predict relay lifetime and reduce unexpected system downtime.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692639357/Instruments/Multiplexer%20Switch%20Modules/NI-PXIe-2597/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806169/Instruments/Vendor%20Logos/National_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
  <li>Vendor Website: <a href="https://www.ni.com/en-ca.html">here</a></li>
</ul>
</details>

## Connect to the NI PXIe-2597 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a NI PXIe-2597 Multiplexer Switch Module using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Enum

class NI_PXIe_2597(Instrument):
    def __init__(self, name, resource, **kwargs):
        super().__init__(name, **kwargs)
        self.add_parameter(name="channel",
                           get_cmd=self._get_channel,
                           set_cmd=self._set_channel,
                           vals=Enum(*tuple(["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", None])),
                           post_delay=1,
                           docstring='Name of the channel where the common "com" port is connected to',
                           label=f"{self.short_name} active channel")

    def _set_channel(self, name_to_connect):
        if name_to_connect is None:
            print("Disconnecting from all channels")
        else:
            print(f"Connecting to channel {name_to_connect}")

    def _get_channel(self):
        return "ch1"

# Connect to the NI PXIe-2597 Multiplexer Switch Module
switch = NI_PXIe_2597(name="switch", resource="PXI0::0::INSTR")

# Set the active channel
switch.channel("ch2")

# Get the active channel
active_channel = switch.channel()
print(f"Active channel: {active_channel}")
```

This script defines a custom instrument class `NI_PXIe_2597` that inherits from `qcodes.instrument.base.Instrument`. It adds a parameter `channel` to the instrument, which represents the active channel of the switch. The `set_cmd` method `_set_channel` is responsible for connecting/disconnecting the switch to/from the specified channel, and the `get_cmd` method `_get_channel` returns the active channel.

To use the script, you need to provide the appropriate `name` and `resource` parameters when creating an instance of the `NI_PXIe_2597` class. In the example above, the instrument is named "switch" and the resource address is "PXI0::0::INSTR". You can modify these values according to your setup.

After connecting to the instrument, you can set the active channel by calling `switch.channel("ch2")`, where "ch2" is the desired channel. To retrieve the active channel, you can call `switch.channel()`, which returns the current active channel.

Note: The script provided only demonstrates the basic usage of the instrument class and does not include the full functionality of the NI PXIe-2597 Multiplexer Switch Module.

</TabItem>
</Tabs>