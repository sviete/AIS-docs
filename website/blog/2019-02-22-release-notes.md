---
author: Andrzej Raczkowski
authorURL: https://github.com/sviete
authorFBID: 1546384510
title: Wersja systemu 0.87.3  
---

## Wersja systemu 0.87.3 z dnia 22 lutego 2019 roku,

### W tej wersji skupiliśmy się na poprawie dostępności.

Podzas dostępu z Internetu dodaliśmy szyfrowanie komunikacji - HTTPS. Gdy dostęp z Internetu jest aktywny to dla zwiększenia bezpieczeństwa automatycznie wyłączamy możliwość łatwego logowania do aplikacji. Pamiętamy też o preferencjach i jeśli dostęp był włączony to po restarcie bramki automatycznie go odnawiamy. Więcej w dokumentacji [Dostęp do bramki z Internetu](/AIS-docs/docs/en/ais_bramka_remote_dom_tunnel.html)

Dodaliśmy też dostęp z naszej aplikacji (działającej w dowolnej przeglądarce) do konsoli systemu "Asystent domowy" działającej na urządzeniu, wystarczy kliknąć... połącz :) i mamy połącznie SSH do Linux-a na urządzeniu! Bez potrzeby pobierania prywatnych kluczy czy programów typu PuTTY.  

Dodatkowo mamy kilka ulepszeń w interfejsie aplikacji, portalu integratora oraz oczywiście najnowszy Home Assistant z wieloma fajnymi nowymi funkcjonalnościami.<a href="https://www.home-assistant.io/blog/2019/02/06/release-87/" target="_blank">0.87</a>


![Konfiguracja interfejsu użytkownika](/AIS-docs/img/en/frontend/frontend-console.png)
