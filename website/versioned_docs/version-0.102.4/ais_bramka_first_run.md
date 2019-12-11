---
title: Pierwsze uruchomienie
sidebar_label: Pierwsze uruchomienie
id: version-0.102.4-ais_bramka_first_run
original_id: ais_bramka_first_run
---

## Wprowadzenie

Przy pierwszym uruchomieniu **Asystenta domowego** wykonujemy początkową prostą konfigurację. Pierwszym krokiem konfiguracji jest utworzenie konta właściciela - to konto będzie miało uprawniania administratora z pełnym dostępem do wszystkich elementów systemu i możliwością dodawania innych kont.

Następne kroki, które można wykonać przy pierwszym uruchomieniu (lub zrobić to później w konfiguracji), to:
-  Podłączenie do sieci WiFi
-  Zaznaczenie na mapie lokalizacji Twojego domu.
-  Dodawanie urządzeń i usług, które są reprezentowane w "Asystencie domowym", jako integracje.

Poniżej na zdjęciach z systemu pokazane są poszczególne kroki, wykonywane podczas pierwszego uruchomienia.


## Utworzenie konta właściciela

![Lokalizacja Twojego domu](/AIS-docs/img/en/bramka/onboarding_step_1.png)



## Lokalizacja Twojego domu

Asystent domowy chciałby wiedzieć gdzie mieszkasz. Pomoże to w wyświetlaniu informacji i konfigurowaniu automatyki opartej na położeniu słońca. 
Te dane nigdy nie będą udostępniane poza Twoją sieć lokalną.

Możemy pomóc Ci wprowadzić informacje dotyczące Twojej lokalizacji, wysyłając jednorazowe zapytanie do usługi zewnętrznej. **Do tego jest potrzebne połączenie z Internetem**, więc jeśli jeszcze nie podłączyłeś bramki do Internetu po kablu Ethernet to możesz teraz skonfigurować połączenie WiFi.

### Konfiguracja WiFi

![Konfiguracja WiFi](/AIS-docs/img/en/bramka/onboarding_step_2.png)


Gdy masz już połączenie z Internetem, to możesz ustalić swoją lokalizację po adresie IP, wysyłając jednorazowe zapytanie do serwisu https://ipapi.co
Możesz też wskazać ręcznie swoją lokalizację i wybrać strefę czasową oraz system metryczny.


![Lokalizacja Twojego domu](/AIS-docs/img/en/bramka/onboarding_step_3.png)



## Dodawanie urządzeń

Podczas pierwszego uruchomienia możesz skonfigurować integrację z inteligentnymi urządzeniami, którymi chcesz sterować przy pomocy Asystenta domowego. Możesz to też zrobić później w konfiguracji integracji.

![Dodanie urządzeń](/AIS-docs/img/en/frontend/onboarding_step_4.png)


## Dodawanie usług

Podczas pierwszego uruchomienia możesz skonfigurować integrację z usługami zewnętrznymi. Ten krok również możesz wykonać później w konfiguracji integracji.

![Dodanie usług](/AIS-docs/img/en/frontend/onboarding_step_5.png)


## Dodanie dostępu z aplikacji mobilnej

Jeśli chcesz, możesz zainstalować naszą aplikację mobilną i połączyć się z niej ze swoją bramką.
By to zrobić, przejdź do opisu aplikacji [Aplikacja Andoird AIS dom](/AIS-docs/docs/en/ais_app_android_dom.html), w którym krok po kroku prezentujemy proces konfiguracji aplikacji mobilnej i połączenia z bramką.

> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z" />
</svg> Docelowo (do wersji 1.0.0) cały proces dodawania aplikacji i łączenia jej z bramką będzie częścią początkowej konfiguracji. 


> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z" />
</svg> Jeśli chcesz, to możesz też użyć innych aplikacji mobilnych kompatybilnych z Home Assistant w tym oficjalna aplikacje [Home Assistant dla iOS](https://apps.apple.com/us/app/home-assistant/id1099568401) oraz [Home Assistant dla Android](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android).  


