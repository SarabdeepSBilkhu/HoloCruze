# GestureDrive 🚗✋

GestureDrive is a hand gesture-controlled robotic car that uses RF communication for seamless wireless control. The system includes a gesture-sensing controller built with an Arduino Nano and a car unit powered by an Arduino Uno alternative, controlled via RF transmitter/receiver modules.

## 🔧 Features

* **Gesture-Based Controller**
  Use natural hand movements to direct the car's motion in real-time.

* **Wireless RF Communication**
  Eliminates the need for Bluetooth modules like HC-05 by using efficient RF transmitter/receiver units.

* **Compact and Modular Design**
  The controller uses an Arduino Nano for portability, while the car uses a full-sized board for power handling.

* **Real-Time Feedback**
  Instant response to gesture input with minimal latency.

## 🧠 Technologies Used

* Arduino Nano (Controller)
* Arduino-compatible board (Car)
* RF Transmitter & Receiver Modules (433 MHz)
* MPU6050 Accelerometer + Gyroscope
* L293D Motor Driver
* Custom PCB and prototyping
* C++ (Arduino IDE)

## 🖼️ Project Structure

```
gesturedrive/
├── hardware/
│   ├── car_circuit_diagram.png
│   └── controller_circuit_diagram.png
├── firmware/
│   ├── controller_code.ino
│   └── car_code.ino
├── media/
│   ├── demo.gif
│   └── photos/
├── README.md
└── LICENSE
```

## 🚀 How It Works

1. The **controller** reads hand gestures using MPU6050.
2. Arduino Nano maps gestures to directional commands.
3. Commands are sent via RF transmitter to the **car**.
4. The car receives signals and moves accordingly using DC motors.

## 📦 Setup Instructions

1. Wire the MPU6050 to the Arduino Nano (I2C).
2. Connect the RF transmitter to the controller.
3. Assemble the receiver module and motor driver on the car.
4. Upload the respective sketches to each board.
5. Power up and test the system.

## 📽️ Demo

*Insert video or gif link showcasing live demonstration here*

## 📄 License

This project is licensed under the MIT License.
