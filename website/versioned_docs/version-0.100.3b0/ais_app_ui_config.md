---
title: Konfiguracja interfejsu użytkownika
sidebar_label: Konfiguracja
id: version-0.100.3b0-ais_app_ui_config
original_id: ais_app_ui_config
---

## Włączenie trybu konfiguracji
Włączenie konfiguracji interfejsu użytkownika następuje poprzez wybranie w aplikacji opcji **"Konfiguracja interfejsu użytkownika"** dostępnej w prawym górnym rogu każdej strony w aplikacji.

![Konfiguracja interfejsu użytkownika](/AIS-docs/img/en/frontend/lovelace-ui-conf1.png)


![Konfiguracja interfejsu użytkownika opcja](/AIS-docs/img/en/frontend/frontend-card-edit-1.png)


### Informacje techniczne
Więcej informacji technicznych oraz demo interfejsu dostępne są na stronie projektu platformy Home Assistant [Lovelace UI](https://www.home-assistant.io/lovelace/) https://www.home-assistant.io/lovelace/


![Konfiguracja interfejsu użytkownika opcja](/AIS-docs/img/en/frontend/frontend-cards-ui-config-on.png)

### Kopia konfiguracji

Gdy jesteś w trybie konfiguracji intefrejsu użytkownika, możesz wybrać opcję **"Ręczny edytor konfiguracji"** dostępną w prawym górnym rogu każdej strony w aplikacji będącej w trybie konfiguracji.

![Konfiguracja interfejsu użytkownika kopia](/AIS-docs/img/en/frontend/lovelace-ui-conf-raw.png)


To spowoduje wyświetlenie tekstowej, surowej wersji konfiguracji interfejsu

![Konfiguracja interfejsu użytkownika kopia](/AIS-docs/img/en/frontend/lovelace-ui-conf-raw-save.png)

Wersję tekstową możesz zapisać do pliku jako kopię zapasową, następnie można eksperymentować z własnymi ustwieniami. Gdyby coś poszło nie tak, to zawsze można wrócić do wersji pierwotnej poprzez wklejenie tekstowej wersji konfiguracji w tym miejscu.

Moźesz też pobrać naszą domyślną konfigurację.
Aktualna domyślna konfiguracja dostępna jest tu [Domyślna konfiguracja interfejsu użytkownika](https://raw.githubusercontent.com/sviete/AIS-utils/master/patches/scripts/lovelace) 


## Własny interfejs użytkownika

Gdy mamy potrzebę zmiany całego interfejsu użytkownika włącznie z trzema pierwszymi kartami - domyślnie zablokowanymi (nadpisywanymi przy uruchamianiu), możemy to zrobić dodając do pliku konfiguracyjnego configuration.yaml wpis:   

```yaml
lovelace: 
  mode: yaml
```

oraz utworzyć plik **ul-lovelace.yaml** w folderze ~/AIS (na urządzeniu) z wyglądem naszego interfejsu. Od tego momentu nie mamy już możliwości korzystania z wbudowanego edytora konfiguracji ale za to możemy modyfikować wszystkie zakładki interfejsu użytkownika.
Warto przed włączeniem tej opcji skopiować aktualny wygląd interfejstu posługując się powyższą instrukcją [Kopia konfiguracji](#kopia-konfiguracji) i wkleić zawartość do pliku **ui-lovelace.yaml**. Od teraz możemy już zmieniać wszystkie zakładki wedle własnych upodobań.


### Kalendarz Google

W trybie ręcznej konfiguracji interfejsu możemy np. zintegrować swoje kalendarze w Google i wyświetlać je w interfejsie Asystenta. Ciekawym rozwiązaniem jest powiązanie kalendarza google z aplikacją w telefonie z Androidem i wyświetlanie wpisów w Asystencie Domowym.

#### Klucz api z Google

Aby uruchomić integrację z kalendarzem google należy wygenrować klucz api w aplikacji Google.
[Integracja z Asystentem Domowym - generowanie klucza API](https://www.home-assistant.io/integrations/calendar.google/)

Wymagana konfiguracja to dodanie wpisu do pliku configuration.yaml zgodnie z powyższą instrukcją:

```yaml
google:
  client_id: YOUR_CLIENT_ID
  client_secret: YOUR_CLIENT_SECRET
```

oraz dodanie wpisu do **ui-lovelace.yaml** i skopiowanie z [repozytorium https://github.com/ljmerza/calendar-card](https://github.com/ljmerza/calendar-card) zawartości calendar-card lub zainstalowanie pluginu calendar-card poprzez [HACS](https://github.com/custom-components/hacs).

```yaml
resources:
  - url: /community_plugin/calendar-card/calendar-card.js
    type: js
```

#### Wstawienie własnego kalendarza do karty interfejsu użytkownika:

```yaml
- type: "custom:calendar-card"
  title: Kalendarz
  progressBar: true
  numberOfDays: 14
  entities:
    - calendar.nazwa_kalendarza
```

Edycja pliku google_calendars.yaml

```yaml
- cal_id: nazwa_kalendarza
  entities:
  - device_id: moj_kalendarz
    ignore_availability: true
    name: nazwa_kalendarza
    track: true
```
Po uruchomieniu integracji z google plik google_calendars.yaml zostanie wypełniony danymi wszystkich naszych kalendarzy które możemy wykorzystać w Asystencie Domowym.

Kalendarz google ze świętami w Polsce możemy np. wykorzystać w automatyzacjach które mają zadziałać tylko w święta lub w przypadku ustawienia "pobudki" nie uruchamiać zdarzenia w Święta 🥳

