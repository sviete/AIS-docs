---
title: "Dostęp do bramki w sieci TOR"
sidebar_label: TOR
---

Możliwe jest uzyskanie dostępu do bramki przez Internet, nawet jeśli znajdujesz się za urządzeniem NAT (np. Router Wi-Fi lub sieć komórkowa).
Jednak ta metoda wymaga skonfigurowania usługi Tor Onion. Tor Onion pozwala na zdalny dostęp (z Internetu) do aplikacji Asystent domowy działającej na bramce w twojej lokalnej sieci lub dostęp do konsoli po SSH za pośrednictwem standardowych portów.


> Opis w przygotowaniu

## Instalacja potrzebnych pakietów

Zainstaluj TOR wykonując w konsoli komendę:

```bash
$ apt install tor
```

Zainstaluj torsocks wykonując w konsoli komendę:

```bash
$ apt install torsocks
```


## Ustawienia serwisu Onion

Będziesz musiał zmodyfikować domyślny plik konfiguracyjny tor znajdujący się w lokalizacji $PREFIX/etc/tor/torrc
Wykonaj tą komendę by udostępnić na bramce serwis SSH oraz HTTP w Onion:

```bash
$ echo "SOCKSPort 127.0.0.1:9050
HiddenServiceDir /data/data/pl.sviete.dom/files/home/.tor/hidden_dom
HiddenServicePort 22 127.0.0.1:8022
HiddenServicePort 22 127.0.0.1:8180" > $PREFIX/etc/tor/torrc
```


Następnie trzeba utworzyć katalog, w którym będą przechowywane informacje o ukrytych usługach:

```bash
$ mkdir -p ~/.tor/hidden_dom
```

Uruchom tor wpisując w konsoli:
```bash
$ tor
```

poczekaj aż serwis się uruchomi, pojawi się kilka logów na końcu będzie:

> Bootstrapped 100%: Done

zamknij serwis, kombinacją klawiszy: Ctrl+c


## Nazwa hosta w Onion

Żeby sprawdzić nazwę hosta w Onion wykonaj w konsoli:

```bash
$ cat ~/.tor/hidden_dom/hostname
```


## dodanie serwisu tor do menedżera procesów

Żeby tor był uruchamiany automatycznie po każdym restarcie bramki dodaj go do menedżera procesów PM2 wykonując następującą komendę w konsoli:

```bash
$ pm2 start tor --name tor && pm2 save
```
