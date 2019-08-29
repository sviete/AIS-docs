---
title: "Konfigurowanie wykrywania obecności"
sidebar_label: Wykrywanie obecności
---

## Wprowadzenie

Wykrywanie obecności ma na celu ustalenie, czy i kto jest w domu (lub innej zdefiniowanej strefie), co jest bardzo cennym źródłem automatyzacji. Wiedza o tym, kto jest w domu lub gdzie jest, pozwala nam na całą gamę opcji automatyzacji, przykładowe użycie:
- Wyślij mi powiadomienie, gdy moje dziecko dotrze do szkoły
- Włącz klimatyzację w domu, kiedy wychodzę z pracy
- Otwórz bramę i włącz na 30 minut oświetlenie zewnętrzne, jeżeli jest noc i moje auto pojawia się w strefie przed bramą wjazdową

![Wykrywanie obecności](/AIS-docs/img/en/bramka/presence_detection_14.png)

## Wykrywanie obecności

Istnieją różne sposoby ustawiania wykrywania obecności w systemie Asystent domowy. Zazwyczaj najłatwiejszym sposobem jest sprawdzenie, które urządzenia (telefony) są podłączone do domowej sieci - w ten sposób możesz łatwo wykryć, kto jest w domu.

Innym sposobem pozwalającm na dostarczenie szczegółowych informacje o lokalizacji jest uruchomienie aplikacji na telefonie. Dla Androida i iOS rekomendujemy aplikację OwnTracks. Ten sposób jest bardziej zaawansowany i zostanie opisany szczegółowo poniżej.

### OwnTracks

OwnTracks to darmowa i otwarto źródłowa aplikacja dla systemu iOS i Android, która umożliwia śledzenie lokalizacji i wysyłanie jej bezpośrednio do systemu Asystent domowy. Można ją skonfigurować za pomocą integracji dostępnej w konfiguracji systemu - pokażemy poniżej krok po kroku jak to zrobić.

