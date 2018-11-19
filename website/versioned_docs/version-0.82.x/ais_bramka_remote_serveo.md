---
title: Dostęp do bramki z Internetu
sidebar_label: Serveo
id: version-0.82.x-ais_bramka_remote_serveo
original_id: ais_bramka_remote_serveo
---

Jeśli chcesz możesz zezwolić na dostęp do Twojej lokalnej bramki przez Internet. Dzięki temu będziesz mógł sterować automatyką w swoim domu (także głosowo) nie tylko w swojej lokalnej sieci ale też z dowolnego miejsca z dostępem do Internetu.

Jedną z metod by to osiągnąć jest przekierowanie portów na routerze, w przypadku aplikacji sprowadza się do przekierowania portu 8123 z bramki na wolny port na routerze. Router jest dostępny z internetu więc wywołując jego adres na udostępnionym porcie można uzyskać dostęp do aplikacji Asystent domowy. To jak wykonać takie przekierowanie zależy do modelu routera, szczegółowy opis należy sprawdzić instrukcję routera.

Inny sposób który nie wymaga konfiguracji routera oraz instalowania żadnych dodatkowych pakietów to wykorzystanie **usługi zdalnego przekazywania portów SSH**. Ta metoda zostanie dokładnie opisana poniżej wraz z przykładami.


## Dostęp do aplikacji z sieci Internet

żeby udostępnić aplikację w sieci internet, w konsoli bramki wykonaj komendę:

```bash
$ ssh -R 80:localhost:8180 serveo.net
```
Opcja -R nakazuje klientowi SSH żądanie przekierowania portów z serwera i żądań proxy do określonego hosta i portu (Twojej bramki). Poddomena serwera serveo.net zostanie przypisana do przekazywania ruchu HTTP.

W odpowiedzi w konsoli pojawi się informacja typu:

```bash
Hi there
Forwarding HTTP traffic from https://alias.serveo.net
Press g to start a GUI session and ctrl-c to quit.
```

teraz możesz w przeglądarce wpisać w celu połączenia się ze swoją bramką z internetu

https://**alias**.serveo.net

> W powyższym przypadku **alias** został wygenerowany/nadany automatycznie. Jest on unikalny dla każdej instancji i w Twoim przypadku będzie inny.

Możesz też podać własny alias który chciałbyś mieć w adresie i jeżeli będzie wolny to zostanie przypisany do Ciebie. W celu podania własnego aliasa np. **bramka** w konsoli wpisujemy następującą komendę:


```bash
$ ssh -R bramka:80:localhost:8180 serveo.net
```


## Dostęp do konsoli bramki z sieci Internet

w podobny sposób jak aplikację możesz też przekierować połączenie ssh, w tym celu w konsoli wpisz:

```bash
$ ssh -R bramka:22:localhost:8022 serveo.net
```

W odpowiedzi w konsoli pojawi się informacja typu:

```bash
Hi there
Forwarding SSH traffic from alias "bramka"
Press g to start a GUI session and ctrl-c to quit.
```


## Automatyczne stałe udostępnianie bramki

> Gdy dodajesz na stałe dostęp z zewnątrz do swojej bramki to **pamiętaj o  bezpieczeństwie**. Należy odpowiednio skonfigurować logowanie do Asystenta domowego w celu zabezpieczenia dostępu, **patrz opis poniżej**.


W celu zabezpieczenia dostępu:

1. Wyłączenie logowania z zaufanych sieci

Logowanie z zaufanych sieci jest bardzo pomocne w przypadku gdy bramka działa tylko w sieci lokalnej. W takim przypadku wystarczy wybrać użytkownika z listy żeby się zalogować bez podawania hasła. Taka metoda nie jest odpowiednia w przypadku dostępu z Internetu, dlatego należy ją wyłączyć. W tym celu należy nadpisać konfigurację Asystenta dostępną na bramce w lokalizacji **/data/data/pl.sviete.dom/files/home/AIS/configuration.yaml**
usunąć typ autentykacji **trusted_networks** z auth_providers

```yaml
homeassistant:
  auth_providers:
    - type: homeassistant
    - type: legacy_api_password
```

2. Zalecamy włączenie modułu uwierzytelniania wieloskładnikowego

Moduł uwierzytelniania wieloskładnikowego po podaniu hasła (coś co wiemy)  wymaga podania kolejnego jednorazowego hasła które ma określony czas ważności i jest przesyłane na telefon (coś co tylko my dostaniemy).
W celu włączenia tego zabezpieczenia należy przejść do ustawienia użytkownika a następnie postępować zgodnie z instrukcją zamieszczoną w regionie **Moduły uwierzytelniania wieloskładnikowego**

![Hasło jednorazowe](/AIS-docs/img/en/bramka/totp_settings.png)

 3. Zapisanie zdalnego przekazywania portów SSH

- autossh

 W celu zapewnienia, że zdalne przekierowanie portów będzie automatycznie odnawiane, zamiast ssh zastosujemy autossh, w tym celu w konsoli instalujemy pakiet:

 ```bash
 $ apt install autossh
 ```

W celu uruhamiania dostępu po każdym restarcie bramki, możemy posłużyć się menedżerem procesów PM2.

> Należy zwrócić uwagę, że w poniższych przykładach **bramka**, to tylko przykładowy alias - definiując proces należy podać własny alias

- zdefiniowanie procesu dostępu do aplikacji w PM2

```bash
$ pm2 start autossh --name externalhttp
-- -M 0 -o ServerAliveInterval=60 -R bramka:80:localhost:8180 serveo.net
```

- zdefiniowanie procesu dostep do konsoli w PM2

```bash
$ pm2 start autossh --name externalssh
-- -M 0 -o ServerAliveInterval=60 -R bramka:22:localhost:8022 serveo.net
```

- zapisanie zdefiniowanych procesów

```bash
$ pm2 save
```
