---
title: "Integracja Asystentka Jolka"
sidebar_label: Asystentka Jolka
---

## Wbudowany Asystent

System posiada komponent umożliwiający wydawanie komend i przesyłanie zapytań do wbudowanego programu, który zamienia polecenie na intencję, a następnie wykonuje akcję powiązaną z intencją. Program ten nazywamy wbudowanym asystentem.

<img src="/AIS-docs/img/en/frontend/ais_integration_ai_1.png" width="860" align="right"> </img>


 Z asystentem możesz rozmawiać:
- przez naciśnięcie mikrofonu w aplikacji webowej (w przeglądarkach obsługujących wprowadzanie głosowe)
- przez mikrofon w telefonie z systemem Android i z zainstalowaną naszą darmową aplikacją dostępną w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)
- <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z" />
</svg>
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z" />
</svg>przez wywołanie usługi rozmowy z naszego dedykowanego [pilota radiowego](ais_remote_index) z wbudowanym mikrofonem.
- wpisując komendy tekstowe do asystenta w pole tekstowe w aplikacji.


## Dostępne komendy

Tu jest [lista poleceń](/AIS-docs/docs/en/ais_app_assistent_commands.html), które asystent rozumie loklanie (bez potrzeby łączenia się z żadnym serwisem zewnętrznym).
Np. gdy pytasz "Jaka jest temperatura w kuchni" asystent "rozumie", że intencją jest sprawdzenie statusu czujnika o nazwie "Temperatura w kuchni". 

Gdy asystent nie jest w stanie zrozumieć komendy lokalnie, to stara się uzyskać informację w zewnętrznych serwisach lub wyszukać ją w Internecie.
Udzielając odpowiedzi na pytania typu "kto to jest... ", "kim jest... ", "znajdź informację o..." asystent korzysta z zasobów bazy wiedzy "Google Knowledge Graph". Korzystanie z tego typu bazy wiedzy ma na celu selekcję możliwie najistotniejszych treści i udzielenia krótkiej odpowiedzi na pytanie.
Źródłem informacji do Google Knowledge Graph jest głównie Wikipedia.
Sięgamy też po informacje bezpośrednio z Wikipedii oraz z usług internetowych, w tym serwisów Google.


<img src="/AIS-docs/img/en/frontend/ais_integration_ai_2.png" width="860" align="right"> </img>

Jeśli dodasz integrację [Google Home](/AIS-docs/docs/en/ais_app_ai_integration_google_home.html), to możesz bezpośrednio wysyłać komendy do Asystenta Google, wystarczy, że poprzedzisz komendę słowem "Google", np. "Google, jaka jest pogoda" lub "Google opowiedz jakiś dowcip" itd..



## Automatyzacje uruchamiane komendą

Każdą zdefiniowaną w systemie automatyzację możemy uruchomić komendą głosową. Wystarczy powiedzieć:


```text
'Uruchom {nazwa automatyzacji}'
``` 
lub

```text
'Automatyzacja {nazwa automatyzacji}'
``` 

w ten sposób można łatwo dodawać głosowe sterowanie praktycznie dowolnym urządzeniem które mamy zintegrowane w systemie. Przykładowo, gdy chcemy dodać uruchomienie odkurzania głosowo, to wystarczy, że dodamy automatyzację o nazwie np. **Odkurzanie** (lub Start odkurzania) która będzie wywoływała akcję **vacuum.start**. Po zdefiniowanie takiej akcji wystarczy powiedzieć **"Uruchom odkurzanie"** by głosowo uruchomić odkurzanie 💪.


![Automatyzacje](/AIS-docs/img/en/frontend/ais_automatization_vacuum_1.png)

W analogiczny sposób możemy dodać kolejne automatyzacje takie jak wstrzymanie (vacuum.pause), wznowienie (vacuum.start), i koniec odkurzania (vacuum.return_to_base), w ten sposób możemy sterować głosowo naszym odkurzaczem.

![Automatyzacje](/AIS-docs/img/en/frontend/ais_automatization_vacuum_2.png)


