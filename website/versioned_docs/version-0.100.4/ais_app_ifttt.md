---
title: IFTTT
sidebar_label: IFTTT
id: version-0.100.4-ais_app_ifttt
original_id: ais_app_ifttt
---


## Wprowadzenie

IFTTT to usługa internetowa, która pozwala użytkownikom tworzyć łańcuchy prostych instrukcji warunkowych, tzw. „Apletów”. 
Za pomocą integracji IFTTT można wysyłać powiadomienia/zdarzenie z IFTTT do Asystenta domowego.

![Konfiguracja IFTTT](/AIS-docs/img/en/bramka/ifttt_0.png)


## Integracja

> Asystent domowy może uruhcamiać usługi na podstawie komunikatów przychodzących z IFTTT przez HTTPS. Żeby umożliwić odbieranie takich komunikatów należy [włączyć dostęp  do bramki z Internetu](/AIS-docs/docs/en/next/ais_bramka_remote_dom_tunnel.html#włączenie-dostępu).


Aby skonfigurować IFTTT, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS IFTTT**

![Konfiguracja IFTTT](/AIS-docs/img/en/bramka/ifttt_1.png)

### Adres URL do przesyłania zdażeń z IFTTT

Po wybraniu tej integracji otrzymasz adres URL który należy użyć w akcji ["Make a web request"](https://ifttt.com/maker_webhooks) aby wysłać zdarzenia do Asystenta domowego.

![Konfiguracja IFTTT](/AIS-docs/img/en/bramka/ifttt_2.png)
