---
title: "Jak działa logowanie do aplikacji."
sidebar_label: Jak działa logowanie do aplikacji
---

## Na czy polega logowanie do panelu WWW Asystenta domowego

### Logowanie gdy bramka działa w sieci lokalnej

Podczas logowania wybrany mechanizm uwierzytelnienia (auth_providers) sprawdza podane poświadczenia, aby upewnić się, że jesteś autoryzowanym użytkownikiem.
Kod poszczególnych mechanizmów uwierzytelnienia dostępny jest w repozytorium [bezpośredni link do kodu auth_providers](/AIS-home-assistant/tree/master/homeassistant/auth/providers)

W dokuemntacji nakreślono jak działa [zabezpieczenie dostępu do aplikacji](/AIS-docs/docs/en/ais_bramka_remote_www_index.html#zabezpieczenie-dost%C4%99pu-do-aplikacji)

Gdy bramka działa tylko w sieci lokalnej umożliwiamy trzy sposoby autentykacji:
- łatwe logowanie w zaufanej sieci (wystarczy wybrać użytkownika z listy żeby się zalogować bez podawania hasła)
- logowanie za pomocą nazwy użytkownika i hasła
- logowanie za pomocą hasla API

konfiguracja autentykacji wygląda tak:

```yaml
homeassistant:
  auth_providers:
    - type: trusted_networks
    - type: homeassistant
    - type: legacy_api_password
```

W aplikacji ta konfiguracja przy wybranym pierwszym sposobie autentykacji **trusted_networks** (Zaufane sieci) wygląda tak, jak przedstawiono poniżej:

![Logowanie w sieci lokalnej](/AIS-docs/img/en/faq/auth_trusted_networks.png)

przy wybranym pierwszym drugim sposobie autentykacji **homeassistant** (Logowanie za pomocą nazwy użytkownika i hasła) wygląda tak, jak przedstawiono poniżej:

![Logowanie w sieci lokalnej](/AIS-docs/img/en/faq/auth_homeassistant.png)

przy wybranym trzecim sposobie autentykacji **legacy_api_password** (Hasło do API) wygląda tak, jak przedstawiono poniżej:

![Logowanie w sieci lokalnej](/AIS-docs/img/en/faq/auth_legacy_api_password.png)


### Logowanie gdy bramka ma włączony dostęp z Internetu

W przypadku gdy włączony jest dostęp z Internetu

![Włączenie dostępu z Internetu](/AIS-docs/img/en/faq/access_form_internet.png)

To automatycznie wyłączamy proste logwanie.
I wtedy domyślna konfiguracja jest taka jak opisano w dokumentacji [wyłączenie łatwego logowania](/AIS-docs/docs/en/ais_bramka_remote_www_index.html#wy%C5%82%C4%85czenie-%C5%82atwego-logowania)

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```

i wtedy możemy logować się tylko za pomocą loginu i hasła. Nie ma już możliwości wyboru prostego sposobu autentykacji, tak jak to przedstawiono poniżej

![Włączenie dostępu z Internetu](/AIS-docs/img/en/faq/auth_access_form_internet_on.png)


### Jak mogę ustalić samemu sposób logowania

Wystarczy nadpisać naszą domyślną konfigurację i wg własnych potrzeb usunąć lub dodać dostawcę autentykacji.
W tym celu:

1. przechodzimy do konsoli

![Konsola](/AIS-docs/img/en/faq/go_to_console.png)

2. w konsoli przechodzimy do edycji konfiguracji autentykacji

```bash
$ cd AIS
$ nano configuration.yaml  
```

3. nadpisujemy domyślną konfigurację systemu

Zaawansowana konfiguracja Asystenta domowego opisane jest [tu](AIS-docs/docs/en/ais_gate_faq_config_yaml.html#plik-konfiguracyjny-configurationyaml)

Jeżeli chcemy żeby logowanie było zawsze za pomocą loginu i hasła to podajemy następującą konfigurację:

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
```

![Konsola](/AIS-docs/img/en/faq/edit_configuration.png)


4. upewniamy się, że po zmianach konfiguracja jest prawidłowa i restartujemy system

> w pliku yaml ważna jest ilość spacji dlatego po zmianach w konfiguracji upewnij się, że wszystko jest nadal prawidłowe. W tym celu przejdz do Konfiguracji i wybiesz opcje **Kontrola serwera**

![Konsola](/AIS-docs/img/en/faq/reload_config.png)


Po tej zmianie w konfiguracji opisanej powyżej, bez względu na to, czy dostęp z Internetu do bramki jest włączony, czy nie będziemy mieli możliwość logowania tylko przez podanie użytkownika i hasła.


## Jak to się dzieje, że po pierwszym logowaniu nie muszę się już logować ponownie

Przy pierwszym logowaniu pytamy czy zapamiętać dane logowania