## Dodawanie własnej komendy

Możesz skonfigurować własne zdania/sentencje do przetworzenia na akcje w systemie. Działa to poprzez odwzorowywanie zdań na intencje, a następnie skonfigurowanie skryptu w celu obsługi tych intencji.

> Obecnie, żeby dodać nową komendę, należy dodać ją do plików konfiguracji. Dodawanie komend z interfejsu aplikacji będzie rozwijane w przyszłości.
**UWAGA - dodając własne intencje nadpisujesz domyślną konfigurację Asystenta domowego.**
 Nadpisanie konfiguracji ma wpływ na działanie systemu.
W przypadku problemów z działaniem systemu zalecamy usunięcie własnych wpisów z konfiguracji i sprawdzenie działania z domyślną konfiguracją.

### Uproszczony diagram działania komend w Asystencie domowym:
![Działanie komend](/AIS-docs/img/en/frontend/frontend-assistant-diagram.png)



### Lokalizacja konfiguracji Asystenta

Katalog z konfiguracją domyślnie znajduje się na urządzeniu (bramce) w folderze **/data/data/pl.sviete.dom/files/home/AIS**

ścieżkę do katalogu możesz sprawdzić w aplikacji pod adresem http://ais-dom.local:8180/developer-tools/info -> narzędzia deweloperskie -> informacje:

![Konfiguracja folder](/AIS-docs/img/en/frontend/frontend-assistant-config.png)

Katalog z konfiguracją dostępny jest w lokalnej sieci po ssh lub ftp:

![Folder konfiguracji po FTP](/AIS-docs/img/en/frontend/frontend-assistant-config-ftp.png)


### Definicja sentencji

Bezpośrednio w katalogu konfiguracji utwórz plik **conversation.yaml**,
w pliku conversation.yaml dodaj sentencje, które mają wywoływać twoje nowe intencje. Przykładowo, jeżeli chcesz, by Twój asystent odpowiadał Ci, ile czasu jeszcze zostało do końca pracy to możesz zdefiniować coś takiego:

```yaml
intents:
  WhenEOD:
    - ile do końca pracy
    - kiedy koniec pracy
    - kiedy do domu
```
![Definiowanie sentencji](/AIS-docs/img/en/frontend/frontend-assistant-config-1.png)


### Definicja intencji

Bezpośrednio w katalogu konfiguracji utwórz plik **intents.yaml**,
w pliku intents.yaml dodaj intencje oraz akcje, które mają zostać wywołane po wykryciu intencji. Posługując się naszym przykładem możemy zrobić coś takiego:

```yaml
WhenEOD:
  action:
    service: ais_ai_service.say_it
    data_template:
      text: "Nie wiem, zapytaj szefa :)."
```
![Definiowanie intencji](/AIS-docs/img/en/frontend/frontend-assistant-config-2.png)


### Dodaj sentencje i intencje do głównego pliku konfiguracji

W katalogu konfiguracji znajduje się plik configuration.yaml, na końcu tego pliku dodaj lokalizację skryptu z intencjami oraz modułu konwersacja - dopisz te 2 linie na końcu pliku:

```yaml
intent_script: !include intents.yaml
conversation: !include conversation.yaml
```
![Dodanie sentencji i intencji do konfiguracji](/AIS-docs/img/en/frontend/frontend-assistant-config-3.png)

### Wypróbuj działanie nowej komendy

> **UWAGA:** Uruchom ponownie Asystenta domowego w celu przetesowania nowej konfiguracji

![Test nowej komendy](/AIS-docs/img/en/frontend/frontend-assistant-config-4.png)


## API asystenta

Asystent, tak jak każda integracja, udostępnia swoje usługi, dzięki czemu można [automatyzować](/AIS-docs/docs/en/next/ais_bramka_automation.html) także tą funkcjonalność i np. uruchamiać [automatyczne mówienie godziny](/AIS-docs/docs/en/ais_faq_automation_tts.html) o pełnych godzinach.

![Godzinaais_app_android_index](/AIS-docs/img/en/faq/tts_time_3.png)
