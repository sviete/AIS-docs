---
title: "Usługi działające na bramce"
sidebar_label: Usługi bramki
---


## Usługi działające na bramce

Na bramce standardowo działają następujące usługi:

Nazwa      | Protokół | Port | Komenda/URL                                               | Opis
----       | ----     | ------- | -------                                                | -----------
 Aplikacja | http     | `8180`  | [http://ais-dom.local:8180](http://ais-dom.local:8180) | serwer http
 FTP       | ftp      | `1024`  | [ftp://ais-dom.local:1024](ftp://ais-dom.local:1024)   | serwer ftp
 SSH       | ssh      | `8022`  | ```bash $ ssh ais-dom -p 8022 -i id_rsa_ais```         | serwer ssh
 MQTT      | mqtt     | `1883`  | ```bash $ mosquitto_sub -h ais-dom.local -t '#'```     | serwer mqtt

## Przydatne linki

Linki do usług działających na bramce oraz inne przydatne linki dostępne są z aplikacji, wystarczy w menu wybrać opcję **Przydatne linki**

![Oprogramowanie bramki](/AIS-docs/img/en/bramka/ais_bramka_services.png)

