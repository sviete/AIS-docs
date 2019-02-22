---
title: Tunelowanie połączenia TCP
sidebar_label: Tunel
id: version-0.87.3-ais_bramka_remote_dom_tunnel
original_id: ais_bramka_remote_dom_tunnel
---

Najprostszym ze sposobów na dostęp do bramki z Internetu jest tunelowanie połączenia TCP.

## Zalety

Zalety tego rozwiązania:
- brak potrzeby konfiguracji routera
- nie naruszamy ustawień DNS i zapory sieciowej
- nie potrzebujemy publicznego adresu IP


## Jak to działa

Każde urządzenie posiada swój unikalny identyfikator, jest on losowo generowany przy pierwszym uruchomieniu i pozostaje stały przez cały okres użytkowania urządzenia.
Gdy włączysz dostęp z Internetu, otwieramy połączenie TCP pomiędzy Twoim urządzeniem a naszym serwerem i tworzymy na serwerze unikalny (na bazie identyfikatora urządzenia), publicznie dostępny adres URL.
Adres ten pełni funkcję proxy - wszystkie wywołania do naszego serwera adresowane identyfikatorem bramki przekazujemy do lokalnie działającego serwera na bramce.

Kody źródłowe klienta działającego na urzadzeniach są dostępne tu: [dom-tunnel](https://www.npmjs.com/package/dom-tunnel), otwarta licencja MIT.


## Bezpieczeństwo

> W celu zachowania większego bezpieczeństwa, gdy dostęp do urządzenia z Internetu jest włączony to automatycznie blokujemy [możliwość łatwego logowania do aplikacji](/AIS-docs/docs/en/ais_bramka_remote_www_index.html#wyłączenie-łatwego-logowania) Dodatkowo zalecamy [włączenie modułu uwierzytelniania wieloskładnikowego](/AIS-docs/docs/en/ais_bramka_remote_www_index.html#włączenie-modułu-uwierzytelniania-wieloskładnikowego)



## Włączenie dostępu

Przejdź w aplikacji lub pilotem do karty System a następnie włącz opcję **"Dostęp z Internetu"**


![Zdalny dostęp](/AIS-docs/img/en/bramka/http_remote_access.png)   


## Unikalny adres URL

Po włączeniu dostępu z Internetu Twoja bramka będzie dostępna pod unikalnym adresem

http://identyfikator-twojej-bramki.paczka.pro


Adres jest dość skomplikowany - w celu ułatwienia przepisania go na telefon, możesz w niego kliknąć i zeskanować jego kod QR


![Zdalny dostęp kod QR](/AIS-docs/img/en/bramka/http_remote_access_qr.png)
