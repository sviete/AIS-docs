---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.101.4 RF 433 i IKEA TRÅDFRI
---

## Wersja systemu 0.101.4 z dnia 20 listopada 2019 roku,

> Pracujemy nad nową kolejną wersja Asystanta domowego 0.101.4, która **ukaże się 20 listopada** 🥳

## RF 433 i urządzenia AIS dom

![RF 433](/AIS-docs/img/en/iot/iot_ais_dom_device_rf433_learn_step_7.png)

Żeby umożliwić połączenie pilotów (do bram, rolet), przełączników, czujników i itp. urządzeń komunikujących się za pomocą transmisji radiowej 433 MHz z bramką AIS dom potrzebujemy dodatkowe urządzenie umożliwiające wysyłanie i odbieranie kodów RF 433. Polecamy do tego celu urządzenie Sonoff RF Bridge 433 z alternatywnym oprogramowaniem umożliwiającym łatwą integrację z bramką AIS dom (MQTT) oraz obsługa większej ilości protokołów (oryginalny Sonoff obsługuje tylko jeden protokołu z 24 bitami).
Szczegóły w dokumentacji [Bramka RF 433](/AIS-docs/docs/en/ais_iot_gate_device_rf433)

![RF 433](/AIS-docs/img/en/iot/iot_ais_dom_device_rf433_map.png)



## IKEA TRÅDFRI

TODO

## Sterowanie ogrzewaniem

TODO


## Przykłady IFTTT


W integracjach dodaliśmy podkategorię z przykładami. Na początek wyjaśniamy krok po kroku [jak założyć konto w serwisie IFTTT](/AIS-docs/docs/en/next/ais_app_ifttt_platform_account) i [zbudować nasz pierwszy Aplet](/AIS-docs/docs/en/next/ais_app_ifttt_time.html). Aplet to wg terminologii serwisu IFTTT coś, co łączy ze sobą dwie lub więcej aplikacji, lub urządzeń i umożliwia zrobienie czegoś, czego te aplikacje lub urządzenia nie mogłyby zrobić same.
W kolejnym przykładzie wyjaśniamy [jak dodać Aplet uruchamiający dowolną akcję w Asystencie domowym z serwisu IFTTT](/AIS-docs/docs/en/ais_app_ifttt_action).

![IFTTT](/AIS-docs/img/en/blog/examples_ifttt.png)


## TuneIn

TODO

## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/10/30/release-101/" target="_blank">0.100</a> Z integracją Airly https://airly.eu/pl/ autorstwa naszego rodaka [Maciej Bieniek](https://github.com/bieniu) gratulacje 👏 https://www.home-assistant.io/integrations/airly/ Oraz ogromna ilość poprawek i ulepszeń - do tej wersji ponad 300 programistów dostarczyło ponad tysiąc zmian. Imponujące 👌


----
Zapraszamy do aktualizacji!
AI-Speaker 11/2019
