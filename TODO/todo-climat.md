---
author: Andrzej Raczkowski
authorURL: https://github.com/sviete
authorFBID: 1546384510
title: Sterowanie ogrzewaniem
---

## Sterowanie i monitorowanie instalacji ogrzewania, wentylacji, klimatyzacji i termostatów


Komponent klimat dostępny w systemie służy do sterowania i monitorowania instalacji ogrzewania, wentylacji, klimatyzacji i termostatów.
Na tą chwilę w systemie "Home Assistant" na bazie którego rozwijamy "Asystenta domowego" dostępnych jest 41 tego typu komponentów, są to implementacje rozwiązań dostarczanych przez znanych producentów sprzętów do sterowania ogrzewaniem:
szczegóły pod tym adresem: <a href="https://www.home-assistant.io/components/#climate" target="_blank">Komponent klimat</a>  

Ale, żeby mieć możliwość sterowania ogrzewaniem wcale nie trezba inwestować w drogie rozwiązania - ja moje ogrzewanie w domu steruję za pomocą komponentu ogólengo termostatu - szczegóły poniżej.


## Ogólny termostat

Ogólny termostat to połączenie czujnika i przełącznika podłączonego do grzejnika lub klimatyzacji.
Gdy termostat jest w trybie ogrzewania i zmierzona temperatura jest niższa niż temperatura docelowa, to grzejnik zostanie włączony, po osiągnięciu wymaganej temperatury zostanie wyłączony. W trybie klimatyzacji, jeśli mierzona temperatura jest wyższa niż temperatura docelowa, klimatyzacja zostanie włączona, po osiągnięciu wymaganej temperatury wyłączona.



W ten prosty sposób możemy sterować wieloma urządzeniami w naszym domu, na zdjęciu poniżej widać klimatyzację, promiennik podczerwieni i klasyczny grzejnik CO:




## Komponent w systemie




## Komendy głosowe
