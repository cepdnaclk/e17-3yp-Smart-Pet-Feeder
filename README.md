___
# **Smart Pet Feeder**
___
> _Saving one pet won't change the world_ , 
> _but for that one pet the world will change forever_

# Table Of Contents
-   [Overview](#overview)
-   [Introduction](#introduction)
-   [Solution Architecture](#solution-architecture)
-   [Design](#design)
-   [Data Flow](#data-flow)
-   [Circuit Diagram](#circuit-diagram)
-   [Hardware Components](#hardware-components)
-   [Testing](#testing)
-   [Budget](#budget)
-   [Timeline](#timeline)
-   [Team](#team)
-   [Related Links](#related-links)


# Overview
---
**Smart Pet Feeder**  is a product that helps you to take care of your pets. It will help you to build the relationship with your pet better and better even you are not in the home. Have you ever been worried about your pet's meals when you are away from your pet? Smart pet feeder provide the platform to come up with this problem

# **Introduction**
---
When people are getting busy, they forget to take care of their pets even though they love their pets. Taking care of pet's diet can be hard if they want to take good care of pet's health. Smart pet feeder is one of the best solutions for that. It is capable of feeding a pet, in absence of his master. So, though the master is not at home, his pet will not miss his foods.

**Smart pet feeder** can be controlled by using a mobile app or a website. A small camera, which is mounted on the pet feeder, allows the master to see the machine's surrounding and observe the pet's behavior.

If the master is too busy, even to operate it remotely throgh the mobile app or the website, he can switch on the automatic mode and schedule when to give foods. A container that is placed on the machine can be used to store the foods and when the pet is being fed, right amount can be passed to the plate


# Solution Architecture
---
![image](https://user-images.githubusercontent.com/73387610/127871559-e89e01b6-c18d-42d1-8f49-2998433af6f4.png)

The main device of our system is the pet feeder. It is connected to the Home Wifi and home Wifi is connected to the AWS server through the internet. In order to communicate with the AWS server there'll be a mobile application as well as a web application.

Initially the user needs to log into the mobile application or web application by entering their email and the password. After logging into the system, they can control the pet feeder in order to feed their pets. Users can get real time visualization of their pets through the camera which is mounted on the pet feeder. To get a clear view of the pets, users can rotate the camera through the UI. If the users are unable to manually feed the pets, they can use the scheduling option. So they can create a scheduling plan in order to feed their pets at a given time. Users can see the status(Remaining feeding times, Battery capacity) of the pet feeder through the UI or inbuilt display.
# Design
---
### 3D Design Of The Pet Feeder
* #### pet feeder

![Pet_feeder](https://user-images.githubusercontent.com/73440714/127187749-621f491e-7f70-4da6-a0af-d3c130a8ccf1.jpg)
![pet_feeder_2](https://user-images.githubusercontent.com/73440714/127188220-063196ac-f34d-42ad-9fb2-563043b2b82d.jpg)
This is the 3D Design of the pet feeder. Mainly it includes a food container and a camera.
* #### The Food Container


![Food_container](https://user-images.githubusercontent.com/73440714/127188367-7809dffb-1f09-4929-b3b9-efee0b81eabb.jpg)
This is a cylindrical shaped food container, which has diveded in to four partitions and it is rotatable through its axis. Every partition has a opening at the bottom, and there is a path to the food plate from the bottom of the cylinder. To serve foods the relevent partition should be coincided its opening with the path.
### UI Design
![image](https://user-images.githubusercontent.com/73387610/127871405-23c5cef0-be45-4f40-a665-a432814ae727.png)
Users can log into the system using the mobile application or web application by entering their email and password. After logging into the system, they can see the current status of the pet feeder. Status information includes remaining feeding times, scheduling plan and the battery capacity. They will be able to feed their pets by selecting the feeding option in the UI. And also they can get a real time visualization of their pets through the UI. To get a clear view, the UI provides another feature to rotate the inbuilt camera. There is a special feature called scheduling which allows users to schedule a feeding plan through the UI to feed their pets at a given time.

### Conceptual Schema
<img width="1680" alt="Screenshot 2021-08-28 at 21 44 05" src="https://user-images.githubusercontent.com/73387610/131224147-86841d8c-320e-4637-a8b5-81d1815ea52a.png">

### Flow Chart
![flow chart](https://user-images.githubusercontent.com/73387610/131224308-8d9af3d0-b697-41bc-83c1-2a357731d33b.jpeg)


### Data Model
![Data Model](https://user-images.githubusercontent.com/73387610/130924319-dde206a3-c9b7-47cb-9376-334481124472.png)
For the Back end database MongoDB is used. These are main four collections.Key-Value store schema is used since it gives high scalability and low model complexcity
# Data Flow
---
![data flow](https://user-images.githubusercontent.com/73387610/131223497-3ff93289-8bf3-4632-8c4a-38b50f87209e.jpeg)



The users of the pet feeder can schedule a plan or control it manually using the website or a mobile app. Then From the UI, data will get into the Web server and the microconprocessor in the controller (Rasapberry Pi) receive the data from the server. And also the users of the pet feeder can see their pet using the camera, which is in the feeding machine. Live stream data will be sent to the UI through the AWS cloud.

Mainly there are two different control units in the feeding machine.
* Food serving unit
* Visualizing unit

Food serving unit is responsible for food serving. This unit contains a stepper motor and a motor controller. In the machine there is a food container which has a cylindrical shape and it has divided in to four partitions. To serve the foods, the food container in the pet feeder should be rotated to a certain angle. That is done by using the stepper motor. The Raspberry Pi send the relevant control signals to the motor controller and the motor controller will control the rotation of the motor according to that signals.

Visualizing unit is responsible for live streaming. There is a 5MP Omnivision 5647 Camera Module in this unit. When user wants to get a real time visualization of his/her pet, he/she will be able to get the live stream data to the UI through this camera. Also a 0.91 Inch LCD Display has included to this unit, and it will be used to display the data such as battery level or feeding times etc.
# Circuit Diagram
---
![Screenshot (1091)](https://user-images.githubusercontent.com/73387610/130919125-d5edf435-0a33-4155-82da-e6bc050358bb.png)

# Hardware Components
---
### Controller Platform
![raspberry-pi-3bplus-1](https://user-images.githubusercontent.com/73387610/130919677-5fe25e18-ab1e-4974-a727-1b6ed1310eba.jpg)

As the main Controller Platform Raspberry Pi 3 Model B is used. It comes with pre loaded python programming language. It has 4 x ARM Cortex-A53 CPU which have 1.2GHz processing speed. Has a seperate Camera Serial Interface. Also 40 GPIO pins. Raspberry Pi 3 Model B comes with onboard Wi-Fi network interface which has about 38Mbps bandwith. 

![othercomponents](https://user-images.githubusercontent.com/73387610/131223561-d6a85053-e4c5-4eb4-9111-32143a79b316.jpeg)

As the other hardware components, Is has included an 5MP Omnivision 5647 Camera Module, 0.91 Inch LCD Display, L298N Dual Bridge DC Motor Controllers and 12v Stepper motor. There are some main reasons to use the 5MP Omnivision 5647 Camera Module such as its automatic UV adjustment, High sensitivity for low-light, low operating voltage, and ability to get the output as 8-bit RAW RGB data.
![image](https://user-images.githubusercontent.com/73387610/127871736-4185829d-020c-4e7f-824a-a3d1b0356e24.png)
As the power supply component, It has used a 12V Lithium battery of 3000mAh. Its Good capacity, lightweight, and rechargeability are very helpful to reduce the total weight and keep the machine active for a long time using battery current.
# Security Aspects
---
2 factor authentication for login is used as a security mechanism. When user trying to login to the system he will receive OTP to his mobile phone. So If an attacker steals the email and password of a user he cannot login to the system unless he has owner’s mobile phone. Another security mechanism is AWS Web application firewalls. The firewall helps to protect out API from common web attacks and bots. And also Json web token are used to communicate between API and the frontend. After user login to the system API will given a token to the frontend. So UI send request to the API along with the token. So the attackers cannot access our API without the token

# Testing
---
![sofwware](https://user-images.githubusercontent.com/73387610/131224388-f332d253-14e5-4e12-a5ac-f254c8c0dcb3.jpeg)


# Budget
---
![budget](https://user-images.githubusercontent.com/73387610/131223653-19988831-98a0-4517-9a16-6e67a009170a.jpeg)


# Timeline
---
![Timeline](https://user-images.githubusercontent.com/73387610/126746475-0e0ca3b4-7402-459c-b9f5-30f6185ac373.png)

# Team
- GUNATHILAKA R.M.S.M. , e17100@eng.pdn.ac.lk
- PERERA K.S.D., e17246@eng.pdn.ac.lk
- RATHNAYAKA R.L.D.A.S. ,e17284@eng.pdn.ac.lk

![Team](https://user-images.githubusercontent.com/73387610/126747165-2ed4a261-1063-4e21-985c-71d638d70ffb.jpg)

# Related links
---
* [University of Peradeniya](https://www.pdn.ac.lk/academics/academics.php/)
* [Faculty of Engineering](http://eng.pdn.ac.lk/)
* [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
* [Project Page](https://cepdnaclk.github.io/e17-3yp-Smart-Pet-Feeder/)


