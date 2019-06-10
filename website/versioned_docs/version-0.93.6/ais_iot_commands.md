---
title: S26, inteligentne gniazdo WiFi
sidebar_label: Inteligentne gniazdo WiFi
id: version-0.93.6-ais_iot_commands
original_id: ais_iot_commands
---

## Opis

SetOption57 - Wi-Fi network re-scan every 44 minutes with switch to +10dB stronger signal if detected (only visible networks)

LedPower - LED power state as on or off
0 = turn LED OFF and set LedState 0
1 = turn LED ON and set LedState 0
2 = toggle LED and set LedState 0
(Use Backlog LedPower 0; SetOption31 1 to disable LED even when Wi-Fi or MQTT is not connected)

SetOption31 - Disable status LED blinking during Wi-Fi and MQTT connection problems.LedPower must be set to 0 for this feature to work.
0 = LED blinking enabled (default)
1 = LED blinking disabled
