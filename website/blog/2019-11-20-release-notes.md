---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.101.4 RF 433 i IKEA TRÅDFRI
---

## Wersja systemu 0.101.4 z dnia 20 listopada 2019 roku,


## RF 433 i urządzenia AIS dom

![RF 433](/AIS-docs/img/en/iot/iot_ais_dom_device_rf433_learn_step_7.png)

Żeby umożliwić połączenie pilotów (do bram, rolet), przełączników, czujników i itp. urządzeń komunikujących się za pomocą transmisji radiowej 433 MHz z bramką AIS dom potrzebujemy dodatkowe urządzenie umożliwiające wysyłanie i odbieranie kodów RF 433. Polecamy do tego celu urządzenie Sonoff RF Bridge 433 z alternatywnym oprogramowaniem umożliwiającym łatwą integrację z bramką AIS dom (MQTT) oraz obsługa większej ilości protokołów (oryginalny Sonoff obsługuje tylko jeden protokołu z 24 bitami).
Szczegóły w dokumentacji [Bramka RF 433](/AIS-docs/docs/en/ais_iot_gate_device_rf433)

![RF 433](/AIS-docs/img/en/iot/iot_ais_dom_device_rf433_map.png)

Pokazujemy też jak to działa na video:

<div style="max-width:600px;margin:auto">
<iframe width="560" height="315"  src="https://www.youtube.com/embed/NEFd_T3gqNU" frameborder="0" allowfullscreen></iframe>
</div>

## IKEA TRÅDFRI

Od wersji 0.101 dodaliśmy integrację z IKEA Trådfri jako domyślnie wbudowaną - nie trzeba już doinstalowywać żadnych pakietów.
Szczegóły w dokumentacji [Integracja IKEA Trådfri ](AIS-docs/docs/en/ais_app_integration_ikea.html)

![Konfiguracja IKEA](/AIS-docs/img/en/bramka/integration_ikea_0.jpg)

A tak to może wyglądać w aplikacji Asystent domowy:

<video width="100%" height="100%" playsinline="" autoplay="" muted="" loop="">
  <source src="/AIS-docs/video/ikea.webm" type="video/webm">
</video>

## Przykłady IFTTT

W integracjach dodaliśmy podkategorię z przykładami. Na początek wyjaśniamy krok po kroku [jak założyć konto w serwisie IFTTT](/AIS-docs/docs/en/next/ais_app_ifttt_platform_account) i [zbudować nasz pierwszy Aplet](/AIS-docs/docs/en/next/ais_app_ifttt_time.html). Aplet to wg terminologii serwisu IFTTT coś, co łączy ze sobą dwie lub więcej aplikacji, lub urządzeń i umożliwia zrobienie czegoś, czego te aplikacje lub urządzenia nie mogłyby zrobić same.
W kolejnym przykładzie wyjaśniamy [jak dodać Aplet uruchamiający dowolną akcję w Asystencie domowym z serwisu IFTTT](/AIS-docs/docs/en/ais_app_ifttt_action).

![IFTTT](/AIS-docs/img/en/blog/examples_ifttt.png)


## TuneIn

Łączymy się z API TuneIn, w tej wersji dodaliśmy dwie nowe kategorie w naszych radiach **Popularne TuneIn** i **Trendy TuneIn** w kolejnych wersjach dodamy wyszukiwanie audio TuneIn i didawanie do ulubionych.

![IFTTT](/AIS-docs/img/en/blog/tunein_start.png)

## Wyszukiwanie w dokumentacji

Sebastian znalazł fajny sposób na dodanie wyszukiwania do naszej dokumentacji.
Zostaliśmy zweryfikowani przez www.algolia.com 👋

![IFTTT](/AIS-docs/img/en/blog/algolia.png)

 i mamy już możliwość wyszukiania na stronie z dokumentacją

 ![IFTTT](/AIS-docs/img/en/blog/algolia2.png)

## Dni pracujące

Inspiracja do dodania do naszej domyślnej konfiguracji czujnika dnia pracującego/wolnego w Polsce pochodzi on naszego użytkownika Darka - dzięki :)
Czujnik wskazuje, czy bieżący dzień jest dniem roboczym, czy nie z uwzględnieniem informacji o świętach państwowych.

![Dni pracujące](/AIS-docs/img/en/blog/working_days.png)

Celem jest ułatwienie dodawania automatyzacji z uwzględnieniem dni.

![Dni pracujące](/AIS-docs/img/en/blog/working_days1.png)


## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/10/30/release-101/" target="_blank">0.101</a> Z integracją Airly https://airly.eu/pl/ autorstwa naszego rodaka [Maciej Bieniek](https://github.com/bieniu) gratulacje 👏 https://www.home-assistant.io/integrations/airly/ Oraz ogromna ilość poprawek i ulepszeń - do tej wersji ponad 300 programistów dostarczyło ponad tysiąc zmian. Imponujące 👌


## TODO

Obiecaliśmy opisać sterowanie ogrzewaniem, które zrobiliśmy w biurze, niestety bieżąca wersja się rozrosła i zabrakło nam czasu na porządny opis i schematy... **dostarczymy na dniach opis w dokumentacji**.

Nasz użytkownik Piotr wysłał nam info jak skonfigurować Z-wave na bramce. Wielkie dzieki - lubimy takich pro 💪 userów. Dodajemy to też sobie do TODO i w kolejnych wersjach planujemy udostępnić tą funkcjonalność dla wszystkich zainteresowanych.

Pracujemy nad integracją Zigbee i mamy pewne postępy :) chodzi o to, żeby sterować ściemnianymi żarówkami z IKEA po 30 zł bez bramki IKEA :). Mamy nadzieję zaprezentować gotowe rozwiązanie w kolejnych aktualizacjach. Tak to obecnie wygląda.

![zigbee_dev](/AIS-docs/img/en/blog/zigbee_dev.png)


----
Zapraszamy do aktualizacji!
AI-Speaker 11/2019
