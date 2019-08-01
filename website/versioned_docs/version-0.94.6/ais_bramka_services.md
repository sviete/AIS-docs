---
title: Usługi działające na bramce
sidebar_label: Usługi bramki
id: version-0.94.6-ais_bramka_services
original_id: ais_bramka_services
---

Na bramce działają następujące usługi:

| Nazwa | Port | Komenda/URL | Opis
| ---- | ------- | ------- | -----------
| ssh | `8022` | ```bash $ ssh ais-dom -p 8022 -i id_rsa_ais``` | serwer SSH
| http | `8180` | [http://ais-dom.local:8180](http://ais-dom.local:8180) | aplikacja, połączenie bez szyfrowania
| ftp | `1024` | [ftp://ais-dom.local:1024](ftp://ais-dom.local:1024) | serwer ftp
| mqtt | `1883` | ```bash $ mosquitto_sub -h ais-dom.local -t '#'``` | serwer mqtt
