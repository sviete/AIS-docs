---
title: Obsługa urządznia z przeglądarki
sidebar_label: Obsługa urządznia z przeglądarki
---

## Wprowadzenie

Urządzenie z oprogramowaniem **AIS dom** jest autonomiczne i do podstawowych funkcjonalności nie potrzebuje żadnego dodatkowego komponentu, takiego jak lokalna bramka czy zdalny serwer (chmura). Poniżej przedstawiamy w jaki sposób urządzenie może być sterowane za pomocą dowolnej przeglądarki internetowej.

## Konfiguracja Wi-Fi
Urządzenia AIS dom zapewniają bezprzewodowy punkt dostępu do łatwej konfiguracji Wi-Fi.

Podłącz urządzenie do źródła zasilania, następnie wprowadz je w tryb konfiguracj (bezprzewodowego punktu dostępu) wciskając szybko 4 razy przycisk na urządzeniu, tak jak to pokazano na animacji poniżej
<img src="/AIS-docs/img/en/iot/ais_s20_2.gif" align="center"> </img>



 Teraz na smartfonie (komputerze, tablecie, laptopie albo innym urządzenie obsługujące sieć i Wi-Fi) wyszukaj punkt dostępu Wi-Fi o nazwie **dom_xxx_yyy_zzz** (gdzie xxx_yyy_zzz jest nazwą modelu i unikalnym identyfikatorem urządzenia) i połącz się z nim. W tym przykładzie punkt dostępu Wi-Fi ma nazwę dom_s20_.

Serwer menedżera Wi-Fi jest aktywny tylko przez 3 minuty. Jeśli przegapisz okno, może być konieczne ponowne wprowadzenie go w tryb parowania.


Po połączeniu się z Wi-Fi na urządzeniu otwórz http://192.168.4.1 w przeglądarce internetowej. Niektóre urządzenia mogą monitować o zalogowanie się do sieci Wi-Fi, która powinna również otworzyć powyższy adres automatycznie.


Na tej stronie możesz przeskanować dostępne sieci Wi-Fi, następnie wybrać swoją sieć Wi-Fi do której chcesz podłączyć urządzenie.
Podaj następujące informacje:
- AP1 SSid - nazwa sieci Wi-Fi do której podłączasz urządzenie. **W Identyfikatorze SSID ważna jest wielkość liter**
- Hasło AP1 - hasło do punktu dostępowego Wi-Fi. **Hasło Wi-Fi musi mieć mniej niż 32 znaki i nie może zawierać znaków specjalnych (np. gwiazdki) lub białych znaków**
