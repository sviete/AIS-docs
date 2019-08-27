---
author: Celina AI-Speaker
authorURL: https://github.com/sviete
authorFBID: 1186570423
title: Wersja systemu 0.97.5 Obsługa wywołań zwrotnych HTTP, kolejne uproszczenia w aplikacji
---

## Wersja systemu 0.97.5 z dnia (do uzupełnienia) sierpnia 2019 roku,

### Uproszczenia w aplikacji

W ramach prac nad wersją 1.0 upraszczamy domyślny interfejs użytkownika aplikacji Asystent domowy. 
Od wersji 0.97 Konfiguracja bramki, Przydatne linki i Dokumentacja będą miały swoje osobne strony.

#### Konfiguracja bramki

Konfiguraccja bramki jest dostępna z menu z pozycji **Ustawienia bramki AIS dom**. Z tego miejsca można zarządzać swoją bramką IoT i Audio.
Konfiguracja bramki ma 4 sekcje, więcej o tym na nowej stronie dokumentacji [Konfiguracja bramki](/AIS-docs/docs/en/ais_bramka_configuration) 

![AIS dom ustawienia bramki](/AIS-docs/img/en/frontend/ais_dom_gate_settings_voice.png)


#### Przydatne linki 

Linki do serwisów działających na bramce umieściliśmy jako nową opcje w menu w aplikacji **Przydatne linki**.

![AIS dom przydatne linki](/AIS-docs/img/en/frontend/ais_dom_links.png)


#### Dokumentacja

Kolejna nowa opcja w menu **Dokumentacja**, to przejście do serwisu z naszą oficjalną dokumentacja użytkownika.

![AIS dom dokumentacja](/AIS-docs/img/en/frontend/ais_dom_docs.png)



### Obsługa wywołań zwrotnych HTTP

Obsługa wywołań zwrotnych HTTP do powiadamiania asystenta o zdarzeniach z zewnątrz. 
Wszystko, co jest skonfigurowane do uruchamiania przez wywołanie zwrotne, ma publicznie dostępny unikalny adres URL, aby umożliwić wysyłanie danych do Asystenta domowego z dowolnego miejsca.

Pozwala to na przesyłanie powiadomień do naszej bramki o naszej lokalizacji z aplikacji w telefonie - opcja opisana szerzej w [Wykrywanie obecności](/AIS-docs/docs/en/ais_bramka_presence_detection.html)
![AIS dom webhooks](/AIS-docs/img/en/frontend/ais_dom_webhooks.png)


### Poprawki dostępność aplikacji webowej dla użytkowników niedowidzących



### Pozostałe istotne zmiany

- Możliwość włączenia dźwięku mono (połączenie kanałów podczas odtwarzania audio).
Opcja dostępna jest z aplikacji oraz ze zdalnego pilota. Jest to przydatne gdy nasza bramka podłączona jest do jednego głośnika a audio ma więcej kanałów lub gdy słychamy na słuchawkach i mamy lepszy słuch w jednym uchu niż w drugim. 

- Pokazywanie mikrofonu w przeglądarce, tylko gdy przeglądarka wspiera głosowe wprowadzanie (webkitSpeechRecognition) i gdy połączenie jest szyfrowane.
http
![AIS dom webhooks](/AIS-docs/img/en/blog/no_mic_http.png)
https
![AIS dom webhooks](/AIS-docs/img/en/blog/yes_mic_https.png)

- Powiadomienia w aplikacji o nowej wersji.

![AIS dom update notification](/AIS-docs/img/en/blog/update_notification.png)

- Możliwość połączenia się z WiFi przy pierwszym uruchomieniu w 2 kroku kreatora (po założeniu konta, przed wykryciem lokalizacji domu).

- Poprawione działanie mikrofonu. W przypadku zablokowania mikrofonu dodaliśmy automatyczny reset urządzenia USB, bez fizycznego rozłączania / podłączania.

- Możliwość uwierzytelniania za pomocą hasła przy połączeniu ssh.

- Nowe repozytorium pakietów binarnych (nie instalujemy już binarek z Github). Wszystkie pakiety są zaktualizowane do najnowszych wersji i w ramach optymalizacji skompilowane dla minimalnego Android API 24 (wcześniej wspieraliśmy API 21 dostępne na Android 5).

- Najnowszy Home Assistant.