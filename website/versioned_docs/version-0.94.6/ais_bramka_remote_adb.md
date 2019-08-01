---
title: Dostęp do konsoli bramki po ADB
sidebar_label: ADB
id: version-0.94.6-ais_bramka_remote_adb
original_id: ais_bramka_remote_adb
---

Android Debug Bridge (adb) to kolejne narzędzie działające w konsoli, które umożliwia komunikację z urządzeniem.

> Ta metoda komunikacji jest przydatna szczególnie w sytuacji, gdy nie mamy możliwości łączenia się z Asystentem domowym po SSH, bo go np odinstalowaliśmy z bramki.

## Instalacja ADB na komputerze

ADB jest częścią Android SDK, instalacja dla 3 systemów (Windows, Mac, Linux) opisana jest pod tym linkiem:

https://developer.android.com/studio/releases/platform-tools.html


## Włączenie debugowania ADB na bramce

1. Podłącz bramkę do telewizora lub monitora

2. Wyjdź z aplikacji Asystent domowy,
[Wyjście z aplikacji](/AIS-docs/docs/en/ais_bramka_settings.html#ustawienia-aplikacji-asystent-domowy)

3. Przejdź do ustawień Android
[Ustawienia systemu Android](/AIS-docs/docs/en/ais_bramka_settings.html#ustawienia-systemu-android)

4. W ustawieniach Android przejdź do **Informacje**
![Ustawienia - Informacje](/AIS-docs/img/en/bramka/adb_settings_1.png)

5. Kliknij 5 razy w opcję **Kompilacja** aż pojawi się komunikat, że jesteś już programistą
![Ustawienia - Kompilacja](/AIS-docs/img/en/bramka/adb_settings_2.png)

6. Wróć do ustawień (strzałka na pilocie) i wybierz nową opcję **Opcje programistyczne**
![Ustawienia - Opcje programistyczne](/AIS-docs/img/en/bramka/adb_settings_3.png)

7. W opcjach programistycznych włącz **Debugowanie USB**
![Ustawienia - Debugowanie USB](/AIS-docs/img/en/bramka/adb_settings_4.png)


## Połączenie z bramką w lokalnej sieci

1. Uruchom serwer ADB wpisując w konsoli na swoim komputerze

```bash
$ adb start-server
```

2. Połącz się do bramki wpisując w konsoli na swoim komputerze

```bash
$ adb connect <ip-bramki-w-lokalnej-sieci>
```

3. Zaakceptuj na bramce połączenie z komputera

![Ustawienia - Kompilacja](/AIS-docs/img/en/bramka/adb_settings_5.png)

4. Połącz się z konsolą bramki wpisując w konsoli na swoim komputerze

```bash
$ adb shell
```

> Mając połączenie po ADB możesz instalować aplikacje na bramce, przeglądać logi i wykonywać inne zadania serwisowe
