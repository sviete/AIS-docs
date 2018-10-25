---
title: Usługi działające na bramce
sidebar_label: Usługi bramki
id: version-0.8.4-ais_bramka_services
original_id: ais_bramka_services
---

Na bramce działają następujące usługi:

| Nazwa | Port | Komenda/URL | Opis
| ---- | ------- | ------- | -----------
| ssh | `8022` | ```bash $ ssh ais-dom -p 8022 -i id_rsa_ais``` | serwer SSH
| http | `8180` | [http://ais-dom:8180](http://ais-dom:8180) | aplikacja, połączenie bez szyfrowania
| https | `8123` | [https://ais-dom:8123](https://ais-dom:8123) | aplikacja, połączenie szyfrowane
| ftp | `1024` | [ftp://ais-dom:1024](ftp://ais-dom:1024) | serwer ftp
| mqtt | `1883` | ```bash $ mosquitto_sub -h ais-dom -t '#'``` | serwer mqtt
| node-red | `1880` | [https://ais-dom:1880](https://ais-dom:1880) | serwer Node-RED, połączenie szyfrowane
