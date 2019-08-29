---
title: Czy płyta to Raspberry Pi (Orange Pi, Nano Pi, itp.)?
sidebar_label: Czy płyta to Raspberry Pi?
id: version-0.97.5-ais_faq_raspberry_pi
original_id: ais_faq_raspberry_pi
---

## Czy płyta to Raspberry Pi?

Nie.

Płytę w naszym produkcie można sprzętowo porównać do RPi3, architektura procesora jest ta sama ARM Cortex-A53 (64-bit). 

Dwa lata temu naszą platformą do projektu było właśnie Raspberry. Z czasem doszliśmy do wniosku, że potrzebujemy troszkę innej platformy do naszych konkretnych zastosowań. 


> Nie staramy się nikogo przekonywać, dlaczego nasza bramka to sprzętowo lepsze rozwiązanie od Raspberry, bo RPi to świetny produkt z ogromną społecznością i ogromną możliwością zastosowań. My **w AI-Speaker też kochamy Raspberry :)**

Naszym celem jest dostarczenie przyjaznego dla użytkownika narzędzia, które ma konkretne zadanie: ułatwić każdemu korzystanie z domowej automatyki oraz darmowych treści i zasobów audio w Internecie.


To, co nas przekonało do wybrania innej płyty niż Raspberry Pi do naszych celów, to głównie 3 rzeczy:

### Audio

**Mamy cyfrowe wyjście SPDIF**, do multimediów używamy bibliotek Android i dzięki temu jesteśmy w stanie błyskawicznie odtworzyć audio po komendzie głosowej.

Na RPi i wielu innych platformach, które wcześniej testowaliśmy, audio wymaga dodatkowych urządzeń (DAC). 
Żeby sprzętowo mieć dobre audio to trzeba:
- Raspberry Pi -> I2S -> DAC -> Wzmacniacz -> Głośnik
- Bramka AIS -> Wzmacniacz -> Głośnik

Jeżeli nie da się na platformie uruchomić systemu Android (tak jak obecnie na RPi) to nie ma wydajnego audio.

### Wbudowany dysk (pamięć stała)

Bramka AI-Speaker ma wbudowaną pamięć (+slot na kartę SD/MMC i 4 USB).

RPi ma slot na kartę SD. System automatyki domowej działający na karcie SD nie nadaje się do automatyki domowej, chodzi o to, że ilość zapisów (logów zdarzeń) jest taka duża, że karty SD tego nie wytrzymują. Ten problem jest powszechnie znany w społeczności Home Assistant.


### Cena

Nasza bramka jest kompletna, ma obudowę, zasilacz, kabel HDMI, wbudowany dysk i działający na nim system gotowy do pracy po wyjęciu z pudełka. 

Żeby RPi działało, to trzeba dokupić dedykowany zasilacz, kartę pamięci, obudowę, kabel HDMI i DAC (jeżeli ktoś chce słuchać audio). 

Złożenie takiego zestawu na RPi jak nasza dedykowana bramka, jest wg nas technicznie nienajlepszym pomysłem (z uwagi na zawodność kart SD i problemy z audio) i całkowity koszt jest znacznie większy niż nasze gotowe rozwiązanie.

Oczywiście to tylko nasza opinia w tym wątku na podstawie naszych doświadczeń. Nikogo nie próbujemy w żaden sposób odwieść od pomysłu tworzenia systemu automatyki domowej na wybranej przez siebie platformie.


