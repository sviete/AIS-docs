---
title: "Przywracanie ustawień fabrycznych urządzenia"
sidebar_label: Wprowadzenie
---

Urządzenie działa na specjalnie zmodyfikowanej wersji systemu Android (custom build). Ta wersja Androida posiada preinstalowany system **“Asystent domowy”** oraz wszystkie aplikacje pomocnicze systemu.

Przywracanie ustawień fabrycznych jest przywracaniem systemu do jego pierwotnego/fabrycznego stanu poprzez usunięcie wszystkich informacji zapisanych na urządzeniu. W ten sposób skutecznie usuniesz wszystkie dane, ustawienia i aplikacje, które zainstalowałeś na urządzeniu po jego zakupie.

> **UWAGA** <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
</svg> Przywrócenie urządzenia do pierwotnych ustawień producenta wykonuje się, aby rozwiązać poważny problem z urządzeniem, którego nie daje się rozwiązać w inny sposób.
>
> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z" />
</svg> **Wykonuj tę procedurę po konsultacji i pod kontrolą serwisu AI-Speaker.**
>
> System jest w fazie intensywnego rozwoju, dlatego wersja fabryczna może odbiegać od wersji aktualnej - **pierwsze uruchomienie i ponowna instalacja wszyskich składowych może potrwać znacznie dłużej niż zwykle** i może wymagać dodatkowych kroków.


### Jeśli eksperymentujesz z ustawieniami systemu, tworzysz własne integracje, zmieniasz kody na bramce, nadpisujesz konfigurację i coś działa nie tak, to [Wykonanie pełnego resetu aplikacji](/AIS-docs/docs/en/ais_bramka_reset_ais_step_by_step.html). <svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="#000000" d="M6,18V13H11V18H6M7,14V17H10V14H7M13,7.5H18V9.5H13V7.5M5,21A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V11.17C20.5,11.06 20,11 19.5,11H19V5H5V19H13.17C13.34,19.72 13.63,20.39 14,21H5M11,6V11H6V6H11M10,10V7H7V10H10M19,12V13.5A4,4 0 0,1 23,17.5C23,18.32 22.75,19.08 22.33,19.71L21.24,18.62C21.41,18.28 21.5,17.9 21.5,17.5A2.5,2.5 0 0,0 19,15V16.5L16.75,14.25L19,12M19,23V21.5A4,4 0 0,1 15,17.5C15,16.68 15.25,15.92 15.67,15.29L16.76,16.38C16.59,16.72 16.5,17.1 16.5,17.5A2.5,2.5 0 0,0 19,20V18.5L21.25,20.75L19,23Z" /> </svg> Polegające na usunięciu wszystkich ustawień i kodów aplikacji Asystent domowy na bramce i nadpisaniu ich **domyślnymi, najnowszymi kodami i ustawieniami** - jest zalecanym bezpiecznym sposobem na rozwiązywanie problemów z systemem.


### **Przywracanie ustawień fabrycznych urządzenia** to znacznie mniej bezpieczna procedura, która polega na cofnięciu się z wersją systemu do... ustawień fabrycznych (do wersji systemu z dnia zakupu).

## Żeby otrzymać opis, jak wykonać "Przywracanie ustawień fabrycznych urządzenia" napisz do nas <svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="#000000" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /> </svg> info@sviete.pl
