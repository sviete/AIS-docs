---
title: Dodawanie komendy
sidebar_label: Dodawanie komendy
id: version-0.83.7-ais_app_assistent_add_command
original_id: ais_app_assistent_add_command
---

Możesz skonfigurować własne zdania/sentencje do przetworzenia na akcje w systemie. Działa to poprzez odwzorowywanie zdań na intencje, a następnie skonfigurowanie skryptu w celu obsługi tych intencji.

> Obecnie żeby dodać nową komendę należy dodać ją do plików konfiguracji. Dodawanie komend z interfejsu aplikacji będzie rozwijane w przyszłości.
**UWAGA - dodając własne intencje nadpisujesz domyślną konfigurację Asystenta domowego.**
 Nadpisanie konfiguracji ma wpływ na działanie systemu.
W przypadku problemów z działaniem systemu zalecamy usunięcie własnych wpisów z konfiguracji i sprawdzenie działania z domyślną konfiguracją.

## Uproszczony diagram działania komend w Asystencie domowym:
![Działanie komend](/AIS-docs/img/en/frontend/frontend-assistant-diagram.png)



## Lokalizacja konfiguracji Asystenta

Katalog z konfiguracją domyślnie znajduje się na urządzeniu (bramce) w folderze **/data/data/pl.sviete.dom/files/home/AIS**

ścieżkę do katalogu możesz sprawdzić w aplikacji pod adresem http://ais-dom.local:8180/dev-info/ -> narzędzia deweloperskie -> informacje:
![Konfiguracja folder](/AIS-docs/img/en/frontend/frontend-assistant-config.png)

Katalog z konfiguracją dostępny jest w lokalnej sieci po ssh lub ftp:
![Folder konfiguracji po FTP](/AIS-docs/img/en/frontend/frontend-assistant-config-ftp.png)


## Definicja sentencji

Bezpośrednio w katalogu konfiguracji utwórz plik **conversation.yaml**
w pliku conversation.yaml dodaj sentencje które mają wywoływać twoje nowe intencje. Przykładowo jeżeli chcesz by Twój asystent odpowiadał Ci ile czasu jeszcze zostało do końca pracy możesz zdefiniować coś takiego:

```yaml
intents:
  WhenEOD:
    - ile do końca pracy
    - kiedy koniec pracy
    - kiedy do domu
```
![Definiowanie sentencji](/AIS-docs/img/en/frontend/frontend-assistant-config-1.png)


## Definicja intencji

Bezpośrednio w katalogu konfiguracji utwórz plik **intents.yaml**
w pliku intents.yaml dodaj intencje oraz akcje które mają zostać wywołane po wykryciu intencji, posługując się naszym przykładem możemy zrobić coś takiego:

```yaml
WhenEOD:
  action:
    service: ais_ai_service.say_it
    data_template:
      text: "Nie wiem, zapytaj szefa :)."
```
![Definiowanie intencji](/AIS-docs/img/en/frontend/frontend-assistant-config-2.png)


## Dodaj sentencje i intencje do głównego pliku konfiguracji

W katalogu konfiguracji znajduje się plik configuration.yaml na końcu tego pliku dodaj lokalizację skryptu z intencjami oraz modułu konwersacja - dopisz te 2 linie na końcu pliku:

```yaml
intent_script: !include intents.yaml
conversation: !include conversation.yaml
```
![Dodanie sentencji i intencji do konfiguracji](/AIS-docs/img/en/frontend/frontend-assistant-config-3.png)

## Wypróbuj działanie nowej komendy

>> **UWAGA:** Uruchom ponownie Asystenta domowego w celu przetesowania nowej konfiguracji

![Test nowej komendy](/AIS-docs/img/en/frontend/frontend-assistant-config-4.png)
