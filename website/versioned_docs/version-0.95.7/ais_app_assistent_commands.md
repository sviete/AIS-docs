---
title: Wbudowane komendy
sidebar_label: Wbudowane komendy
id: version-0.95.7-ais_app_assistent_commands
original_id: ais_app_assistent_commands
---


Asystent domowy posiada wbudowany komponent konwersacji który obsługuję polecenia głosowe.
Dzieje się to za pomocą konwertowania zarejestrowanych sentencji/zdań na intencje. W zdaniach mogą występować zmienne {umieszczone w nawiasach klamrowych} oraz opcjonalne słowa [umieszczone w nawiasach kwadratowych]. Takie zdania przetwarzane są przez system z uwzględnieniem kontekstu wcześniejszych działań, w celu jak najlepszego określenia intencji użytkownika i wykonania powiązanej z nią czynności.


Domyślnie asystent obsługuje:

## Sterowanie urządzeniami

* **Włączanie i wyłączanie urządzeń**:

Możesz powiedzieć "włącz oświetlenie w kuchni" lub "wyłącz światło w salonie" lub "włącz lampy zewnętrzne" lub "wyłącz podlewanie trawnika" lub "włącz wentylator poziom dwa" W ten sposób możesz sterować oświetleniem i przełącznikami.

```text
'Włącz {szukana-fraza}'; 'Zapal światło w {szukana-fraza}'
'Wyłącz {szukana-fraza}'; 'Zgaś Światło w {szukana-fraza}'
```

* **Otwieranie i zamykanie**

Możesz powiedzieć "otwórz bramę w garażu" lub "odsłoń rolety w salonie" lub "zasłoń wszystkie rolety". W ten sposób możesz sterować roletami i bramami.

```text
'Otwórz {szukana-fraza}'; 'Odsłoń {szukana-fraza}'
'Zamknij {szukana-fraza}'; 'Zasłoń {szukana-fraza}'
```

## Odtwarzanie audio

* **Włączanie stacji radiowych**

Wystarczy, że powiesz "Włącz RMF" lub "Graj radio Zet" lub po prostu "Radio trójka"

```text
'Włącz [radio] {szukana-fraza}'; 'Graj {szukana-fraza} radio'
```

* **Słuchanie podcastów**

Żeby pobrać najnowsze odcinki podcasta i włączyć ostatni z nich wystarczy, że powiesz "Podcast Niebezpiecznik" lub "Włącz podcast jak oszczędzać pieniądze"

```text
'Podcast {szukana-fraza}'; 'Włącz [podcast] {szukana-fraza}'
```

* **Słuchanie muzyki z YouTube**

Żeby wyszukać na YouTube interesującą Cię muzykę i ją odtwarzać wystarczy, że powiesz "Muzyka Maria Peszek" lub "YouTube Brodka"

```text
Włącz [z] [na] YouTube {szukana-fraza}'; 'YouTube {szukana-fraza}'
```

## Sterowanie odtwarzaczem

* **Pauza**

Komendy: "Stop", "Zatrzymaj", "Koniec", "Pauza", "Zaniechaj", "Stój"

```text
Stop
```

* **Wznowienie odtwarzania**
Komendy: "Start", "Graj", "Odtwarzaj"

```text
Graj
```

* **Następny**
Komendy: "[włącz] następny", "[włącz] kolejny", "[graj] następny", "[graj] kolejny"

```text
Następny
```

* **Poprzedni**
Komendy: "[włącz] poprzedni", "[włącz] wcześniejszy", "[graj] poprzedni", "[graj] wcześniejszy"

```text
Poprzedni
```

## Status czujników

O status każdego elementu systemu możesz też zapytać Asystenta

* **Sprawdzanie wartości czujników**

Wystarczy, że zapytasz "Jaka jest temperatura w salonie" lub "Jaka jest wilgotność w łazience", możesz też pytać o czujniki zewnętrzne raportujące dane z serwisów, np. "jaki jest poziom UV" czy "jaka jest pozycja słońca"

