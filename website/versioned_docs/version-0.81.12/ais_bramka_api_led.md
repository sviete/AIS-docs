---
title: Sterowanie diodą LED
sidebar_label: Sterowanie diodą LED
id: version-0.81.12-ais_bramka_api_led
original_id: ais_bramka_api_led
---

Usługa **ais_shell_command.led** pozwala na sterowanie diodą led umieszczoną z przodu urządzenia.
Wymagany jest jeden parametr **brightness**, przykładowe wartości parametru to:
- 0 - czerwony,
- 255 - niebieski,
- timer - utuchomienie funkcji mrugania,
- heartbeat - uruchomienie funkcji bicia serca


Przykładowo żeby dioda pulsowała w rytmie bicia serca wywołujemy usługę ais_shell_command.led z takim parametrami:

```JSON
{"brightness": "heartbeat"}
```


![Ustawienia sieci](/AIS-docs/img/en/bramka/services_led.png)
