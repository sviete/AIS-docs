---
title: Ustawienia zaawansowane
sidebar_label: Ustawienia zaawansowane
id: version-0.97.5-ais_bramka_settings
original_id: ais_bramka_settings
---

## Ustawienia aplikacji "Asystent domowy"

W celu przejścia do ustawień aplikacji wystarczy kliknąć na ikonkę w lewym dolnym rogu ekranu aplikacji:

![Ustawienia](/AIS-docs/img/en/bramka/settings_1.png)



Z ustawień aplikacji możemy między innymi:
- przejść do konsoli systemu "Asystent domowy",
- wyjść z aplikacji, a następnie uruchomić ustawienia systemu Android.



![Ustawienia](/AIS-docs/img/en/bramka/settings_2.png)


## Konsola aplikacji "Asystent domowy"


W konsoli dostępne jest środowisko Linux, zawierające minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang

![Ustawienia](/AIS-docs/img/en/bramka/settings_6.png)



Dodatkowe pakiety dostępne za pomocą menedżera pakietów APT z naszego repozytorium pakietów Ais Linux.

![Ustawienia](/AIS-docs/img/en/bramka/settings_3.png)


Procesami na bramce steruje menedżer procesów PM2.
PM2 odpowiedzialny jest za zarządzanie stanem serwisów w systemie "Asystent domowy", to PM2 uruchamia procesy po starcie systemu a następnie czuwa nad ich ciągłym działaniem.

Żeby sprawdzić logi usług systemu "Asystent domowy", w konsoli bramki wykonaj komendę:

```bash
$ pm2 logs
```

Użytkownik domyślny ma uprawnienia tylko do folderu /data/data/pl.sviete.dom/files, w którym to folderze znajdują się pakiety systemu Linux, oraz do podfolderu data/data/pl.sviete.dom/files/home/AIS, gdzie znajduje się konfiguracja systemu "Asystent domowy".

> W wersjach developerskich bramek dostępny jest też użytkownik **root** który ma dostęp do całego systemu.



## Ustawienia systemu Android

Po wyjściu z aplikacji mamy możliwość przejścia do ustawień systemu Android, w tym celu należy wybrać ikonkę w prawym górnym rogu ekranu

![Ustawienia](/AIS-docs/img/en/bramka/settings_4.png)


W ustawieniach systemu Android możemy zarządzać połączeniami WiFi, Bluetooth, HDMI CEC, czy też wykonać restart urządzenia do ustawień fabrycznych.

![Ustawienia](/AIS-docs/img/en/bramka/settings_5.png)
