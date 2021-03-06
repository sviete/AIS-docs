---
title: Bramka IoT
sidebar_label: Karta produktu
id: version-0.93.6-ais_bramka_index
original_id: ais_bramka_index
---

## Bramka z inteligentnym asystentem głosowym

### Opis produktu

Bramka do domowego Internetu Rzeczy z inteligentnym asystentem głosowym to urządzenie którego celem jest komunikacja i zarządzanie inteligentnymi urządzeniami w Twoim domu. **Bramka "tłumaczy" polecenia głosowe na komendy które są zrozumiałe przez urządzenia** oraz automatycznie wykonuje czynności (np. włączenie urządzeń) w określonych okolicznościach.

### Zdjęcie produktu

<img
  src='/AIS-docs/img/en/bramka/bramka_full.jpg'
  alt='Bramka AIS dom'
/>

### Specyfikacja techniczna

Sprzętowo nasza konstrukcja oparta jest na wydajnym procesorze Amlogic, posiada wbudowane WiFi (i opcjonalnie Bluetooth) oraz dysk, a także porty LAN/Ethernet, 4 x USB, SPDIF, Aux, HDMI.

<img
  src='/AIS-docs/img/en/bramka/devBramkaSpec.png'
  alt='Bramka AIS dom'
/>

### Oprogramowanie

Oprogramowanie obsługuje najbardziej popularne urządzenia inteligentnego domu i **działa lokalnie w Twoim domu - nie gromadzi danych w chmurze**.

W naszym rozwiązaniu bramka jest odpowiedzialna za kontrolę nad urządzeniami oraz dostarczanie treści.
Bramka umożliwia zarządzanie urządzeniami i sensorami oraz pełni rolę mostu między Internetem Rzeczy a Twoją siecią domową. Urządzenie jest „tłumaczem” protokołów IoT i przekazuje komunikację sieciową do aplikacji w celu prezentacji stanu urządzeń oraz dostarczeniu kontroli dla użytkownika.

Główne zdania które realizuje oprogramowanie zainstalowane na bramce to:

 * tłumaczenie poleceń głosowych na komendy które są zrozumiałe przez urządzenia,
 * zbieranie informacji i kontrolowanie urządzeń,
 * wyzwalanie poleceń na podstawie konfiguracji użytkownika (automatyzacja),
 * dostarczanie i prezentowanie treści (wiadomości, pogoda, audio) na żądanie użytkownika.

Technicznie nasza platforma zawiera 4 główne komponenty systemowe, pierwsze trzy z nich są zainstalowane na bramce:

 * **System Android ze środowiskiem Linux**: minimalny system podstawowy oraz dodatkowe pakiety dostępne za pomocą menedżera pakietów APT z naszego repozytorium pakietów [Ais Linux](https://github.com/sviete/AIS-LINUX-PACKAGES).
 * **Platforma automatyki**: zmodyfikowana i uzupełniona (o dodatkowe usługi, automatyczne wykrywanie urządzeń i inne ulepszenia) platfroma [Home Assistant](https://github.com/sviete/AIS-home-assistant)
 * **Aplikacje dodatkowe**: nasze aplikacje dostępne w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)
 * **Usługi online**: w serwisie online mamy zdefiniowane stacje radiowe, podcasty, kanały wiadomości oraz dostępy do usług zewnętrznych wymagających autentykacji.


 ### Cena

Aktualna cena urządzeń oraz dostępność jest dostępna w naszym [sklepie internetowym](https://ais-dom.pl/pl/c/AIS-dom/1).
