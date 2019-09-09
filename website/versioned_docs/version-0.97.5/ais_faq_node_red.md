---
title: Jak dodać Node-RED?
sidebar_label: Jak dodać Node-RED?
id: version-0.97.5-ais_faq_node_red
original_id: ais_faq_node_red
---

## Instalacja Node-RED

Przechodzimy do [konsoli na bramce](/AIS-docs/docs/en/ais_bramka_remote_ssh.html#dostęp-do-konsoli-z-aplikacji) i wpisujemy w niej komendę:

```bash
npm i -g --unsafe-perm node-red && termux-fix-shebang /data/data/pl.sviete.dom/files/usr/bin/node-red
```

[Konfiguracja WiFi podczas pierwdzego uruchomienia urządzenia](/AIS-docs/docs/en/ais_bramka_first_run.html#konfiguracja-wifi)

### Uruchomienie serwera Node-RED

W konsoli wpisujemy komendę:
```bash
node-red
```

### Zatrzymanie serwera Node-RED

W konsoli wciskamy kombinację klawiszy **Ctrl +c**:


### Automatyczny start serwera Node-RED 

Jeżeli chcemy by Node-RED był uruchamiany automatycznie to dodajemy takie zadanie dla menadżera procesów PM2, wpisując w konsoli na bramce:
```bash
pm2 start node-red --node-args="--max-old-space-size=128" && pm2 save
```

### Dodanie Node-RED do menu Asystenta domowego

Dodajemy w konfiguracji Asystenta domowego link do z serwera Node-RED:

```bash
nano ~/AIS/configuration.yaml
```
i na końcu pliku konfiguracyjnego dodajemy:

```bash
panel_iframe:
  nodered:
    title: 'Node-Red'
    icon: 'mdi:shuffle-variant'
    url: 'http://<ip-naszej-bramki>:1880/'
```

Restartujemy proces Asystenta domowego, komendą z konsoli:

```bash
pm2 restart ais
```




## Połączenie z Node-RED do Asystenta domowego

### Instalacja wtyczki do Asystenta domowego

W konsoli przechodzimy do folderu z node-red, i instalujem wtyczkę "node-red-contrib-home-assistant-websocket"

```bash
cd ~/.node-red
npm install node-red-contrib-home-assistant-websocket
```

następnie restartujemy proces node-red

```bash
pm2 restart node-red
```


### Konfigurujemy połączenie z Asystentem domowym

W asystencie domowym przechodzimy do konfiguracji naszego profilu i generujemy długoterminowy token dostępu dla Node-RED


URL: http://localhost:8180
Token: <token wygenerowany w Asystencie domowym>
![Połaczenie z asystentem](/AIS-docs/img/en/faq/Node-red-Home-Assistant-connection.png)


### Definicja wywołania serwisu w Asystencie domowym z Node-RED

![Połaczenie z asystentem](/AIS-docs/img/en/faq/node_red_home_assistant_service_call.png)


### Wywołanie serwisu w Asystencie domowym z Node-RED

![Node-RED](/AIS-docs/img/en/faq/node_red_call_service.png)