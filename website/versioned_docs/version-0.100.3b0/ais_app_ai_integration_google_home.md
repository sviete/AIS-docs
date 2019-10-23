---
title: AIS Google Home
sidebar_label: Google Home
id: version-0.100.3b0-ais_app_ai_integration_google_home
original_id: ais_app_ai_integration_google_home
---

## Wprowadzenie

AIS Google Home jest to emulacja urządzenia Google Home na bazie oficjalnego [Google Assistant SDK](https://developers.google.com/assistant). 
Integracja pozwala na konwersację z Asystentem Google z poziomu Asystenta domowego. 


![Konfiguracja AIS Google Home](/AIS-docs/img/en/bramka/ais_google_home_1.png)


## Integracja


Aby skonfigurować AIS Google Home, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS Google Home**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_0.png)


### JSON OAuth2 z Google

Integracja AIS Google Home wymaga konfiguracji projektu w Google, rejestracji naszego urządzenia.
Aby to zrobić, będziemy postępować zgodnie z [przewodnikiem Goole](https://developers.google.com/assistant/sdk/guides/service/python/embed/config-dev-project-and-account). 

Pokażemy to też krok po kroku poniżej:


1. Zaloguj się do platformy umożliwiającej rozszerzenie funkcjonalności Asystenta Google https://console.actions.google.com/

2. Utwórz nowy projekt 

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_3.png)

3. Podaj nazwę, zmień jezyk projektu na Polski oraz lokalizację na Polska. Następnie naciśnij **Create project**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_4.png)

4. Wybierz opcję **Device registration**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_5.png)

5. Naciśnij **REGISTER MODEL**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_6.png)

7. Podaj nazwę produktu, producenta oraz wybierz typ urządzenia **Speaker**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_7.png)

8. Pobierz plik oAuth2.0 i zapisz go na swoim dysku (będzie nam potrzebny w kolejnym kroku)

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_8.png)

9. Zaznacz wszystkie cechy (All traits) i zapisz konfigurację

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_9.png)


### Włączenia API dla Asystenta Google

Kolejny krokiem który należy zrobić po stronie Google jest włączenia API dla Asystenta, w tym celu należy:

1. Przejść w nowej karcie przeglądarki do [Google API](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview)

2. Włączyć **Google Assistant API**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_10.png)

3. Przejść do **Dane logowania** i wybrać **SKONFIGURUJ EKRAN AKCEPTACJI**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_11.png)

4. Wypełnić pole **Nazwa aplikacji** oraz wybrać **Adres e-mail pomocy** następnie nacisnąć przycisk **Zapisz** na dole

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_12.png)



### Poświadczenie oAuth2 dla urządzenia

Wracamy do naszego ekranu integracji w Asystencie domowym i w pole **Poświadczenie oAuth2 dla urządzenia** wklejamy całą zawartość pliku **JSON OAuth2** pobranego z Google

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_13.png)

następnie naciskamy **SUBMIT** by przejść do kolejnego ekranu


Klikamy na **link uwierzytelniający** 
![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_14.png)

i logujemy się na konto w Google 

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_15.png)

Pozwalamy AI-Speaker na dostęp

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_16.png)

Skopiuj kod

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_17.png)

Wracamy do aplikacji Asystent domowy i wklejamy go w pole **Kod**

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_18.png)


![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_19.png)



## Język w Google Home

> API do tworzenia urządzeń z Asystentem Google jest ciągle rozwijane. Programiści, którzy tworzą integrację z Google Home wiedzą, że nie wszytko jeszcze działa tak jak powinno. Jednym z częstych problemów jest język, w jakim Google Asystent komunikuje się z nami. Żeby był to język polski, to trzeba jeszcze w aplikacji mobilnej Google Home ustawić dwa języki polski i angielski - tak jak to pokazano poniżej:

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_20.png)
![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_21.png)

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_22.png)


## Wywołanie Asystenta Google z Asystenta domowego

Żeby komenda była wysyłana bezpośrednio do Assystenta Google wystarczy ją poprzedzić słowem Google 

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_22.png)


## Wywołanie Asystenta Google z API Asystenta domowego

AIS Google Home, podobnie jak inne integracje, udostępnia swoje usługi, dzięki czemu można automatyzować wysyłanie komendy do Asystenta Google z naszej bramki na podstawie statusu naszych urządzeń czy naszej obecności itp.

![Konfiguracja Google Home](/AIS-docs/img/en/bramka/ais_google_home_23.png)



