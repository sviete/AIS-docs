---
title: Dostęp do bramki w sieci TOR
sidebar_label: TOR
id: version-0.82.x-ais_bramka_remote_tor
original_id: ais_bramka_remote_tor
---

Możliwe jest zdefiniowanie dostępu do bramki przez Internet w sieci Tor Onion.
Usługa Tor Onion pozwala na zdalny dostęp do aplikacji Asystent domowy działającej na bramce w twojej sieci lokalnej za pośrednictwem standardowych portów.

Dostęp do urządzenia za pośrednictwem Tora jest najbezpieczniejszą metodą ponieważ oferuje silne szyfrowanie, dodatkowo Twoja bramka nie jest widoczna w zwykłym Internecie. Niestety nie jest to zbyt efektywna moteda ponieważ sieć TOR jest zwykle dość wolna.


## Instalacja potrzebnych pakietów

Zainstaluj TOR wykonując w konsoli komendę:

```bash
$ apt install tor
```

## Ustawienia serwisu Onion

Należy zmodyfikować domyślny plik konfiguracyjny tor znajdujący się w lokalizacji $PREFIX/etc/tor/torrc
Wykonaj tą komendę by udostępnić na bramce serwis SSH oraz HTTP w Onion:

```bash
$ echo "SOCKSPort 127.0.0.1:9050
HiddenServiceDir /data/data/pl.sviete.dom/files/home/.tor/hidden_dom
HiddenServicePort 22 127.0.0.1:8022
HiddenServicePort 80 127.0.0.1:8180" > $PREFIX/etc/tor/torrc
```


Następnie trzeba utworzyć katalog, w którym będą przechowywane informacje o ukrytych usługach:

```bash
$ mkdir -p ~/.tor/hidden_dom
```

Uruchom usługę Tor wpisując w konsoli:

```bash
$ tor
```

poczekaj aż serwis się uruchomi, pojawi się kilka logów na końcu będzie:


```bash
 Bootstrapped 100%: Done
```
zamknij serwis, kombinacją klawiszy: Ctrl+c


## Nazwa hosta w Onion

Żeby sprawdzić unikalną nazwę hosta bramki w Onion wykonaj w konsoli:

```bash
$ cat ~/.tor/hidden_dom/hostname
```

wynik powinien być podobny do poniższego:

```bash
$ ytdv3tvdeh8u6koz.onion
```



## Łączenie z serwisem


> Pamiętaj, że usługa `TOR` powinna działać na obu stronach (klient / serwer), w przeciwnym razie pojawią się błędy połączenia.

- SSH
Programem do połączenia z serwisem SSH może być torsocks

Zainstaluj torsocks wykonując w konsoli komendę:

```bash
$ apt install torsocks
```

Żeby połączyć się ze konsolą bramki przez sieć TOR w konsoli swojego klienta wpisz polecenie:

```bash
$ torsocks ssh ytdv3tvdeh8u6koz.onion -i id_rsa_ais
```

- HTTP
Do połączenia z aplikacją użyj specjalnej przeglądarki działającej w sieci Onion Tor, możesz ją pobrać z tego adresu: https://www.torproject.org/projects/torbrowser.html.en
w adresie przeglądarki wpisz swoją unikalną nazwę hosta w sieci Onion


## Dodanie serwisu tor do menedżera procesów

Żeby TOR był uruchamiany automatycznie po każdym restarcie bramki dodaj go do menedżera procesów PM2 wykonując następującą komendę w konsoli:

```bash
$ pm2 start tor --name tor && pm2 save
```
