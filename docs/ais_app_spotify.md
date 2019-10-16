---
title: "Spotify"
sidebar_label: Spotify
---
## Spotify

Integracja ze Spotify pozwala systemowi Asystent domowy na odtwarzanie teści audio z serwisu Spotify.

![Przejście do Spotify](/AIS-docs/img/en/frontend/spotify_2_way.png)

## Spotify Free lub Spotify Premium

Integracja działa zarówno dla użytkowników Spotify Free, jak i Spotify Premium.

Nasze rozwiązanie pozwala na uwierzytelnianie i pobieranie metadanych dla aktualnie odtwarzanego utworu i kontekstu, wydawanie poleceń odtwarzania i inicjowanie odtwarzania utworów wykonawców, albumów lub list odtwarzania.

Możemy sterować odtwarzaczem Spotify z aplikacji Asystent domowy. W aplikacji Spotify widzimy też nasze urządzenie z Asystentem domowym (jako głośnik AI-Speaker) i możemy je wybierać jako głośnik, na który ma być przesyłana muzyka z aplikacji Spotify. Asystent domowy po każdej komendzie odtwarzania muzyki ze Spotify automatycznie wybierze głośnik AI-Speaker (głośnik podłączony do bramki) jako urządzenie, na którym muzyka ma być odtwarzana.


## Ubiegamy się o certyfikację w Spotify

> Interfejs do Spotify będziemy rozwijać o kolejne funkcjonalności wraz z dążeniem do celu, jakim jest dostarczenie najlepszego i najbardziej wszechstronnego urządzenia do domowego audio i Internetu Rzeczy z wbudowanym głosowym Asystentem domowym.
***Ubiegamy się o certyfikację w Spotify.*** Integracja ze Spotify jest obecnie wersją beta; ta funkcjonalność może się znacznie zmienić lub przestać działać, bez ostrzeżenia. Dokładamy wszelkich starań, żeby spełnić wymogi Spotify i otrzymać certifikację, jednak dopóki nie podpiszemy umowy to nie możemy gwarantować działania tego serwisu na naszych urządzeniach.


## Sterowanie pilotem

<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z" />
</svg>
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z" />
</svg>
Wyszukiwanie na Spotify można też uruchamiać za pomocą naszego dedykowanego [Pilota radiowego](/AIS-docs/docs/en/next/ais_remote_index.html) (nie jest do tego potrzebna aplikacja z ekranem). Pilotem można wykonać wyszukanie głosowo mówiąc [odpowiednią komendę](/AIS-docs/docs/en/ais_app_assistent_commands.html) lub za pomocą wirtualnej klawiatury oraz zwrotnego czytania wpisywanych liter.


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
