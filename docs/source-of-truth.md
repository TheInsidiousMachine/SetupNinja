# SetupNinja Source Of Truth

Source recording: the Clayton kickoff call is stored locally in this workspace and is intentionally not committed.

Transcribed on 2026-08-19 with faster-whisper `small.en`.

## Product Direction

SetupNinja is a phone-first shop setup assistant and G-code expert. The operator should be able to take a photo of a print, add only the necessary dimensions, stock details, and available tools, then get a controller-ready G-code program.

The software must prioritize deterministic machining math. AI can help interpret the print, infer intent, organize setup data, and guide the operator, but every toolpath, compensation value, feed/speed decision, and safety check must be calculated by explicit, auditable math.

## Core Jobs

- Read a print/photo and turn it into a machinable part program with minimal operator input.
- Ask for only the missing dimensions, stock measurements, machine profile, and available tools needed to program the job correctly.
- Generate G-code using machining best practices for tool life, cut quality, and machine load.
- Edit newly generated G-code or existing complex G-code posted from CAM software.
- Recalculate changed cut parameters correctly, including tool compensation math.
- Move the resulting G-code from a phone to CNC controls through phone storage, USB mass-storage style workflows, or compact flash adapters.
- Run on Android, either directly or with a tunnel to a Linux machine when local compute is needed.
- Reduce shop setup time enough that a machinist can go from print to machine much faster than desktop CAM setup.

## Non-Negotiables

- Wrong G-code can damage a machine even without stock loaded.
- Machine safety matters more than impressive generation.
- The toolpath engine must be deterministic and testable.
- The user must be able to inspect and edit the generated result before using it.
- The phone/controller transfer workflow is part of the product, not an afterthought.

## Current Demo Interpretation

The current repo already contains a deterministic TypeScript CAM kernel, STL parsing, height-map rasterization, rough/finish toolpath planning, machine/material/tool catalogs, and a live adaptive feed simulation. These remain useful as SetupNinja's first working demo layer while the product surface shifts from "adaptive CAM demo" to "print/photo to verified G-code setup assistant."

## Transcript

```text
[0000.00 -> 0004.80] If you want to describe what you want to build, then I can take this phone call and summarize
[0004.80 -> 0009.60] it all and I can have my agents work on that. I'll hopefully give you a functional demo so you
[0009.60 -> 0017.26] wake up to and use tomorrow. The piece of software which I would like to build could most
[0017.26 -> 0026.14] accurately be described as a g-code savant which could at the snap of a shutter look at a photo
[0026.14 -> 0032.78] of a print and make a program for a part after giving only a little bit of info about stuff,
[0032.78 -> 0048.85] dimensions, and tools available. Oh Clay, are you still there?
[0054.43 -> 0057.63] It just cut out for the last 20 seconds. You're going to have to restart from
[0058.67 -> 0068.66] how it can see the tools available. Yeah, see the tools available and generate
[0069.62 -> 0078.34] g-code to create a part from a print with only the necessary info using best practices for machining
[0078.34 -> 0083.70] and get good tool life, good cut quality, easy on the machine, and be able to just
[0084.90 -> 0089.22] post a new g-code file and make edits to it or even edit an existing g-code file
[0089.86 -> 0094.98] even if it was a complex file posted through CAM software and then change different parameters
[0094.98 -> 0100.74] about the cut and ensure that it's doing all the math correctly for tool compensation.
[0104.02 -> 0110.74] That's about it. So what would you need in order for this to be usable at your job tomorrow? What
[0110.74 -> 0114.26] would it have to be able to accomplish and what software would it have to be able to run on?
[0116.54 -> 0136.40] To be most useful, it would run on including Android even if it has to just create a tunnel
[0136.40 -> 0143.60] from another Linux machine to the Android in order to use the wireless. Okay, I can make
[0143.60 -> 0147.04] Kotlin apps or Android apps and compile them to APK for you to download.
[0148.56 -> 0152.72] That would be a killer, but what it needs to be able to do is communicate through my phone
[0154.56 -> 0162.32] to my storage system on my phone so I can read a g-code file onto any controller from my phone
[0162.32 -> 0171.49] as if it was a USB. If it could do that, then I would be able to put my laptop in the corner
[0171.49 -> 0176.85] or just run it on my phone, plug it into the machine, and take a picture of the print,
[0177.41 -> 0185.17] take measurements of the stock, plug it in, and hit go and we could eliminate so much of the
[0185.17 -> 0193.17] setup time that it would be absurd. It would be worth its weight in diamonds to any shop and imagine
[0193.17 -> 0199.49] that at every shop. Something like this would be worth untold amounts of money in the right hands.
[0200.53 -> 0204.37] Okay, interesting. So do you have a cable that you can plug your phone into another machine
[0204.37 -> 0208.13] and we can work on the protocol to get it communicating like it's the USB stick?
[0208.69 -> 0217.49] Well, no here. So they all have a USB port. Either USB or the older ones and the FANUC ones
[0217.49 -> 0222.53] have compact flash, but they all have USB adapters. I have one at work. I can just plug
[0222.53 -> 0227.33] a compact flash into my phone and pop the new program onto the machine real quick as long as
[0227.33 -> 0233.17] it can go into an emulated storage on my phone. Oh, excellent. Easy to accomplish.
[0233.17 -> 0236.45] My phone can act like a thumb drive, then it's golden. That's all it needs.
[0237.57 -> 0242.05] Or read and write to a compact flash card through an adapter, but that's fucking
[0242.77 -> 0247.41] completely basic since the 90s. Sweet. Do you feel like you've summarized
[0247.41 -> 0256.24] everything you need to know to build this? If it can guarantee, I just need,
[0257.12 -> 0265.60] you got to understand, you can even destroy the machine without a piece of stock in there
[0265.60 -> 0271.60] if the gcode is wrong. It has to absolutely make sure that every tool path is
[0275.49 -> 0282.93] maybe assigned using the model, but calculated using only deterministic mathematics only.
[0285.76 -> 0289.92] Okay. Sweet. So we just need to make sure a machine don't go boom from bad code.
[0290.64 -> 0295.68] Yeah. Okay. Cool. I think I understand it now. I'll get working on it.
```
