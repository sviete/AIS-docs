---
title: Jak działa logowanie do aplikacji.
sidebar_label: Jak działa logowanie do aplikacji
id: version-0.96.10-ais_faq_authentication
original_id: ais_faq_authentication
---

## Proszę mi wytłumaczyć na czy polega logowanie do panelu www AIS-dom:

Podczas logowania wybrany mechanizm uwierzytelnienia (auth_providers) sprawdza podane poświadczenia, aby upewnić się, że jesteś autoryzowanym użytkownikiem.
Kod poszczególnych mechanizmów uwierzytelnienia dostępny jest tu https://github.com/sviete/AIS-home-assistant/tree/master/homeassistant/auth/providers

Tak jak to opisano w dokuemntacji [zabezpieczenie dostępu do aplikacji](/AIS-docs/docs/en/ais_bramka_remote_www_index.html#zabezpieczenie-dost%C4%99pu-do-aplikacji)

Gdy bramka działa tylko w sieci lokalnej umożliwiamy trzy sposoby autentykacji:
- logowanie za pomocą nazwy użytkownika i hasła
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

W aplikacji ta konfiguracja przy wybranym sposobie autentykacji Zaufane sieci (trusted_networks) wygląda tak, jak przedstawiono poniżej:




## Tryb parowania z bramką AIS dom

Na bramce AIS dom dostępna jest sekcja **Integracje** w której nowe urządzenie można dodać i jednocześnie skonfigurować przy pomocy kreatora prowadzącego krok po kroku.
Opis dostępny jest w dokumentacji [Dodawanie urządzenia do bramki](/AIS-docs/docs/en/ais_iot_add_to_gate.html)
