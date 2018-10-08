---
title: "Dostęp do bramki"
sidebar_label: Wprowadzenie
---

Możesz uzyskać zdalny dostęp do swojej bramki na kilka sposobów z pomocą popularnych narzędzi (https, ftp, ssh, tor). Dzięki temu możliwe jest używanie aplikacji bramki w przeglądarce internetowej oraz kontrolowanie bramki jak zdalnego serwera.


> Żeby dostać się do bramki z zewnątrz kluczowe jest ustalenie **czy bramka jest widoczna w Twojej sieci po lokalnej nazwie hosta czy tylko po adresie IP?** Lokalna nazwa hosta bramki ustawiona jest fabrycznie jako **ais-dom**. Z taką nazwą  hosta (**ais-dom**) bramka zgłasza się w lokalnej sieci. Reszta zależy od lokalnej sieci (od tego co potrafi router). Jeżeli sieć przy przyznawaniu dzierżawy DHCP poprawnie nadaje nazwy hosta (hostname) dla urządzeń w sieci, to bramka w sieci będzie widoczna pod nazwą hosta ais-dom. W przeciwnym razie w  komunikacji z bramką trzeba posługiwać się adresem IP.

>**We wszystkich przykładach w dokumentacji zakładamy, że bramka jest dostępna pod nazwą hosta ais-dom, jeżeli w twojej lokalnej sieci jest inaczej to łącząc się z bramka za pomocą przykładów z dokumentacji zmień nazwę hosta ais-dom na lokalny adres IP**.

## sprawdzenie adresu IP w aplikacji

w aplikacji "Asystent domowy" przejdź do zakładki "Ustawienia" a następnie w grupie "Ustawienia sieci" możesz zobaczyć swój adres IP
![Ustawienia sieci](/AIS-docs/img/en/bramka/net_settings.png)

## zapytanie asystenta o adres IP

o stan każdego komponentu w systemie możesz też zapytać asystenta, w tym celu wystarczy, że powiesz:

```text
Jaki jest adres IP
```

lub

```text
Jaka jest lokalna nazwa hosta
```
