---
title: Aktualizacja ręczna
sidebar_label: Aktualizacja ręczna
id: version-0.79.5-ais_bramka_update_manual
original_id: ais_bramka_update_manual
---

System jest otwarty i obsługuje ponad 1000 komponentów. Wiele z tych komponentów jest automatycznie rozpoznawanych i instaluje automatycznie dodatkowe zależne pakiety. Może się też zdarzyć tak, że w trakcie instalacji wystąpi problem z internetem czy zasilaniem.

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
logujemy się na konto które mamy na bramce i jeżeli jest dostępna nowa wersja to zlecamy aktualizację aplikacji:


<img
  src='/AIS-docs/img/en/bramka/new_version_from_google_play.png'
  alt='Bramka AIS dom'
/>
