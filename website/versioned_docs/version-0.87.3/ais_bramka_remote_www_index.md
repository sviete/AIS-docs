---
title: Dostęp do bramki z Internetu
sidebar_label: Wprowadzenie
id: version-0.87.3-ais_bramka_remote_www_index
original_id: ais_bramka_remote_www_index
---

Możesz skonfigurować dostęp do Twojej lokalnej bramki przez Internet. Dzięki temu będziesz mógł sterować automatyką w swoim domu (także głosowo) nie tylko w swojej lokalnej sieci, ale też z dowolnego miejsca z dostępem do Internetu.

> Gdy dodajesz dostęp z Internetu do swojej bramki, to **pamiętaj o  bezpieczeństwie**. Należy odpowiednio skonfigurować logowanie do Asystenta domowego w celu zabezpieczenia dostępu, patrz opis: [**Zabezpieczenie dostępu do aplikacji**](#zabezpieczenie-dostępu-do-aplikacji).

## Przekierowanie portów na routerze

Jedną z metod na udostępnienie bramki z Internetu jest przekierowanie portów na routerze. W przypadku aplikacji sprowadza się to do przekierowania portu 8123 z bramki na wolny port na routerze. Router jest dostępny z Internetu, więc wywołując jego adres na udostępnionym porcie można uzyskać dostęp do aplikacji Asystent domowy. To, jak wykonać takie przekierowanie, zależy do modelu routera. Szczegółowy opis należy sprawdzić w instrukcji danego routera.

## Zabezpieczenie dostępu do aplikacji

Gdy bramka działa tylko w sieci lokalnej umożliwiamy kilka sposobów autentykacji, w tym:
- łatwe logowanie w zaufanej sieci (wystarczy wybrać użytkownika z listy żeby się zalogować bez podawania hasła)
- logowanie za pomocą hasla API

konfiguracja autentykacji wygląda tak:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
    - type: trusted_networks
    - type: legacy_api_password
```

W aplikacji wygląda to tak:

![Logowanie w sieci lokalnej](/AIS-docs/img/en/frontend/frontend_local_login.png)


### Wyłączenie łatwego logowania

Tak łatwe metody autentykacji nie są odpowiednie w przypadku dostępu z Internetu, dlatego gdy dostęp z Internetu jest włączony to automatycznie zmieniamy konfigurację autentykacji na następującą:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```

Przy włączonym dostępie z internetu wymagane jest logowanie do aplikacji:

![Logowanie z Internetu](/AIS-docs/img/en/frontend/frontend_internet_login.png)


###  Włączenie modułu uwierzytelniania wieloskładnikowego

Moduł uwierzytelniania wieloskładnikowego po podaniu hasła (czyli coś, co już wiemy) wymaga podania kolejnego jednorazowego hasła, które ma określony czas ważności i jest przesyłane na telefon (czyli coś, co tylko my dostaniemy). W celu włączenia tego zabezpieczenia należy przejść do 'ustawienia użytkownika' a następnie postępować zgodnie z instrukcją zamieszczoną w regionie **Moduły uwierzytelniania wieloskładnikowego**


![Hasło jednorazowe](/AIS-docs/img/en/bramka/totp_settings.png)
