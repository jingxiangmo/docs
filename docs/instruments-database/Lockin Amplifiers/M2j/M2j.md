---
title: Connecting to M2j by Qutech in Python
sidebar_label: M2j
description: The M2j module is a low noise amplifier initially designed for use in reflectometry. It has been optimised for use with the F1d IQ Demodulator with a 40 MHz to 1.5 GHz frequency range. This is reflected in the gain flatness of M2j-> within 3dB from 40 MHz to 1.4 GHz.
keywords: [lockin amplifiers, Qutech, QCodes Community]
slug: /instruments-database/lockin-amplifiers/qutech/m2j
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395777/Instruments/Lockin%20Amplifiers/M2j/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M2j

## Instrument Card

<div className="flex">

<div>

The M2j module is a low noise amplifier initially designed for use in reflectometry. It has been optimised for use with the F1d IQ Demodulator with a 40 MHz to 1.5 GHz frequency range. This is reflected in the gain flatness of M2j: within 3dB from 40 MHz to 1.4 GHz.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395777/Instruments/Lockin%20Amplifiers/M2j/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the M2j in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to an M2j Lockin Amplifier using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Numbers
import numpy as np

try:
    from spirack import M2j_module, SPI_rack
except ImportError:
    raise ImportError(('The M2j_module class could not be found. '
                       'Try installing it using pip install spirack'))


class M2j(Instrument):
    # The code for the M2j class is provided in the question

    def __init__(self, name: str, spi_rack: SPI_rack, module: int, **kwargs):
    """
    Qcodes driver for the M2j RF amplifier SPI-rack module.

    Args:
        name: name of the instrument.

        spi_rack: instance of the SPI_rack class as defined in
            the spirack package. This class manages communication with the
            individual modules.

        module: module number as set on the hardware.

    The gain can only be set on the device, but not read from the device.
    """
    super().__init__(name, **kwargs)

    self.m2j = M2j_module(spi_rack, module)
    self._max_gain_value = 4095
    self._min_gain_value = 0
    self._gain_parameters = {'slope': -1024.45, 'offset': 4450.63,
                                 'db_offset': 32}

    self.add_parameter('gain',
                           label='gain',
                           set_cmd=self._set_gain,
                           unit='dB',
                           vals=Numbers(min_value=33, max_value=110),
                           docstring='Amplifier gain in dB, range 33 to 110 dB')

    self.add_parameter('RF_level',
                           label='RF level',
                           get_cmd=self._meas_rf_level,
                           unit='dBm',
                           docstring='Measured RF power after amplification '
                                     '(not calibrated)')

    self.add_function('clear_rf_clip',
                          call_cmd=self.m2j.clear_rf_clip)
    self.add_function('is_rf_clipped',
                          call_cmd=self.m2j.rf_clipped)

    def _set_gain(self, gain):
        ref_scale = int(self._gain_parameters['slope'] * np.log(
            gain - self._gain_parameters['db_offset']) + self._gain_parameters[
                            'offset'])
        if ref_scale < self._min_gain_value:
            ref_scale = self._min_gain_value
        if ref_scale > self._max_gain_value:
            ref_scale = self._max_gain_value

        self.m2j.set_gain(ref_scale)

    def _meas_rf_level(self):
        return self.m2j.get_level()


# Create an instance of the SPI_rack class
spi_rack = SPI_rack()

# Connect to the M2j Lockin Amplifier
m2j = M2j('m2j', spi_rack, module=1)

# Set the gain of the amplifier
m2j._set_gain(50)

# Get the RF level after amplification
rf_level = m2j._meas_rf_level()
print(f"RF level: {rf_level} dBm")

# Clear RF clip
m2j.clear_rf_clip()

# Check if RF is clipped
is_rf_clipped = m2j.is_rf_clipped()
print(f"RF clipped: {is_rf_clipped}")
```

This script creates an instance of the `SPI_rack` class and then connects to the M2j Lockin Amplifier using the `M2j` class. It sets the gain of the amplifier to 50 dB, measures the RF level after amplification, clears the RF clip, and checks if the RF is clipped.

</TabItem>
</Tabs>