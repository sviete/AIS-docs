---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.99 Automatyczne Aktualizacje, SUPLA, TAURON eLicznik
---

## Wersja systemu 0.99 z dnia 12 października 2019 roku,

## Automatyczne Aktualizacje

W ustawieniach bramki dodaliśmy możliwość włączenia automatycznych aktualizacji. Jeśli je włączysz, to codziennie sprawdzimy i automatycznie zainstalujemy dostępne aktualizacje składowych systemu Asystent domowy.

<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/AIS-docs/video/autoupdate.webm" type="video/webm">
  <video>
</div>


> Cześć aktualizacji będzie wymagała restartu urządzenia, który też zostanie automatycznie wykonany. 

Oczywiście, jeśli wolisz sam decydować, kiedy aktualizować system, to nie włączaj auto aktualizacji i tak jak dotychczas uruchamiaj aktualizację Asystenta domowego samodzielnie w dogodnym dla Ciebie czasie.
Aktualizacje dostarczają najnowsze funkcjonalności oraz poprawki zapewniające bezpieczeństwo i stabilność działania systemu dlatego zachęcamy do ich wykonywania.



## Integracja z SUPLA

Dodaliśmy pierwszą wersę (jeszcze nie kompletną - obecnie obsługiwane są tylko żaluzje i przełączniki) integracji z SUPLA OpenAPI. 
Bazujemy na pakiecie [PySupla](https://github.com/mwegrzynek/pysupla) i na integracji z Home Assistant autorstwa Michała Węgrzynka [mwegrzynek](https://github.com/mwegrzynek). 

<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/AIS-docs/video/supla.webm" type="video/webm">
  <video>
</div>

Ta integracja skierowana jest do osób, które chcą sterować swoimi urządzeniami SUPLA także głosowo z Asystenta domowego. Nie jesteśmy w żaden sposób związani z projektem SUPLA ani z firmą Zamel - wiemy tylko, że robią fajne urządzenia :)

## Integracja z TAURON eLicznik

Dodaliśmy integrację z TAURON eLiczniki. Integracja bazuje na komponencie [Tauron-AMIplus](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Tauron-AMIplus) autorstwa [Piotra Machowskiego](https://github.com/PiotrMachowski)


<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/AIS-docs/video/tauron.webm" type="video/webm">
  <video>
</div>


## Pozostałe istotne zmiany

- Dodaliśmy [małą poprawkę do projektu Hacs](https://github.com/custom-components/hacs/pull/636) dzięki której Hacs może być używany na większej ilości platform także w Asystencie domowym
- Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/09/18/release-99/" target="_blank">0.99</a> z jak zwykle mnóstwem nowości i ulepszeń.



----
Zapraszamy do aktualizowania. 

2019.10 Zespół Asystent domowy.