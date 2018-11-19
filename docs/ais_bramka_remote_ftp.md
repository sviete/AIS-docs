---
title: "Dostęp do bramki po FTP"
sidebar_label: FTP
---

Asystent domowy ma domyślnie uruchomiony serwer FTP dzięki czemu możesz zdalnie zarządzać plikami na bramce.


> **Ostrzeżenie**: domyślny serwer FTP obsługuje tylko anonimowe logowanie, więc nie ma uwierzytelniania i każdy w twojej lokalnej sieci może połączyć się z urządzeniem. Używaj tego serwera tylko, gdy bramka działa w lokalnej sieci. Jeżeli udostępnisz bramkę na zewnątrz (będzie dostępna z Internetu) to wyłącz serwer FTP lub zmień FTP na SFTP.


Usługa FTP działa na porcie **1024**

[ftp://ais-dom:1024](ftp://ais-dom:1024)


## anonimowe logowanie

użyj dowolnego klienta FTP aby połączyć się z serwerem FTP bramki

![Uruchomienie klienta ftp](/AIS-docs/img/en/bramka/ftp_connection_1.png)

![Uruchomienie klienta ftp](/AIS-docs/img/en/bramka/ftp_connection_2.png)


## przeglądanie plików

w lokalizacji [ftp://ais-dom:1024/sdcard/dom](ftp://ais-dom:1024/sdcard/dom) możesz dodawać audio, które następnie będzie widoczne do odtwarzania w systemie Asystent domowy w lokalizacji "Dysk wewnętrzny"

![Uruchomienie klienta ftp](/AIS-docs/img/en/bramka/ftp_connection_4.png)


## konfiguracja systemu Asystent domowy
w lokalizacji [ftp://ais-dom:1024/data/data/pl.sviete.dom/files/home/AIS](ftp://ais-dom:1024/data/data/pl.sviete.dom/files/home/AIS) znajduje się konfiguracja systemu Asystent domowy

![Uruchomienie klienta ftp](/AIS-docs/img/en/bramka/ftp_connection_3.png)
