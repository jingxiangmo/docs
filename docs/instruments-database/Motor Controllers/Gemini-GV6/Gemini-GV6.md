---
title: Connecting to Gemini GV6 by Parker in Python
sidebar_label: Gemini GV6
description: Incorporates all of the powerful features of the Gemini GV digital servo driveProvides six power ranges for up to 11.8 kW of continuous powerStand-alone servo controller and drive in one small packageFull ASCII communications capabilityControl features such as registration, motion profiles, S-curve velocity profiling and conditional statementsProgram storage-> Up to 32 programs or 190 lines of program codeDaisy chain up to 99 unitsSimplified configuration and tuning8 programmable inputs and 6 programmable outputsWide range of PWM frequencies for linear motor support
keywords: [motor controllers, Parker, PyMeasure]
slug: /instruments-database/motor-controllers/parker/gemini-gv6
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395446/Instruments/Motor%20Controllers/Gemini-GV6/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gemini GV6

## Instrument Card

<div className="flex">

<div>

Incorporates all of the powerful features of the Gemini GV digital servo drive
Provides six power ranges for up to 11.8 kW of continuous power
Stand-alone servo controller and drive in one small package
Full ASCII communications capability
Control features such as registration, motion profiles, S-curve velocity profiling and conditional statements
Program storage: Up to 32 programs or 190 lines of program code
Daisy chain up to 99 units
Simplified configuration and tuning
8 programmable inputs and 6 programmable outputs
Wide range of PWM frequencies for linear motor support

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395446/Instruments/Motor%20Controllers/Gemini-GV6/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://divapps.parker.com/divapps/emn/prior_version_compumotor/cat/english/pgs95_113_gem_servo.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125990/Instruments/Vendor%20Logos/Parker.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Parker Hannifin Corporation, originally Parker Appliance Company, usually referred to as just Parker, is an American corporation specializing in motion and control technologies.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 18000.0</li>
  <li>Vendor Website: <a href="https://www.parker.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Gemini GV6 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.instruments import SerialInstrument
from time import sleep

class ParkerGV6(SerialInstrument):
    degrees_per_count = 0.00045

    def __init__(self, port):
        super().__init__(port, baud_rate=9600, timeout=500, write_termination="\r")
        self.set_defaults()

    def set_defaults(self):
        self.echo = False
        self.set_hardware_limits(False, False)
        self.use_absolute_position()
        self.average_acceleration = 1
        self.acceleration = 1
        self.velocity = 3

    def reset(self):
        self.write("RESET")
        sleep(5)
        self.set_defaults()
        self.enable()

    def enable(self):
        self.write("DRIVE1")

    def disable(self):
        self.write("DRIVE0")

    @property
    def status(self):
        return self.ask("TASF").split("\r\n\n")

    def is_moving(self):
        return self.position is None

    @property
    def angle(self):
        position = self.position
        if position is not None:
            return position * self.degrees_per_count
        else:
            return None

    @angle.setter
    def angle(self, angle):
        self.position = int(angle * self.degrees_per_count**-1)

    @property
    def angle_error(self):
        position_error = self.position_error
        if position_error is not None:
            return position_error * self.degrees_per_count
        else:
            return None

    @property
    def position(self):
        match = re.search(r'(?<=TPE)-?\d+', self.ask("TPE"))
        if match is None:
            return None
        else:
            return int(match.group(0))

    @position.setter
    def position(self, counts):
        self.write("D" + str(int(counts)))

    @property
    def position_error(self):
        match = re.search(r'(?<=TPER)-?\d+', self.ask("TPER"))
        if match is None:
            return None
        else:
            return int(match.group(0))

    def move(self):
        self.write("GO")

    def stop(self):
        self.write("S")

    def kill(self):
        self.write("K")

    def use_absolute_position(self):
        self.write("MA1")
        self.write("MC0")

    def use_relative_position(self):
        self.write("MA0")
        self.write("MC0")

    def set_hardware_limits(self, positive=True, negative=True):
        if positive and negative:
            self.write("LH3")
        elif positive and not negative:
            self.write("LH2")
        elif not positive and negative:
            self.write("LH1")
        else:
            self.write("LH0")

    def set_software_limits(self, positive, negative):
        self.write("LSPOS%d" % int(positive))
        self.write("LSNEG%d" % int(negative))

    @property
    def echo(self):
        pass

    @echo.setter
    def echo(self, enable=False):
        if enable:
            self.write("ECHO1")
        else:
            self.write("ECHO0")

    @property
    def acceleration(self):
        pass

    @acceleration.setter
    def acceleration(self, acceleration):
        self.write("A" + str(float(acceleration)))

    @property
    def average_acceleration(self):
        pass

    @average_acceleration.setter
    def average_acceleration(self, acceleration):
        self.write("AA" + str(float(acceleration)))

    @property
    def velocity(self):
        pass

    @velocity.setter
    def velocity(self, velocity):
        self.write("V" + str(float(velocity)))

# Example usage
if __name__ == "__main__":
    motor = ParkerGV6("COM1")  # Replace "COM1" with the actual serial port
    motor.enable()
    motor.angle = 90  # Move to 90 degrees
    motor.move()
    sleep(5)
    motor.stop()
    motor.disable()
    motor.close()
```

This script creates a class `ParkerGV6` that inherits from `SerialInstrument` and represents the Parker Gemini GV6 Servo Motor Controller. It provides methods and properties to interact with the instrument, such as enabling/disabling the motor, setting the angle, moving the motor, and reading the motor status.

In the example usage section, it creates an instance of `ParkerGV6` with the serial port specified (replace "COM1" with the actual serial port). It enables the motor, sets the angle to 90 degrees, moves the motor, waits for 5 seconds, stops the motor, disables the motor, and closes the connection.

Note: This script assumes that you have already installed the `pymeasure` package.

</TabItem>
</Tabs>