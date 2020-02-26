---
title: TAURON eLicznik
sidebar_label: TAURON eLicznik
id: version-0.105.7-ais_app_tauron
original_id: ais_app_tauron
---

## Wprowadzenie

Ta integracja dodaje do Asystenta domowego czujniki, które używają nieoficjalnego API do pobierania danych o zużyciu energii z [TAURON eLicznik](https://elicznik.tauron-dystrybucja.pl/).

## Integracja

Integracja bazuje na komponencie [Tauron-AMIplus](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Tauron-AMIplus) autorstwa [Piotra Machowskiego](https://github.com/PiotrMachowski)
Obecnie obsługujemy tylko taryfy G11 i G12.

## Dodanie integracji

Integracja wymaga podania trzech parametrów:

- Nazwa użytkownika
- Hasło użytkownika (używane do logowania w serwisie TAURON eLicznik)
- Identyfikator punktu poboru

![Integracja TAURON](/AIS-docs/img/en/frontend/integration_tauron_1.png)


### Nazwa i Hasło użytkownika

To Nazwa użytkownika i jego hasło używane do logowania w serwisie TAURON eLicznik.

![Integracja TAURON](/AIS-docs/img/en/frontend/integration_tauron_2.png)


### Identyfikator punktu poboru

To numer widoczny po lewej stronie na górze po zalogowaniu się w serwisie TAURON eLicznik:

![Integracja TAURON](/AIS-docs/img/en/frontend/integration_tauron_3.png)


## Pobierane dane

Dane pobierane są do 6 sensorów:
- Roczne zużycie energii
- Miesięczne zużycie energii
- Dzienne zużycie energii
- Energia oddana do sieci w ciągu roku
- Energia oddana do sieci w ciągu miesiąca
- Energia oddana do sieci w ciągu dnia

Takie dane zestawione z danymi o produkcji prądu ułatwiają nam zorientowanie się, czy mamy nadwyżkę prądu oddaną do sieci - przydatne, gdy mamy nadprodukcje i możliwość jej zużycia, przez np. dogrzanie się prądem w zimie i zaoszczędzenie na gazie.

![Integracja TAURON](/AIS-docs/img/en/frontend/integration_tauron_4.1.png)


## Prezentacja integracji

Po dodaniu integracji można pytać o statusy liczników, prezentować je na wykresach w aplikacji oraz używać ich w automatyzacjach tak samo, jak wszystkie inne czujniki/urządzenia.
W systemie Asystent domowy, wszystkie typy urządzeń (czujnik, przełącznik, odkurzacz) mają to samo API niezależnie od producenta danego urządzenia.


## Demo dodawania integracji

![Integracja TAURON](/AIS-docs/img/en/frontend/integration_tauron_4.png)

<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/AIS-docs/video/tauron.webm" type="video/webm"/>
  </video>
</div>
