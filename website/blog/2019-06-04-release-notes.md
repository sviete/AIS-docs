---
author: Celina AI-Speaker
authorURL: https://github.com/sviete
authorFBID: 1186570423
title: Wersja systemu 0.93.6  Łatwiejsza nawigacja i konfiguracja
---

## Wersja systemu 0.93.6 z dnia 04 czerwca 2019 roku,

### Ulepszona nawigacja na dotykowych ekranach

Na dotykowych ekranach dodano możliwość nawigacji pomiędzy kartami w aplikacji za pomocą przeciągania (swipe).

<iframe width="560" height="315"  src="https://www.youtube.com/embed/KfmvwHS6Noo" frameborder="0" allowfullscreen></iframe>


<!--truncate-->

### Prosta konfiguracja - start!

 Przy pierwszym uruchomieniu "Asystenta domowego" wykonujemy początkową prostą konfigurację. Pierwszym krokiem konfiguracji jest utworzenie konta właściciela - to konto będzie miało uprawniania administratora z pełnym dostępem do wszystkich elementów systemu i możliwością dodawania innych kont. Następny krok, który można wykonać przy pierwszym uruchomieniu (lub zrobić to później w konfiguracji), to dodanie urządzeń i usług, które są reprezentowane w "Asystencie domowym" jako integrację.
 Ta funkcjonalność będzie rozwijana - w kolejnej wersji dodamy możliwość wybrania lokalizacji na mapie, strefy czasowej oraz innych podstawowych ustawień systemu. Docelowo chcemy umożliwić konfigurację wszystkich komponentów z poziomu interfejsu w aplikacji, bez potrzeby edycji parametrów w plikach.

 <iframe width="560" height="315"  src="https://www.youtube.com/embed/CiysJlfZK70" frameborder="0" allowfullscreen></iframe>


### Łatwiejszy pełny reset aplikacji

W wersji deweloperskiej zachęcamy do eksperymentowania z bramką - dodawanie dowolnych urządzeń, zmiana ustawień, konfigurowanie interfejsu, itd. Gdyby efekty własnych eksperymentów i zmian nie były zadowalające ;) to od teraz można już w wygodny i szybki sposób wykonać pełny reset "Asystenta domowego" do domyślnej wersji, z poziomu aplikacji (bez potrzeby uruchamiania konsoli i wykonywania poleceń).


<iframe width="560" height="315"  src="https://www.youtube.com/embed/3FO9hBl1V90" frameborder="0" allowfullscreen></iframe>



### Pozostałe istotne zmiany

- Odpowiedzi głosowe zwracane są w przeglądarkach obsługujących syntezę mowy oraz w aplikacji mobilnej (kliencie). Zarówno w sieci lokalnej i podczas połączenia przez Internet.
- Dodatkowe opcje i informacje dotyczące wybranej pozycji dostępne za pomocą pilota. Np. informacja o odtwarzanej treści audio po naciśnięciu strzałki w górę podczas odtwarzania.
- Odtwarzanie nie tylko utworów ale też albumów, kanałów artystów i playlist ze Spotify.
- Możliwość wyłączenia/włączenia odtwarzania losowego ze Spotify.
- Nowe, uproszczone menu w aplikacji mobilnej (kliencie) i aplikacji na bramce (serwerze)
- Usuwamy domyślnie włączoną usługę dostępu do bramki w sieci lokalnej po https. Oczywiście nadal można włączyć taką opcję samemu [włączając usługę na bramce](/AIS-docs/docs/en/ais_gate_faq_index.html) lub uruchomić [Dostęp do bramki z Internetu](/AIS-docs/docs/en/ais_bramka_remote_dom_tunnel.html) - takie połączenie jest automatycznie szyfrowane (i nie wymaga importowania certyfikatu oraz utrzymywania serwera https na bramce).
- Najnowszy Home Assistant.
<a href="https://www.home-assistant.io/blog/2019/05/16/release-93/" target="_blank">0.93</a>
