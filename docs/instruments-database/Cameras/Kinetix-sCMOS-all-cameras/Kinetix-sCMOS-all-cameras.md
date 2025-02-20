---
title: Connecting to Kinetix sCMOS all-cameras by Pvcam in Python
sidebar_label: Kinetix sCMOS all-cameras
description: The Kinetix sCMOS delivers the highest speed and largest field of view with near-perfect 96% quantum efficiency
keywords: [cameras, Pvcam, Instrumental]
slug: /instruments-database/cameras/pvcam/kinetix-sCMOS-all-cameras
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395146/Instruments/Cameras/Kinetix-sCMOS-all-cameras/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kinetix sCMOS all-cameras

## Instrument Card

<div className="flex">

<div>

The Kinetix sCMOS delivers the highest speed and largest field of view with near-perfect 96% quantum efficiency

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395146/Instruments/Cameras/Kinetix-sCMOS-all-cameras/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.photometrics.com/wp-content/uploads/2023/03/Kinetix-Datasheet-Rev-A3-08032023.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692812958/Instruments/Vendor%20Logos/Teledyne_technologies.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Teledyne** provides enabling technologies to sense, transmit and analyze information for industrial growth markets.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 4614.0</li>
  <li>Vendor Website: <a href="https://www.teledyne.com">here</a></li>
</ul>
</details>

## Connect to the Kinetix sCMOS all-cameras in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumental" label="Instrumental">

Unfortunately, the provided code does not include any implementation for connecting to a Kinetix sCMOS camera using Instrumental. The code is specific to Photometrics cameras and the PVCam driver. 

To connect to a Kinetix sCMOS camera using Instrumental, you would need to find or develop a separate driver specifically for that camera model. The driver would need to implement the necessary functions and communication protocols to interact with the camera.

Once you have the driver, you can use Instrumental's `Instrument` class to connect to the camera and interact with it. Here's an example of how you can connect to a Kinetix sCMOS-all_cameras camera using Instrumental:

```python
from instrumental import instrument, list_instruments

# Find the Kinetix sCMOS-all_cameras camera in the list of available instruments
kinetix_cameras = [cam for cam in list_instruments() if cam['module'] == 'cameras.kinetix_scmos']

if len(kinetix_cameras) == 0:
    raise InstrumentNotFoundError("Kinetix sCMOS-all_cameras camera not found")

# Connect to the first Kinetix sCMOS-all_cameras camera found
camera = instrument(kinetix_cameras[0])

# Now you can use the camera object to control the camera and capture images
camera.start_live_video()
image = camera.get_captured_image()
camera.stop_live_video()

# Do something with the captured image
print(image)
```

Note that the above code assumes you have a driver for the Kinetix sCMOS-all_cameras camera and it is properly installed and accessible to Instrumental.

</TabItem>
</Tabs>