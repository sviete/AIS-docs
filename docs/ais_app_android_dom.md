---
title: "AIS dom"
sidebar_label: AIS dom
---


## Wprowadzenie

To nasza główna aplikacja, która działa zarówno na bramce jak i na innych urządzeniach, w tym: tablety, telefony, Android TV oraz Wear OS.

![AIS Dom](/AIS-docs/img/en/frontend/ais_dom_tablet_apk.webp)

Aplikacja jest czymś w rodzaju ramki/przeglądarki do [aplikacji internetowej](/AIS-docs/docs/en/ais_app_index.html) działającej na bramce. Dostarcza też nam interfejs do API systemu Android oraz konsolę środowiska Linux (zawierającego minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang).

![AIS Dom](/AIS-docs/img/en/frontend/ais_dom_apk_screen_mob.png)



## Instalacja

Aplikacja dostępna jest za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom. Możesz zeskanować telefonem poniższy kod, by przejść do instalacji aplikacji w Google Play:

![Google Play](/AIS-docs/img/en/frontend/barcode_go_to_apk_in_google_play.png)


Kod źródłowy aplikacji dostępny jest w naszym [publicznie dostępnym repozytorium](https://github.com/sviete/AIS-dom)
Podpisane wersje publikujemy też na naszym [serwisie ze składowymi systemu](https://powiedz.co/ota/)



## Konfiguracja za pomocą kreatora

Po pierwszym uruchomieniu aplikacji pojawi się kreator, który przeprowadzi nas krok po kroku przez prosty proces konfiguracji


<img src="/AIS-docs/img/en/frontend/ais_dom_wizard_0_mob_apk.png" alt="AIS Dom" width="50%"/>


### Dostęp do mikrofonu

W pierwszym kroku kreatora możemy włączyć dostęp do mikrofonu.

<img src="/AIS-docs/img/en/frontend/ais_dom_wizard_mob_apk.png" alt="AIS Dom" width="50%"/>

### Dostęp do dysku

W kolejnym kroku kreatora możemy włączyć dostęp do plików na urządzeniu mobilnym.

<img src="/AIS-docs/img/en/frontend/ais_dom_wizard_1_mob_apk.png" alt="AIS Dom" width="50%"/>


### Dostęp do kamery

W kolejnym kroku kreatora możemy włączyć dostęp do kamery.

<img src="/AIS-docs/img/en/frontend/ais_dom_wizard_2_mob_apk.png" alt="AIS Dom" width="50%"/>


### Skanowanie identyfikatora bramki

Na koniec możemy zeskanować identyfikator naszej bramki

<img src="/AIS-docs/img/en/frontend/ais_dom_wizard_3_mob_apk.png" alt="AIS Dom" width="50%"/>

Każda bramka posiada swój unikalny identyfikator, jest on losowo wygenerowany przy pierwszym uruchomieniu i pozostanie stały przez cały okres użytkowania urządzenia. 
Identyfikator bramki znajdziemy klikając w pozycję "Przydatne linki", w menu po lewej stronie w aplikacji webowej Asystent domowy:

![Gate ID](/AIS-docs/img/en/frontend/gate_id_in_web_app.png)


## Konfiguracja ustawień apliacji

W każdej chwili możemy przejść do ustawień aplikacji nasiskając przycisk z trzema kropkami po lewej stronie na dolnej belce w aplikacji <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
</svg> 
<img src="/AIS-docs/img/en/frontend/apk_go_to_settings.png" alt="AIS Dom" width="50%"/>


W ustawieniach możemy ręcznie wybrać parametry aplikacji lub uruchomić ponownie kreator ustawień
<img src="/AIS-docs/img/en/frontend/apk_settings.png" alt="AIS Dom" width="50%"/>

Najważniejszy parametr to adres URL lub identyfikator bramki, **należy poprawnie ustawić adres lub identyfikatot bramki by komunikacja z bramką była możliwa.** Jeżeli chcemy łączyć się z naszą bramką będąc poza siecią domową to należy pamiętać o włączeniu [dostępu z Internetu](ais_bramka_remote_www_index). 

## Działanie aplikacji

Podstawowa funkcjonalność to wyświtlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](ais_app_index). 

Dodatkowo na dolnej belce w aplikacji mamy następujące przyciski:

* <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
</svg> przejście do ustawień aplikacji

* <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M24 13L20 9V12H11V14H20V17M18 16V21H2V12H.1L10 2.1L17.9 10H15.1L10 4.9L4 10.9V19H16V16H18Z" />
</svg> sygnalizacja działania w trybie połączenia lokalnego

* <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M6,7L6.69,7.06C7.32,4.72 9.46,3 12,3A5.5,5.5 0 0,1 17.5,8.5L17.42,9.45C17.88,9.16 18.42,9 19,9A3,3 0 0,1 22,12A3,3 0 0,1 19,15H6A4,4 0 0,1 2,11A4,4 0 0,1 6,7M6,9A2,2 0 0,0 4,11A2,2 0 0,0 6,13H19A1,1 0 0,0 20,12A1,1 0 0,0 19,11H15.5V8.5A3.5,3.5 0 0,0 12,5A3.5,3.5 0 0,0 8.5,8.5V9H6M22,19L19,22V20H2V18H19V16L22,19" />
</svg> sygnalizacja działania w trybie połączenia przez tunel

* <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
</svg> mikrofon do komunikacji z asystentem głosowym

* <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M4.59,6.89C5.29,6.18 6,5.54 6.3,5.67C6.8,5.87 6.3,6.7 6,7.19C5.75,7.61 3.14,11.08 3.14,13.5C3.14,14.78 3.62,15.84 4.5,16.5C5.23,17.04 6.22,17.21 7.12,16.94C8.19,16.63 9.07,15.54 10.18,14.17C11.39,12.68 13,10.73 14.26,10.73C15.89,10.73 15.91,11.74 16,12.5C12.24,13.16 10.64,16.19 10.64,17.89C10.64,19.59 12.08,21 13.85,21C15.5,21 18.14,19.65 18.54,14.88H21V12.38H18.53C18.38,10.73 17.44,8.18 14.5,8.18C12.25,8.18 10.32,10.09 9.56,11C9,11.75 7.5,13.5 7.27,13.74C7,14.04 6.59,14.58 6.16,14.58C5.71,14.58 5.44,13.75 5.8,12.66C6.15,11.57 7.2,9.8 7.65,9.14C8.43,8 8.95,7.22 8.95,5.86C8.95,3.69 7.31,3 6.44,3C5.12,3 3.97,4 3.72,4.25C3.36,4.61 3.06,4.91 2.84,5.18L4.59,6.89M13.88,18.55C13.57,18.55 13.14,18.29 13.14,17.83C13.14,17.23 13.87,15.63 16,15.07C15.71,17.76 14.58,18.55 13.88,18.55Z" />
</svg> uruchomienie trybu gestów

 

![AIS Dom](/AIS-docs/img/en/frontend/ais_dom_mob_local_apk.webp)


### Połączenie z bramką

Możesz ręcznie wpisać adres URL do aplikacji webowej działającej na bramce, np:
* http://192.168.1.2:8123
* https://dom-12312312313321321.paczka.pro

w takim przypadku aplikacja AIS dom będzię łączyła się tylko z podanym przez Ciebie adresem URL.



Możesz zeskanować QR kod z unikalnym identyfikatorem swojej bramki, kod ten dostepny jest w aplikacji webowej Asystent domowy w jako pierwsza pozycja w menu "Przydatne linki":

![Gate ID](/AIS-docs/img/en/frontend/gate_id_in_web_app.png)


### Diagram połączenia

Jeśli podasz identyfikator, to aplikacja sama będzie próbowała ustalić, czy połączenie z bramką ma być lokalne, czy przez szyfrowany tunel. 
Ustalenie połaczenia z bramką działa wg następującego schematu:

![AIS Dom](/AIS-docs/img/en/frontend/apk_connection_diagram.png)

Priorytet ma połączenie lokalne jesli jest dostępne.