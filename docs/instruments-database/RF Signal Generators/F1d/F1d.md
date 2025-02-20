---
title: Connecting to F1d	 by Qutech in Python
sidebar_label: F1d	
description: The F1d module is an IQ demodulator ranging from 40 MHz to 1.4 GHz. It was initially designed for reflectometry and to be used in conjuction with the S5i RF source and the M2j low noise amplifier.
keywords: [rf signal generators, Qutech, QCodes Community]
slug: /instruments-database/rf-signal-generators/qutech/f1d
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395719/Instruments/RF%20Signal%20Generators/F1d/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# F1d	

## Instrument Card

<div className="flex">

<div>

The F1d module is an IQ demodulator ranging from 40 MHz to 1.4 GHz. It was initially designed for reflectometry and to be used in conjuction with the S5i RF source and the M2j low noise amplifier.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395719/Instruments/RF%20Signal%20Generators/F1d/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806156/Instruments/Vendor%20Logos/QuTech.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics.

<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
  <li>Vendor Website: <a href="https://qutech.nl/">here</a></li>
</ul>
</details>

## Connect to the F1d	 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to an F1d RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Enum
from spirack import F1d_module

class F1d(Instrument):
    def __init__(self, name, spi_rack, module, **kwargs):
        super().__init__(name, **kwargs)

        self.f1d = F1d_module(spi_rack, module)

        self.add_parameter('remote_settings',
                           label='Remote settings',
                           get_cmd=self.get_remote_settings)

        self.add_parameter('IQ_filter',
                           label='IQ filter',
                           set_cmd=self.f1d.set_IQ_filter,
                           unit='MHz',
                           vals=Enum(1, 3, 10),
                           docstring='Low-pass filter after demodulation')

        self.add_parameter('I_gain',
                           label='I gain',
                           set_cmd=self.f1d.set_I_gain,
                           vals=Enum('low', 'mid', 'high'),
                           docstring='Gain of amplifier of demodulated signal')

        self.add_parameter('Q_gain',
                           label='Q gain',
                           set_cmd=self.f1d.set_Q_gain,
                           vals=Enum('low', 'mid', 'high'),
                           docstring='Gain of amplifier of demodulated signal')

        self.add_parameter('RF_level',
                           label='RF level',
                           get_cmd=self.f1d.get_RF_level,
                           unit='dBm')

        self.add_parameter('LO_level',
                           label='LO level',
                           get_cmd=self.f1d.get_LO_level,
                           unit='dBm')

        self.add_parameter('enable_remote',
                           label='Enable remote',
                           set_cmd=self.f1d.enable_remote,
                           docstring='getting the remote status is not possible')

        self.add_function('clear_rf_clip',
                          call_cmd=self.f1d.clear_rf_clip)

        self.add_function('is_rf_clipped',
                          call_cmd=self.f1d.rf_clipped)

    def get_remote_settings(self):
        return self.f1d.remote_settings

# Create an instance of the F1d RF Signal Generator
f1d = F1d(name='f1d', spi_rack=spi_rack_instance, module=1)

# Set the IQ filter to 3 MHz
f1d.IQ_filter(3)

# Set the I gain to 'high'
f1d.I_gain('high')

# Set the Q gain to 'mid'
f1d.Q_gain('mid')

# Get the RF level
rf_level = f1d.RF_level()

# Get the LO level
lo_level = f1d.LO_level()

# Enable remote mode
f1d.enable_remote(True)

# Clear RF clip
f1d.clear_rf_clip()

# Check if RF is clipped
is_rf_clipped = f1d.is_rf_clipped()
```

Note: In the above script, you need to replace `spi_rack_instance` with the actual instance of the `SPI_rack` class from the `spirack` package that you are using.

</TabItem>
</Tabs>