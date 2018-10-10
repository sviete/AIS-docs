---
title: Dostęp do bramki po SSH
sidebar_label: SSH
id: version-0.79.5-ais_bramka_remote_ssh
original_id: ais_bramka_remote_ssh
---

SSH zapewnia bezpieczny sposób uzyskiwania dostępu do zdalnych hostów.
Asystent domowy dostarcza połączenie SSH za pośrednictwem bardzo popularnego pakietu openssh.

Środowisko linux dostępne na bramce jest systemem dla pojedynczego użytkownika, dlatego niezależnie od podanej nazwy użytkownika zalogujesz się jako jedyny dostępny użytkownik systemu Asystent domowy.


## pobranie autoryzowanego klucza

> W Asystent domowy obsługujemy logowanie po SSH za pomocą autoryzowanego klucza. Wygenerowany i autoryzowany klucz dostępny jest w lokalnej instancji systemu Asystent domowy pod adresem: [https://ais-dom:8123/local/id_rsa_ais](https://ais-dom:8123/local/id_rsa_ais)


![Pobranie klucza SSH](/AIS-docs/img/en/bramka/ssh_download_key.png)

## połączenie z konsolą bramki

Po pobraniu autoryzowanego klucza ssh możemy połączyć się z konsolą bramki, w tym celu w swojej konsoli wystarczy:

- zmienić uprawnienia dla pobranego klucza

```bash
$ chmod 400 id_rsa_ais
```

- uruchomić ssh z odpowiednim portem i ścieżką do klucza ssh

```bash
$ ssh ais-dom -p 8022 -i id_rsa_ais
```

![Połączenie SSH](/AIS-docs/img/en/bramka/ssh_console.png)
