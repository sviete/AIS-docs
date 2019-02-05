---
title: Tunelowanie połączenia TCP
sidebar_label: Tunel
id: version-0.86.4-ais_bramka_remote_dom_tunnel
original_id: ais_bramka_remote_dom_tunnel
---


Jednym ze sposobów na dostęp do bramki z Internetu jest tunelowanie połączenia TCP.


>**Uwaga ta usługa działa w wersji testowej**. Jest to dość nowatorskie podejście i wymaga sprawdzenia jak poradzi sobie wydajnościowo nasz serwer na większej ilości klietów. Usługa jest darmowa, będziemy starali się ją rozwijać i wspierać tak żeby dostęp z Internetu do bramki był bezpieczny i tak wygodny jak to tylko możliwe. **Na tym etapie nie gwaratujemy poprawnego działania tej usługi. W razie problemów z dostępem do bramki z Internetu prosimy o informację** i proponujemy sprawdzić alternatywne rozwiązania: [TOR](/AIS-docs/docs/en/ais_bramka_remote_tor.html) i [Serveo](/AIS-docs/docs/en/ais_bramka_remote_serveo.html)   


## Zalety
Zalety tego rozwiązania:
- brak potrzeby konfiguracji routera
- nie naruszamy ustawień DNS i zapory sieciowej
- nie potrzebujemy publicznego adresu IP 
 



## Komponent dom-tunnel
Wraz z aktualizacją do wersji 0.86.4 dodaliśmy do pramki nowy komponent, kody źródłowe są dostępne tu: [dom-tunnel](https://www.npmjs.com/package/dom-tunnel), otwarta licencja MIT.


## Jak to działa

Każde urządzenie posiasa swój unikalny identyfikator, jest on losowo generowany przy pierwszym uruchomieniu i pozostaje stały przez cały okres użytkowania urządzenia.
Gdy włączysz dostęp z Internetu otwieramy połączenie TCP pomiędzy Twoim urządzeniem a naszym serwerem i tworzymy na serwerze unikalny(na bazie identyfikatora urządzenia) publicznie dostępny adres URL.
Adres ten pełni funkcję proxy wszystkie wywołania do naszego serwera adresowane identyfikatorem bramki przekazujemy do lokalnie działającego serwera na bramce.


## Włączenie

Przejdz w aplikacji lub pilotem do karty System a następnie włącz opcję **"Dostęp z Intenertu"**


> W celu zachowania większego bezpieczeństwa, po każdym restarcie bramki dostęp do bramki z Internetu jest automatycznie wyłączany


![Zdalny dostęp](/AIS-docs/img/en/bramka/http_remote_access.png)   


## Unikalny adres URL 

Po włączeniu dostępu z Internetu Twoja bramka będzie dostępna pod unikalnym adresem 

http://identyfikator-twojej-bramki.paczka.pro


Adres jest dość skomplikowany, w celu ułatwienia przepisnia na telefon możesz go kliknąć i zeskanować jego kod QR


![Zdalny dostęp kod QR](/AIS-docs/img/en/bramka/http_remote_access_qr.png) 