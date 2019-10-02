---
title: Czy można dołączyć adaptery USB (RF, Zigbee, Z-Wave, Thread, BLE 5.0 itd.)?
sidebar_label: Czy można dołączyć adaptery USB?
id: version-0.98.9-ais_bramka_faq_usb_dongle
original_id: ais_bramka_faq_usb_dongle
---


Obecnie w jądrze dostarczamy sterowniki do pamięci masowej, kontrolerów i audio, dzięki czemu po włożeniu do portu USB urządzeń typu: PenDrive, myszka, klawiatura, kontroler USB, głośnik z kartą audio itp. są one automatycznie rozpoznawane i obsługiwane.

Nie dostarczamy sterowników do innych urządzeń dołączanych po USB i nie gwarantujemy ich działania.

Oczywiście można to samemu zrobić, jeśli posiada się stosowny sprzęt (USB adapter) i umiejętności. Poniżej opisaliśmy kilka możliwości jak to zrobić.

## Natywne sterowniki dla urządzeń USB w jądrze

Na urządzeniu jest pełny dostęp z poziomu root-a i [środowisko Linux](/AIS-docs/docs/en/ais_gate_faq_package_compile.html#środowisko-linux-a-ktore-mamy-na-urządzeniu), opisujemy jak skompilować pakiet i dostarczyć do naszego repozytorium apt [w FAQ](/AIS-docs/docs/en/ais_gate_faq_package_compile.html#kompilacja-pakietu)


## Sterowniki w przestrzeni użytkownika Android

To podejście nie wymaga dostępu z pozimu root-a, ADK ani sterowników jądra, wszystkie sterowniki mogą być zaimplementowane w Javie. 
Dzięki temu otrzymujesz surowy port szeregowy z funkcjami read(), write() i innymi podstawowymi funkcjami do użytku z protokołami oferowanymi przez adaptery USB.

Tu jest gotowy (Open Source) projekt https://github.com/kai-morich/usb-serial-for-android w Google Play dostępne są też aplikacje umożliwiające komunikacje po USB z różnymi urządzeniami (Arduino itp.).

## XXX->2->MQTT

Na bramce dostarczamy broker MQTT, który jest skonfigurowany z Asystentem domowym. Protokół MQTT jest ekstremalnie prosty, bardzo lekki i niezawodny, dzięki czemu idealnie sprawdza się przy połączeniach maszyna-maszyna, w internecie rzeczy (IoT), w urządzeniach mobilnych, oraz tam, gdzie wymagana jest oszczędność przepustowości, oraz energii.
MQTT to nasz podstawowy sposób komunikacji pomiędzy Asystentem domowym a urządzeniami. Jednym ze sposobów na umożliwienie komunikacji pomiędzy urządzeniami: RF, Zigbee, Z-Wave, Thread, BLE 5.0 itd.(i to bez potrzeby stosowania dodatkowych urządzeń producentów (bridge / gateway) a bramką AIS jest zastosowanie przelotki typu RF2MQTT, Zigbee2MQTT itd. 

Tu jest kilka linków do gotowych rozwiązań:

https://github.com/arendst/Sonoff-Tasmota/wiki/Zigbee

https://github.com/arendst/Sonoff-Tasmota/wiki/Sonoff-RF-Bridge-433