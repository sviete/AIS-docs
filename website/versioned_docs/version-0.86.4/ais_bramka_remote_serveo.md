---
title: Zdalne przekazywania portów SSH
sidebar_label: Serveo
id: version-0.86.4-ais_bramka_remote_serveo
original_id: ais_bramka_remote_serveo
---

Inny sposób na dostęp do bramki z Internetu, który nie wymaga konfiguracji routera oraz instalowania żadnych dodatkowych pakietów to wykorzystanie **usługi zdalnego przekazywania portów SSH**. Ta metoda zostanie dokładnie opisana poniżej wraz z przykładami.


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

teraz w celu połączenia się ze swoją bramką z internetu, wpisz w przeglądarce:

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

teraz w celu połączenia się ze swoją bramką po ssh będąc poza lokalną siecią wystearczy, że wpiszesz w konsoli:

```bash
$ ssh -o ProxyCommand="ssh -W bramka:22 serveo.net" bramka -i id_rsa_ais
```



 ### Zapisanie zdalnego przekazywania portów SSH

- autossh

 W celu zapewnienia, że zdalne przekierowanie portów będzie automatycznie odnawiane, zamiast ssh zastosujemy autossh, w tym celu w konsoli instalujemy pakiet:

 ```bash
 $ apt install autossh
 ```

W celu uruhamiania dostępu po każdym restarcie bramki, możemy posłużyć się menedżerem procesów PM2.

> Należy zwrócić uwagę, że w poniższych przykładach **bramka**, to tylko przykładowy alias - definiując proces należy podać własny alias

- zdefiniowanie procesu dostępu do aplikacji w PM2

```bash
$ pm2 start autossh --name ext-http \
    -- -M 0 -o ServerAliveInterval=60 -R bramka:80:localhost:8180 serveo.net
```

- zdefiniowanie procesu dostep do konsoli w PM2

```bash
$ pm2 start autossh --name ext-ssh \
    -- -M 0 -o ServerAliveInterval=60 -R bramka:22:localhost:8022 serveo.net
```

- zapisanie zdefiniowanych procesów

```bash
$ pm2 save
```