> Asystent domowy będzie rejestrował Twoją lokalizację na podstawie komunikatów przychodzących z OwnTracks przez HTTPS. Żeby umożliwić odbieranie takich komunikatów nawet gdy jesteś poza lokalną domową siecią należy [włączyć dostęp  do bramki z Internetu](/AIS-docs/docs/en/next/ais_bramka_remote_dom_tunnel.html#włączenie-dostępu).

### AIS Wykrywanie obecności

Aby skonfigurować OwnTracks, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS Wykrywanie obecności**

![Konfiguracja wykrywania obecności](/AIS-docs/img/en/bramka/presence_detection_1.png)

### Adres URL do raportowania lokalizacji

Po wybraniu tej integracji otrzymasz adres URL do użycia podczas konfiguracji urządzenia mobilnego (możesz go skopiować i przesłać na swój telefon tak jak pokazano poniżej).

![Konfiguracja wykrywania obecności](/AIS-docs/img/en/bramka/presence_detection_2.png)


### Konfiguracja w systemie Andrid

 <a href="https://play.google.com/store/apps/details?id=org.owntracks.android" target="_blank">Zainstaluj aplikację OwnTracks dla Android.</a>

W aplikacji OwnTracks otwórz pasek boczny i kliknij preferencje, a następnie połącz. Zmień następujące ustawienia:

- Tryb: **Private HTTP**

![Konfiguracja wykrywania obecności](/AIS-docs/img/en/bramka/presence_detection_3.png)

- Host: **Adres URL podany podczas konfigurowania integracji**

![Konfiguracja wykrywania obecności](/AIS-docs/img/en/bramka/presence_detection_4.png)

Identyfikacja:
- Nazwa użytkownika: **<Twoja nazwa użytkownika>**
- Identyfikator urządzenia: **<Twoja nazwa urządzenia>**


![Konfiguracja wykrywania obecności](/AIS-docs/img/en/bramka/presence_detection_5.png)


### Konfiguracja w systemie iOS

 <a href="https://itunes.apple.com/us/app/owntracks/id692424691?mt=8" target="_blank">Zainstaluj aplikację OwnTracks dla iOS.</a>

W aplikacji OwnTracks kliknij (i) w lewym górnym rogu, następnie kliknij ustawienia. Zmień następujące ustawienia:

- Tryb: **HTTP**
- URL: **Adres URL podany podczas konfigurowania integracji**
- Włącz uwierzytelnianie
- ID użytkownika: **<Twoje imię>**

### Identyfikator urządzenia w systemie

Twoje urządzenie będzie automatycznie dodane w Asystencie domowym jako **device_tracker.<Twoja nazwa użytkownika> _ <Twoja nazwa urządzenia>**.

![Konfiguracja wykrywania obecności](/AIS-docs/img/en/bramka/presence_detection_6.png)


Na mapie dostępnej w aplikacji będzie wyświetlana Twoja lokalizacja raportowana przez urządzenie mobilne.

![Wyświetlanie obecności na mapie](/AIS-docs/img/en/bramka/presence_detection_7.png)



## Osoby

Dodanie osoby umożliwia podłączenie do niej wielu urządzeń raportujących lokalizację. Gdy używanych jest wiele urządzeń śledzących, lokalizacja jest określana z uwzględnieniem typu urządzenia śledzącego:
- stacjonarne (Router lub lokalizator Bluetooth)
- mobilne (GPS)

Kiedy jesteś w domu, twoją pozycję określają najpierw stacjonarne trackery (jeśli istnieją), a następnie GPS. Kiedy jesteś poza domem, twoja pozycja jest określana najpierw przez GPS, a następnie przez stacjonarne urządzenia śledzące.


### Dodanie osoby

Aby dodać nową osobę, przejdź do konfiguracji a następnie wybierz opcję **Osoby**.

![Dodanie osoby](/AIS-docs/img/en/bramka/presence_detection_8.png)


Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć formularz dodawania osoby. Wybierz urządzenia raportujące lokalizację, tak jak to pokazano poniżej.

![Dodanie osoby](/AIS-docs/img/en/bramka/presence_detection_9.png)


### Ustawienie zdjęcia osoby

Możesz dodać zdjęcie osoby do wyświetlania na mapie. W tym celu przejdź do **Konfiguracja** -> **Dostosowywanie**, wybierz osobę a następnie dodaj jej nowy atrybut **entity_picture** z adresem jej zdjęcia.


![Dodanie zdjęcia osoby](/AIS-docs/img/en/bramka/presence_detection_10.png)


Osoba na mapie i na kartach w aplikacji będzie teraz wyświetlana wraz ze zdjęciem.

![Dodanie osoby](/AIS-docs/img/en/bramka/presence_detection_11.png)


## Strefy

Strefy pozwalają nazywać obszary na mapie. Obszary te mogą być następnie użyte do nazwania aktualnej lokalizacji śledzonego użytkownika lub użycia wejścia / wyjścia ze strefy jako wyzwalacza lub warunku automatyzacji. Strefy można skonfigurować na stronie integracji na ekranie konfiguracji.

### Dodanie strefy

Aby skonfigurować nową stefę, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **Strefy**

![Dodanie strefy](/AIS-docs/img/en/bramka/presence_detection_12.png)

Wypełnij formularz strefy w podobny sposób jak przedstawiono na przykładzie poniżej.

![Dodanie strefy](/AIS-docs/img/en/bramka/presence_detection_13.png)




## Automatyzacje oparte na lokalizacji


Wyzwalacze strefy oraz geolokalizacji mogą uruchamiać się, gdy osoba wchodzi w strefę lub gdy opuszcza strefę. W celu dodania automatyzacji opartej na lokalizacji, podczas dodawania automatyzacji wybierz typ wyzwalacza **Strefa**, następnie wybierz osobę, której dotyczy sprawdzenie lokalizacji.

![Dodanie automatyzacji](/AIS-docs/img/en/bramka/presence_detection_15.png)

W kolejnym kroku wybierz strefę oraz zaznacz typ zdarzenia (wejście w strefę lub opuszczenie strefy)

![Dodanie automatyzacji](/AIS-docs/img/en/bramka/presence_detection_16.png)
