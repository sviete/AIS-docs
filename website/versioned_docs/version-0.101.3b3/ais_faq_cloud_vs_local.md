---
title: Sterowanie lokalne czy sterowanie chmurą?
sidebar_label: Sterowanie lokalne czy sterowanie chmurą?
id: version-0.101.3b3-ais_faq_cloud_vs_local
original_id: ais_faq_cloud_vs_local
---


## Co oznacza chmura i lokalna kontrola?

Zasadniczo dzięki kontroli lokalnej nie potrzebujesz internetu do kontrolowania swoich urządzeń.


W systemie automatyki domowej kontorlowanym lokalnie gdy jesteś w domu i włączasz światła, nie musisz mieć połączenia z Internetem, wystarczy wysłać wiadomość bezpośrednio do urządzeń.

Gdy kontrolujesz swoje urządzenia przez chmurę, nie wysyłasz wiadomość do urządzeń ale do serwisu producenta w Internecie, a następnie twoje światła otrzymują komunikat „włącz” z serwisu producenta. 



## Co lepiej pasuje do inteligentnego domu?

Definicja połączenia WiFi dostępna jest z aplikacji webowej podczas początkowej prostej konfiguracji, przy pierwszym uruchomieniu urządzenia.

[Konfiguracja WiFi podczas pierwdzego uruchomienia urządzenia](/AIS-docs/docs/en/ais_bramka_first_run.html#konfiguracja-wifi)

Konfigurację WiFi można też dodać w każdej chwili w konfiguracji Asystenta domowego.
W tym celu, po zalogowaniu się w aplikacji należy:

### Przejść do **Konfiguracji**

![Konfiguracja WiFi](/AIS-docs/img/en/bramka/go_to_config.png)


### Wybrać **Integracje**

![Konfiguracja WiFi](/AIS-docs/img/en/bramka/go_to_integrations.png)


### W integracjach wybrać **AIS konfiguracja połączenia WiFi**

![Konfiguracja WiFi](/AIS-docs/img/en/bramka/go_to_integration_wifi.png)


### Kreator połączenia z WiFi

Należy postępować krok po kroku zgodnie z opisem w kreatorze dodawania połączenia WiFi.

![Konfiguracja WiFi](/AIS-docs/img/en/bramka/start_wifi_integration_wizard.png)


## Konfigurowanie WiFi za pomocą zdalnego pilota

Połączenie WiFi można też skonfigurować za pomocą pilota zdalnego.
Jest to przydatna opcja w przypadku braku monitora lub telewizora z wyjściem HDMI oraz dla osób, które mają problemy ze wzrokiem.

Opcja konfiguracji połączenia WiFi dostępna jest z pilota po przejściu w menu do **Ustawienia** -> **Ustawienia sieci** -> **Skanowanie dostępnych sieci WiFi**.

## Konfigurowanie WiFi w Android

Istnieje też możliwość konfiguracji połączenia WiFi z poziomu systemu Android. W tym celu należy wyjść z aplikacji **Asystent domowy**, a następnie uruchomić ustawienia systemu Android. Instrukcja krok po kroku znajduje się w dokumentacji [Przejście do ustawień Android](/AIS-docs/docs/en/next/ais_bramka_settings.html#ustawienia-aplikacji-asystent-domowy)


## Ustawienia WiFi w konsoli Linux

Z poziomu konsoli, ustawienia WiFi możemy wyświetlić za pomocą polecenia

```bash
su -c 'cat /data/misc/wifi/wpa_supplicant.conf'
```

![WiFi settings in console](/AIS-docs/img/en/bramka/wifi_settings_in_console.png)
