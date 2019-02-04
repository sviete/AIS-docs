---
title: "Dostęp do bramki z Internetu"
sidebar_label: Wprowadzenie
---

Jeśli chcesz możesz skonfigurować dostęp do Twojej lokalnej bramki przez Internet. Dzięki temu będziesz mógł sterować automatyką w swoim domu (także głosowo) nie tylko w swojej lokalnej sieci ale też z dowolnego miejsca z dostępem do Internetu.

> Gdy dodajesz dostęp z Internetu do swojej bramki to **pamiętaj o  bezpieczeństwie**. Należy odpowiednio skonfigurować logowanie do Asystenta domowego w celu zabezpieczenia dostępu, patrz opis: [**Zabezpieczenie dostępu do aplikacji**](#zabezpieczenie-dostępu-do-aplikacji).

## Przekierowanie portów na routerze

Jedną z metod na udostępnienie bramki z Internetu jest przekierowanie portów na routerze. W przypadku aplikacji sprowadza się do przekierowania portu 8123 z bramki na wolny port na routerze. Router jest dostępny z internetu więc wywołując jego adres na udostępnionym porcie można uzyskać dostęp do aplikacji Asystent domowy. To jak wykonać takie przekierowanie zależy do modelu routera, szczegółowy opis należy sprawdzić instrukcję routera.

## Zabezpieczenie dostępu do aplikacji

W celu zabezpieczenia dostępu:

1. Wyłączenie łatwego logowania

Gdy bramka działa tylko w sieci lokalnej umożliwiamy kilka sposobów autentykacji, w tym:
- łatwe logowanie w zaufanej sieci (wystarczy wybrać użytkownika z listy żeby się zalogować bez podawania hasła)
- logowanie za pomocą hasla API

Nasza orginalna konfiguracja autentykacji wygląda tak:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
    - type: trusted_networks
    - type: legacy_api_password
```


Tak łatwe metody autentykacji nie są odpowiednie w przypadku dostępu z Internetu, dlatego należy je wyłączyć. W tym celu wystarczy nadpisać domyślną konfigurację Asystenta dostępną na bramce w lokalizacji **/data/data/pl.sviete.dom/files/home/AIS/configuration.yaml** podając tylko jeden typ autentykacji **homeassistant** w auth_providers:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```

2. Zalecamy włączenie modułu uwierzytelniania wieloskładnikowego

Moduł uwierzytelniania wieloskładnikowego po podaniu hasła (coś co wiemy)  wymaga podania kolejnego jednorazowego hasła które ma określony czas ważności i jest przesyłane na telefon (coś co tylko my dostaniemy).
W celu włączenia tego zabezpieczenia należy przejść do ustawienia użytkownika a następnie postępować zgodnie z instrukcją zamieszczoną w regionie **Moduły uwierzytelniania wieloskładnikowego**

![Hasło jednorazowe](/AIS-docs/img/en/bramka/totp_settings.png)


