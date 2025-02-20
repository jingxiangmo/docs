---
title: Connecting to S5i by Qutech in Python
sidebar_label: S5i
description: The S5i module is a RF source ranging from 40 MHz to 4 GHz, initially designed for reflectometry. The output power of the fundamental frequency ranges from -20 dBm to 14 dBm and can be controlled by both the front panel and via software. The RF output can be muted by an external source, which gives an on/off ratio of larger than 60 dB.
keywords: [rf signal generators, Qutech, QCodes Community]
slug: /instruments-database/rf-signal-generators/qutech/s5i
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395794/Instruments/RF%20Signal%20Generators/S5i/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# S5i

## Instrument Card

<div className="flex">

<div>

The S5i module is a RF source ranging from 40 MHz to 4 GHz, initially designed for reflectometry. The output power of the fundamental frequency ranges from -20 dBm to 14 dBm and can be controlled by both the front panel and via software. The RF output can be muted by an external source, which gives an on/off ratio of larger than 60 dB.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395794/Instruments/RF%20Signal%20Generators/S5i/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the S5i in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to an S5i RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Bool, Numbers
try:
    from spirack import S5i_module
except ImportError:
    raise ImportError(('The S5i_module class could not be found. '
                       'Try installing it using pip install spirack'))

class S5i(Instrument):
    """
    Qcodes driver for the S5i RF generator SPI-rack module.

    Args:
        name (str): name of the instrument.
        spi_rack (SPI_rack): instance of the SPI_rack class as defined in
            the spirack package. This class manages communication with the
            individual modules.
        module (int): module number as set on the hardware.
        frequency (float): RF frequency at startup, default is 41 MHz.
        enable_output (bool): Switch device output on or off, default is True.
        output_level (int): RF output level in dBm, default is 0 dBm.
    """

    def __init__(self, name, spi_rack, module, frequency=41e6,
                 enable_output=True, output_level=0, **kwargs):
        super().__init__(name, **kwargs)

        self.s5i = S5i_module(spi_rack, module, frequency=frequency,
                              enable_output=enable_output,
                              output_level=output_level)

        self.add_parameter('output_enabled',
                           label='RF output enabled',
                           initial_value=enable_output,
                           set_cmd=self.s5i.enable_output_soft,
                           vals=Bool(),
                           docstring='Switches output on/off')

        self.add_parameter('frequency_stepsize',
                           label='Frequency stepsize',
                           get_cmd=self._get_stepsize,
                           set_cmd=self.s5i.set_stepsize,
                           unit='Hz',
                           vals=Numbers(),
                           docstring='Set the optimal frequency stepsize for '
                                     'a minimal phase noise')

        self.add_parameter('frequency',
                           label='Frequency',
                           initial_value=frequency,
                           get_cmd=self._get_rf_frequency,
                           set_cmd=self.s5i.set_frequency,
                           unit='Hz',
                           vals=Numbers(40e6, 4e9),
                           docstring='Set RF frequency')

        self.add_parameter('power',
                           label='Output Power',
                           initial_value=output_level,
                           set_cmd=self.s5i.set_output_power,
                           unit='dBm',
                           vals=Numbers(-14, 20),
                           docstring='Set output power')


    def optimize_for_frequency(self):
        """
        This method finds the optimum stepsize for the set frequency.

        The stepsize affects the phase noise of the instrument. The smaller the
        stepsize, the greater is the phase noise. So this method sets the
        stepsize as large as possible for the current reference frequency.

        """
        stepsize = self.s5i.get_optimal_stepsize(self.s5i.rf_frequency)
        self.s5i.set_stepsize(stepsize)



    def _get_stepsize(self):
        return self.s5i.stepsize

    def _get_rf_frequency(self):
        return self.s5i.rf_frequency

# Create an instance of the SPI_rack class from the spirack package
spi_rack = SPI_rack()

# Create an instance of the S5i RF Signal Generator
s5i = S5i('s5i', spi_rack, module=1)

# Connect to the S5i RF Signal Generator
s5i.connect()

# Now you can use the S5i RF Signal Generator
# For example, you can enable the RF output
s5i.output_enabled(True)

# Set the frequency to 50 MHz
s5i.frequency(50e6)

# Set the output power to -10 dBm
s5i.power(-10)

# Disconnect from the S5i RF Signal Generator
s5i.disconnect()
```

Note: In the above code, make sure to replace `SPI_rack()` with the appropriate initialization code for your specific SPI rack.

</TabItem>
</Tabs>