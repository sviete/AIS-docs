---
title: "Dostęp do bramki z Internetu"
sidebar_label: Wprowadzenie
---


Możesz skonfigurować dostęp do Twojej lokalnej bramki przez Internet. Dzięki temu będziesz mógł sterować automatyką w swoim domu (także głosowo) nie tylko w swojej lokalnej sieci, ale też z dowolnego miejsca z dostępem do Internetu.

Najprostszym ze sposobów na dostęp do bramki z Internetu jest tunelowanie połączenia TCP (**usługa, którą obecnie oferujemy za darmo dla użytkowników bramek**).

![Zdalny dostęp kod QR](/AIS-docs/img/en/bramka/http_remote_access_qr.png)

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

> W celu zachowania większego bezpieczeństwa, gdy dostęp do urządzenia z Internetu jest włączony to automatycznie blokujemy możliwość łatwego logowania do aplikacji, więcej informacji w FAQ [Jak działa logowanie do aplikacji](/AIS-docs/docs/en/ais_faq_authentication.html). Dodatkowo zalecamy włączenie modułu uwierzytelniania wieloskładnikowego. Więcej informacji w FAQ [Jak zabezpieczyć się bardziej](/AIS-docs/docs/en/ais_faq_authentication.html#jak-zabezpieczyć-się-bardziej)



## Włączenie dostępu

W celu włączenia tunelowania należy w aplikacji przejść do ustawień zdalnego dostępu do bramki (sekcja dostępna po wybraniu z menu po lewej stronie opcji **Konfiguracja** a następnie pierwszej opcji na liście **Usawienia bramki AIS dom**). 



![Zdalny dostęp](/AIS-docs/img/en/bramka/config_ais_dom_section3.png)   


## Unikalny adres URL

Po włączeniu dostępu z Internetu Twoja bramka będzie dostępna pod unikalnym adresem

https://identyfikator-twojej-bramki.paczka.pro


Adres jest dość skomplikowany - w celu ułatwienia przepisania go na telefon, możesz wyświetlić go w aplikacji w postaci kodu QR a następnie zeskanować go telefonem.


