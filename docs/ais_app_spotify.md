---
title: "Spotify"
sidebar_label: Spotify
---

Integracja ze Spotify pozwala systemowi Asystent domowy na odtwarzanie teści audio z serwisu Spotify. Nasze rozwiązanie pozwala na uwierzytelnianie i pobieranie metadanych dla aktualnie odtwarzanego utworu i kontekstu, wydawanie poleceń odtwarzania i inicjowanie odtwarzania utworów wykonawców, albumów lub list odtwarzania.

***Integracja działa zarówno dla użytkowników Spotify Free, jak i Spotify Premium.***

Możemy sterować odtwarzaczem Spotify z aplikacji Asystent domowy. W aplikacji Spotify widzimy też nasze urządzenie z Asystentem domowym (jako głośnik AI-Speaker) i możemy je wybierać jako głośnik, na który ma być przesyłana muzyka z aplikacji Spotify. Asystent domowy po każdej komendzie odtwarzania muzyki ze Spotify automatycznie wybierze głośnik AI-Speker (głośnik podłączony do bramki) jako urządzenie, na którym muzyka ma być odtwarzana.

![Przejście do Spotify](/AIS-docs/img/en/frontend/spotify_2_way.png)


> Interfejs do Spotify będziemy rozwijać o kolejne funkcjonalności wraz z dążeniem do celu, jakim jest dostarczenie najlepszego i najbardziej wszechstronnego urządzenia do domowego audio i Internetu Rzeczy z wbudowanym głosowym Asystentem domowym.
***Ubiegamy się o certyfikację w Spotify.*** Integracja ze Spotify jest obecnie wersją beta; ta funkcjonalność może się znacznie zmienić lub przestać działać, bez ostrzeżenia. Dokładamy wszelkich starań, żeby spełnić wymogi Spotify i otrzymać certifikację, jednak dopóki nie podpiszemy umowy to nie możemy gwarantować działania tego serwisu na naszych urządzeniach.

## Konfiguracja w 3 krokach

### 1. Wymagania wstępne

* Posiadanie konta w Spotify, konto można założyć za darmo (bez konieczności podawania karty kredytowej) pod tym adresem: https://www.spotify.com/pl/

* Urządzenie z systemem Asystent domowy, zaktualizowane do wersji >= 0.89.1, [Procedura Aktualizacji](/AIS-docs/docs/en/ais_bramka_update_index.html)


### 2. Zaloguj się do aplikacji Spotify na urządzeniu z systemem "Asystent domowy"

* Podłącz urządzenie do telewizora lub monitora po HDMI

* Włącz pilotem tryb "Sterowanie na monitorze" [Tryby działania pilota](/AIS-docs/docs/en/ais_remote_modes.html)

* Przejdź do ustawień aplikacji klikając na ikonkę w lewym dolnym rogu ekranu aplikacji [Ustawienia aplikacji](/AIS-docs/docs/en/ais_bramka_settings.html#ustawienia-aplikacji-asystent-domowy)

* Wybierz opcję "Integracje" -> "Spotify"

![Przejście do Spotify](/AIS-docs/img/en/bramka/spotify_settings.png)

* Zaloguj się do serwisu Spotify


### 3. Pozwól "Asystentowi domowemu" na pobieranie danych ze Spotify oraz na sterowanie odtwarzaczem

* Przejdź do aplikacji "Asystent domowy" z przeglądarki internetowej w Twojej lokalnej sieci [Dostęp do bramki po HTTP](/AIS-docs/docs/en/ais_bramka_remote_http)

* Otwórz ***Ustawienia*** -> ***Integracje*** klikając ikonę "rozwijanego menu" w lewym górnym rogu


![Konfiguracja Spotify](/AIS-docs/img/en/frontend/configure_spotify_s1.png)


* Uruchom konfigurator integracji ***AIS Serwis Spotify***

![Konfiguracja Spotify](/AIS-docs/img/en/frontend/configure_spotify_s2.png)


* Kliknij na link "Uwierzytelnienie na Spotify"

![Konfiguracja Spotify](/AIS-docs/img/en/frontend/configure_spotify_s2.1.png)


* Zaloguj się do Spotify na swoje konto (to samo, na które logowaleś się w punkcie 2.)


* Zezwól aplikacji AI-Speaker na dostęp

![Konfiguracja Spotify](/AIS-docs/img/en/frontend/configure_spotify_s3.png)


* Możesz już głosowo wyszukiwać i uruchamiać muzykę ze Spotify.

![Konfiguracja Spotify](/AIS-docs/img/en/frontend/configure_spotify_s7.png)


### Przypominamy, że z asystentem możesz rozmawiać:
- przez naciśnięcie mikrofonu w aplikacji webowej (tylko w przeglądarkach obsługujących wprowadzanie głosowe)
- przez mikrofon w telefonie z systemem Android i z zainstalowaną naszą darmową aplikacją dostępną w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)

- przez wywołanie usługi rozmowy z naszego dedykowanego [pilota radiowego](ais_remote_index) z wbudowanym mikrofonem.


![Konfiguracja Spotify](/AIS-docs/img/en/frontend/configure_spotify_s6.png)
