---
title: Oprogramowanie dla urządzeń automatyki domowej
sidebar_label: Wprowadzenie
id: version-0.84.6-ais_iot_firmware_index
original_id: ais_iot_firmware_index
---

## Motywacja

**Koncentrujemy się na pełnej lokalnej kontroli (bez chmury). Robimy to by nasz system/asystent był szybki, niezawodny oraz w celu poszanowania prywatności urzytkoników.**

Żeby osiągnąć pełną lokalną kontrolę musimy mieć urządzenia końcowe które działają lokalnie, bez potrzeby połączenia z internetem i bez wysyłania danych do zewnętrznych serwisów.

W naszym rozwiązaniu dane np o tym kiedy było włączone światło czy inne urzadzenie w Twoim domu składowane są lokalnie na dysku Twojej bramki i nigdy nie opuszczają tej lokalizacji. Takie działanie odbiega od ogólnego trendu, który zaczyna panować na rynku*, i jest ono z naszej strony zamierzone.

* "Dane to nowa ropa naftowa" to popularne wyrażenie w Internecie które obrazuje między innymi to, że dane, a w szczególności dane osobowe, mają ogromną wartość. Wielkie korporacje zdają sobie z tego sprawę i podejmą skrajne starania, aby uzyskać dostęp do danych osobowych, ponieważ zawierają wgląd w twoje zachowanie. Statystyki wygenerowane z tych danych pozwalają im lepiej ukierunkować marketing, dając potężne nażędzie do przewidywania zachowań konsumentów.


## Oprogramowanie

Decydując się na oprogramowanie do naszych urządzeń  opartych na ESP8266 wybraliśmy rozwiązanie umożliwiające:

- szybkie i stabilne działanie
- sterowanie lokalne w ramach wielu protokołów (Serial, HTTP, MQTT i KNX), co umożliwa kontorlę z przeglądarki, aplikacji oraz systemów do automatyki domowej
- aktualizacje zdalną (z bramki, przeglądarki czy aplikacji mobilnej)
- obsługę dołączania dodatkowych czujników do urzadzeń
- obsługę harmonogramów i reguł na urządzeniu


Oprogramowanie to rozwijane jest od kilku lat w ramach projektu [Tasmota](https://github.com/arendst/Tasmota) i jest alternatywnym oprogramowaniem dla 60 urządzeń różnych producentów oraz dla kilkudziesięciu czujników które można dodatkowo dołączyć do tych urządzeń.


## Źródła oprogramowania

Nasza wersja oprogramowania do urządzeń końcowych, dostępna jest do pobrania za darmo pod tym adresem:
[AIS dom robot](https://github.com/sviete/AIS-DOM-ROBOT)
