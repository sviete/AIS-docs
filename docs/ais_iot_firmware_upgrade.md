---
title: Aktualizacja oprogramowania urządzeń automatyki domowej
sidebar_label: Aktualizacja oprogramowania
---

> Obecnie aktualizacja wymaga wgrania noweego oprogramowania do urządzenia z przeglądarki internetowej. **Docelowo aktualizacja urządzeń będzie automatyczna - dostępna z aplikacji poprzez wybranie opcji aktualizacji z aplikacji**


## Aktualizacja krok po kroku

### Pobranie plików

Pliki ze skompilowaną nową wersją oprogramowania dla urządzeń dostępne są w naszym serwisie pod adresem [OTA](https://ai-speaker.com/ota/)
Pobierz najnowsze wersje 2 plkiów:

- [Minimal](https://powiedz.co/ota/dom/minimal_v6.4.1.bin)
- [Gniazdo](https://powiedz.co/ota/dom/S2X_firmware_v6.4.1_SDK_2.4.2.bin)

![OTA AIS dom](/AIS-docs/img/en/iot/iot_device_download.png)


### Urządzenia w Twojej sieci

W systemie Asystent domowy przejdz do grupy "System" -> "Urządzenia w Twojej sieci", domyślny adres:

http://ais-dom.local:8180/states/group.system

i uruchom "Wykryj dostępne urządzenia" by wyszukać urządzenia "AIS dom" dostępne w Twojej sieci


by przejść do urządzenia naciśnij na link przy urządzeniu, w przeglądarce otworzy się strona z menu urządzenia:


![Urządzenia w Twojej sieci](/AIS-docs/img/en/iot/iot_device_discovery.png)



### Menu urządzenia

W głównym menu urządzenia wybierz opcję "Aktualizacja oprogramowania"

![Główne menu urządzenia](/AIS-docs/img/en/iot/iot_device_menu.png)



### Pierwszy plik

Wybierz plik **minimal_v6.4.1.bin** i naciśnij "Start aktualizacji"

![Pierwszy plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_1.png)


Odczekaj aż pojawi się informacja o powodzeniu aktualizacji

![Pierwszy plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_2.png)


Odświerz menu urządzenia i przejdz do wgrywania kolejnego pliku

### Drugi plik

Wybierz plik **S2X_firmware_v6.4.1_SDK_2.4.2.bin** i naciśnij "Start upgrade"

![Drugi plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_3.png)


Odczekaj aż pojawi się informacja o powodzeniu aktualizacji

![Drugi plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_4.png)

następnie urządzenie sie zrestartuje i powróci do głównego menu, z głównego menu przejdz do konsoli urządzenia


![Przejście do konsoli](/AIS-docs/img/en/iot/iot_device_menu_upgrade_5.png)



### Konsola

Żeby zacząć pracę z całkowicie nowymi usawieniami w konsoli urządzenia wykonaj polecenie **Reset 5** to polecenie wykasuje wszystkie poprzednie ustawienia (poza konfiguracją WiFi) dzięki temu będziemy mieli pewność, że urządzenia będzie korzystało tylko z nowych ustawień.

![Reset 5](/AIS-docs/img/en/iot/iot_device_menu_upgrade_6.png)
