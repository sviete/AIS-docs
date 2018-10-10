---
title: Aktualizacja automatyczna
sidebar_label: Aktualizacja automatyczna
id: version-0.79.5-ais_bramka_update_auto
original_id: ais_bramka_update_auto
---


W aplikacji “Asystent domowy” w zakładce “Pomoc” w grupie “Wersja systemu” dostępna jest informacja o aktualnej wersji systemu.
W przypadku gdy mamy dostępną aktualizację pojawia się tam też opcja aktualizacji:


Gdy jest dostępna aktualizacja wystarczy nacisnąć "WYKONAJ" by ją zainstalować.
Instalacja aktualizacji jest maksymalnie 3 etapowa (nie zawsze wszystkie etapy są wykonywane):
- aktualizacja środowiska Linux-a
- aktualizacja platformy automatyzacji
- aktualizacja aplikacji 

Wszystkie te etapy przebiegają automatycznie, po aktualizacji system uruchamia się ponownie i informuje nas, że  jest gotowy do pracy.

<img
  src='/AIS-docs/img/en/bramka/new_version_info.png'
  alt='Bramka AIS dom'
/>

## Logi aktualizacji

W aplikacji “Asystent domowy” w zakładce “Pomoc” w grupie “Wersja systemu” dostępny jest link “Logi Aktualizacji”, po wybraniu tego linku możemy przeglądać logi aktualizacji. W przypadku problemów z aktualizacją, logi możemy załączyć do zgłoszenia problemu dla programistów.

<img
  src='/AIS-docs/img/en/bramka/new_version_logs.png'
  alt='Bramka AIS dom'
/>

## Aktualizacja ręczna

System jest otwarty i obsługuje ponad 1000 komponentów. Wiele z tych komponentów jest automatycznie rozpoznawanych i instaluje automatycznie dodatkowe zależne pakiety. Może się też zdarzyć tak, że w trakcie instalacji wystąpi problem z Internetem czy zasilaniem.

W razie niepowodzenia procedury instalacji automatycznie przywracamy poprzednią działającą wersję systemu, niemniej jednak w skrajnych przypadkach poniższa procedura ręczna “krok po kroku” może okazać się przydatna.

Aktualizacja “krok po kroku” nie jest trudna i sprowadza się oczywiście do tych samych 3 kroków co w przypadku aktualizacji automatycznej:

### aktualizacja środowiska Linux-a
w konsoli (na urządzeniu lub po ssh) wpisujemy komendę:

```bash
$ apt update
```

a następnie komendę:

```bash
$ apt upgrade
```


### aktualizacja platformy automatyzacji
w konsoli (na urządzeniu lub po ssh) wpisujemy komendę:

```bash
pip install ais-dom -U
```

### aktualizacja aplikacji
w przeglądarce internetowej przechodzimy na adres aplikacji w  Google Play: https://play.google.com/store/apps/details?id=pl.sviete.dom&rdid=pl.sviete.dom
logujemy się na konto, które mamy na bramce i jeżeli jest dostępna nowa wersja to zlecamy aktualizację aplikacji:


<img
  src='/AIS-docs/img/en/bramka/new_version_from_google_play.png'
  alt='Bramka AIS dom'
/>
