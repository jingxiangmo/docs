---
title: Connecting to R&S ZNB20 by Rohdes&Schwarz in Python
sidebar_label: R&S ZNB20
description: The R&S ZNB20 from R&S is a mid range vector network analyzer with two or four test ports for the frequency range from 100 kHz to 20 GHz. It has a dynamic range of 135 dB which makes it possible to perform precise measurements on wideband DUTs or components whose behavior at low frequencies is especially important. The analyzer has a large 12.1 inches touch screen interface which makes it easy to control and review test results. The ports on the R&S 20 have 2.92 mm Male connectors.
keywords: [network analyzers, Rohdes&Schwarz, QCodes]
slug: /instruments-database/network-analyzers/rohdes-schwarz/rs-znb20
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395636/Instruments/Network%20Analyzers/RS-ZNB20/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# R&S ZNB20

## Instrument Card

<div className="flex">

<div>

The R&S ZNB20 from R&S is a mid range vector network analyzer with two or four test ports for the frequency range from 100 kHz to 20 GHz. It has a dynamic range of 135 dB which makes it possible to perform precise measurements on wideband DUTs or components whose behavior at low frequencies is especially important. The analyzer has a large 12.1 inches touch screen interface which makes it easy to control and review test results. The ports on the R&S 20 have 2.92 mm Male connectors.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395636/Instruments/Network%20Analyzers/RS-ZNB20/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/Rohde-Schwarz-ZNB20-Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806194/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
  <li>Vendor Website: <a href="https://www.rohde-schwarz.com/ca/home_48230.html">here</a></li>
</ul>
</details>

## Connect to the R&S ZNB20 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a R&S ZNB20 Network Analyzer using Qcodes, you can use the following code:

```python
from qcodes.instrument_drivers.rohde_schwarz.ZNB.ZNB import ZNB

# Create an instance of the ZNB20 Network Analyzer
znb = ZNB('znb', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
znb.connect()
```

In the code above, we import the `ZNB` class from the `qcodes.instrument_drivers.rohde_schwarz.ZNB.ZNB` module. Then, we create an instance of the `ZNB` class with the desired name (`znb`) and the appropriate VISA resource string (`TCPIP0::192.168.1.1::inst0::INSTR`) for your specific instrument.

Finally, we call the `connect()` method to establish a connection to the instrument.

Note: Make sure to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the correct VISA resource string for your specific instrument.

</TabItem>
</Tabs>