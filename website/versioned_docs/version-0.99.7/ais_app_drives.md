---
title: Dyski
sidebar_label: Dyski
id: version-0.99.7-ais_app_drives
original_id: ais_app_drives
---

## Typy dysków

W systemie "Asystent domowy" mamy trzy typy dysków, z których możemy odtwarzać treści audio:

1. ***Dysk wewnętrzny*** urządzenia jest dostępny w twojej lokalnej sieci (protokół ftp) pod adresem ftp://ais-dom.local:1024/sdcard/dom. Możesz tu dodać muzykę lub pliki tekstowe a następnie odtwarzać je w aplikacji.


2. ***Dyski zewnętrzne*** to dołączone do urządzenia karty SD lub pamięci USB


3. ***Dyski zdalne*** to dyski/usługi przechowywania danych w chmurach.

![Dyski](/AIS-docs/img/en/frontend/drives_all.png)

## Sterowanie pilotem

<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z" />
</svg>
Nasz dedykowany [Pilot radiowy](/AIS-docs/docs/en/next/ais_remote_index.html) umożliwia nawigowaie po dyskach oraz wybieranie treści audio do odtwarzania (nie jest do tego potrzebna aplikacja z ekranem).


## Konfiguracja dysku zdalnego


* Otwórz aplikację "Asystent domowy" w przeglądarce Internetowej [Dostęp do bramki po HTTP](/AIS-docs/docs/en/ais_bramka_remote_http)

* Przejdź do widoku audio, wybierz przeglądanie dysków, dyski zdalne, następnie uruchom konfigurator dodawnia dysku zdalnego naciskając przycisk "+ DYSK ZDALNY"

![Konfiguracja interfejsu użytkownika](/AIS-docs/img/en/frontend/add_new_remote_drive.png)

* Dalej postępuj zgodnie ze wskazówkami kreatora


## Konfiguracja dysku zdalnego z poziomu Integracji

Do ***Integracji*** możesz też przejść z menu **Ustawienia** i tam uruchomić konfigurator integracji ***AIS Serwis Dyski***

![Konfiguracja Spotify](/AIS-docs/img/en/frontend/drives_config_1.png)


Dalej postępuj zgodnie ze wskazówkami kreatora
