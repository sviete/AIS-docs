---
title: Dialogflow
sidebar_label: Dialogflow
id: version-0.100.3b0-ais_app_dialogflow
original_id: ais_app_dialogflow
---


## Wprowadzenie

Dialogflow to serwis który pozwala na integrację z wieloma popularnymi platformami do przesyłania wiadomości, wirtualnym asystentem i innymi platformami IoT.

![Konfiguracja Dialogflow](/AIS-docs/img/en/bramka/dialogflow_1.png)


## Integracja

> Asystent domowy może uruhcamiać usługi na podstawie komunikatów przychodzących z Dialogflow przez HTTPS. Żeby umożliwić odbieranie takich komunikatów należy [włączyć dostęp  do bramki z Internetu](/AIS-docs/docs/en/next/ais_bramka_remote_dom_tunnel.html#włączenie-dostępu).


Aby skonfigurować Dialogflow, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS Dialogflow**

![Konfiguracja IFTTT](/AIS-docs/img/en/bramka/dialogflow_0.png)

### Adres URL do przesyłania zdażeń z Dialogflow

Po wybraniu tej integracji otrzymasz adres URL który należy użyć w konfiguracji ["Dialogflow Webhook"](https://dialogflow.com/docs/fulfillment#webhook) aby wysłać zdarzenia do Asystenta domowego z Dialogflow.

![Konfiguracja Dialogflow](/AIS-docs/img/en/bramka/dialogflow_2.png)
