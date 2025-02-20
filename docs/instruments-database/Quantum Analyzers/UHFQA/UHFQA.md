---
title: Connecting to UHFQA by Zurich Instruments in Python
sidebar_label: UHFQA
description: The Zurich Instruments UHFQA Quantum Analyzer is a unique instrument for parallel readout of up to 10 superconducting or spin qubits with highest speed and fidelity. The UHFQA operates on a frequency span of up to ±600 MHz with nanosecond timing resolution, and it features 2 signal inputs and outputs for IQ base-band operation. Thanks to its low-latency signal processing chain of matched filters, real-time matrix operations, and state discrimination, the UHFQA supports the development of ambitious quantum computing projects for 100 qubits and more.
keywords: [quantum analyzers, Zurich Instruments, QCodes]
slug: /instruments-database/quantum-analyzers/zurich-instruments/uhfqa
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395698/Instruments/Quantum%20Analyzers/UHFQA/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# UHFQA

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments UHFQA Quantum Analyzer is a unique instrument for parallel readout of up to 10 superconducting or spin qubits with highest speed and fidelity. The UHFQA operates on a frequency span of up to ±600 MHz with nanosecond timing resolution, and it features 2 signal inputs and outputs for IQ base-band operation. Thanks to its low-latency signal processing chain of matched filters, real-time matrix operations, and state discrimination, the UHFQA supports the development of ambitious quantum computing projects for 100 qubits and more.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395698/Instruments/Quantum%20Analyzers/UHFQA/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziUHFQA_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

## Connect to the UHFQA in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is an example Python script that uses Qcodes to connect to a UHFQA Quantum Analyzer:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import UHFQA

# Connect to the UHFQA Quantum Analyzer
uhfqa = UHFQA("uhfqa", "dev1234")

# Print the instrument ID
print("Instrument ID:", uhfqa.IDN())

# Configure the channel
uhfqa.qachannels[0].configure_channel(
    input_range=0,
    output_range=0,
    center_frequency=5e9,
    mode="spectroscopy"
)

# Configure the result logger
uhfqa.qachannels[0].spectroscopy.configure_result_logger(
    result_length=1000,
    num_averages=10,
    averaging_mode="cyclic"
)

# Run the spectroscopy measurement
uhfqa.qachannels[0].spectroscopy.run()

# Wait for the measurement to finish
uhfqa.qachannels[0].spectroscopy.wait_done()

# Read the measurement data
data = uhfqa.qachannels[0].spectroscopy.read()

# Print the measurement data
print("Measurement Data:", data)

# Disconnect from the UHFQA Quantum Analyzer
uhfqa.close()
```

Note: Replace `"dev1234"` with the actual serial number of your UHFQA Quantum Analyzer.

</TabItem>
</Tabs>