```text
'[Jaki] [ma] status {szukana-fraza}'
```

* **Sprawdzanie wartości innych dowolnych elementów systemu**

Zapytaj "jaki jest adres IP" by otrzymać informację o IP urządzenia, lub "jaki jest status światła w kuchni" by dowiedzieć się czy światło jest włączone lub "jaki jest głos" by otrzymać informację o ustawionym głosie asystenta

```text
'Jaki jest {szukana-fraza}'; 'Jaka jest {szukana-fraza}''
```

## Informacja o pogodzie

* **Sprawdzanie aktualnej pogody**

Wystarczy, że powiesz "jaka jest pogoda" by otrzymać informację o aktualnej pogodzie w Twojej lokalizacji

```text
'[aktualna] pogoda'
```

* **Sprawdzanie prognozy pogody**

Wystarczy, że zapytasz "jaka będzie pogoda" by otrzymać informację o prognozie pogody dla Twojej lokalizacji

```text
'Prognoza pogody'; 'Jaka będzie pogoda'
```

## Wyszukiwanie informacji

Zapytaj "Co to jest ONZ" lub "Kto to jest Andrzej Wajda" by otrzymać zwięzłą informację z bazy wiedzy

```text
'Wyszukaj {szukana-fraza}'; 'Znajdź informację o {szukana-fraza}'
```

Zapytaj "Wikipedia Wielkanoc" lub "Wikipedia Polska" by otrzymać pełny artykół z Wikipedii

```text
'Wikipedia {szukana-fraza}'
```

## Godzina i data

Tu oczywiście działają komendy typu "Która godzina" i "Jaki jest dzisiaj dzień"

```text
'Godzina'; '[jaka] [jest] data'
```

## Aktywowanie sceny

Zdefiniowaną scenę można aktywować komendą "Scena romantyczna" lub "Aktywuj scenę oglądanie filmu"

```text
'Scena {szukana-fraza}'; 'Aktywuj [scenę] {szukana-fraza}'
```

## Sterowanie ogrzewaniem

* **Ustawianie temperatury ogrzewania**

Powiedz "Ustaw temperaturę na 21 stopni w salonie"

```text
'Ustaw temperaturę [ogrzewania] [na] {temp} stopni [w] {pomieszczenie}'
```

* **Zmiana trybu ogrzewania na wtryb poza domem (ze zdefiniowaną niższą temperaturą)**

```text
'Ogrzewanie [na] [w] [tryb] poza domem'; 'Ogrzewanie włącz [tryb] poza domem'; Ogrzewanie wyłącz [tryb] poza domem
```

* **Wyłączenie ogrzewania**

```text
Wyłącz [całe] ogrzewnie
```

* **Włączenie ogrzewania**

```text
Włącz [całe] ogrzewnie
```

## Rozgłaszanie tekstu

Żeby asystentka powiedziała przez głośnik np "Obiad gotowy" wystarczy jej powiedzieć "Powiedz obiad gotowy"
(docelowo będziemy jeszcze wskazywali na jaki odtwarzacz/głośnik ma być przesyłany tekst)

```text
Powiedz {szukana-fraza}'; 'Mów {szukana-fraza}'; 'Echo {szukana-fraza}
```


## Spotify

Żeby asystentka wyszukała na Spotify i odtworzyła utwory Dawida Podsiadło wystarczy powiedzieć: "Spotify Dawid Podsiadło"
W podobny sposób możemy szukać albumu lub listy utworów.
```text
Spotify {wykonawca/album/playlista}
```

## Literowanie

Możemy kazać przeliterować asystentce status dowolnego elementu systemu wystarczy powiedzieć "Przeliteruj " i dodać nazwę elementu:

```text
Przeliteruj {nazwa elementu}
```
