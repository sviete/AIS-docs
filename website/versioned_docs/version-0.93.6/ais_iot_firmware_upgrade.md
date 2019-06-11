---
title: Aktualizacja oprogramowania urządzeń automatyki domowej
sidebar_label: Aktualizacja oprogramowania
id: version-0.93.6-ais_iot_firmware_upgrade
original_id: ais_iot_firmware_upgrade
---

> Obecnie aktualizacja wymaga wgrania nowego oprogramowania do urządzenia z przeglądarki internetowej.

![OTA AIS dom](/AIS-docs/img/en/iot/iot_device_menu_1.png)

## Aktualizacja krok po kroku

### Pobranie plików

Pliki ze skompilowaną nową wersją oprogramowania dla urządzeń dostępne są w naszym serwisie pod adresem [OTA](https://ai-speaker.com/ota/)
Pobierz najnowsze wersje 2 plkiów:

- [Minimal](https://powiedz.co/ota/dom/s26_minimal_v6.5.0.bin)
- [Gniazdo](https://powiedz.co/ota/dom/s26_firmware_v6.5.0.bin)

![OTA AIS dom](/AIS-docs/img/en/iot/iot_device_download.png)


### Ustalnie adresu IP urządzenia

W systemie Asystent domowy przejdź do grupy "Menu" -> "Ustawienia" -> "Integracje", domyślny adres:

http://ais-dom.local:8180/config/integrations/dashboard

a następnie przejdź do konfiguracji urządzeń "MQTT" by sprawdzić status urządzenia w tym jego adres IP


![Urządzenia w Twojej sieci](/AIS-docs/img/en/iot/iot_device_discovery.png)



### Menu urządzenia

Znając IP urządzenia, wpisz go w przeglądarce internetowej by przejść do strony urządzenia. W głównym menu urządzenia wybierz opcję "Aktualizacja oprogramowania"

![Główne menu urządzenia](/AIS-docs/img/en/iot/iot_device_menu.png)



### Pierwszy plik

Wybierz plik **s26_minimal_v6.5.0.bin** i naciśnij "Start aktualizacji"

![Pierwszy plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_1.png)


Odczekaj aż pojawi się informacja o powodzeniu aktualizacji

![Pierwszy plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_2.png)


Odśwież menu urządzenia i przejdź do wgrywania kolejnego pliku

### Drugi plik

Wybierz plik **s26_firmware_v6.5.0.bin** i naciśnij "Start upgrade"

![Drugi plik](/AIS-docs/img/en/iot/iot_device_menu_upgrade_3.png)


Odczekaj aż pojawi się informacja o powodzeniu aktualizacji.
Następnie urządzenie się zrestartuje i powróci do głównego menu, z głównego menu przejdź do konsoli urządzenia


![Przejście do konsoli](/AIS-docs/img/en/iot/iot_device_menu_upgrade_5.png)



### Konsola

Żeby zacząć pracę z całkowicie nowymi ustawieniami w konsoli urządzenia, wykonaj polecenie **Reset 5**. To polecenie wykasuje wszystkie poprzednie ustawienia (poza konfiguracją WiFi) i dzięki temu będziemy mieli pewność, że urządzenie będzie korzystało tylko z nowych ustawień.

![Reset 5](/AIS-docs/img/en/iot/iot_device_menu_upgrade_6.png)
