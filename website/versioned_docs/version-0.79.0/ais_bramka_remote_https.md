---
title: Dostęp do bramki po HTTPS
sidebar_label: HTTPS
id: version-0.79.0-ais_bramka_remote_https
original_id: ais_bramka_remote_https
---


W przypadku protokołu HTTPS komunikacja z bramką a Twoją przeglądarką jest szyfrowana.
>Szyfrowanie jest wymagane, jeśli chcesz wydawać głosowe komendy bezpośrednio z przeglądarki internetowej (bez pilota i dedykowanej aplikacji).
Ta opcja dostępna jest tylko w przeglądarkach mających funkcję głosowego wejścia (funkcjonalność nie jest dostępna w systemie iOS).

# instalacja certyfikatu

Zainstaluj poniższy certyfikat w swoim systemie/przeglądarce, aby dodać do zaufanych lokalne hosty: **localhost** i **ais-dom**.

> Certyfikat dostępny jest tu: [Certyfikat](/AIS-docs/cert/rootCA.pem)

![Uruchomienie konwersacji w przeglądarce](/AIS-docs/img/en/bramka/https_connection_1.png)

# uruchomienie aplikacji w przeglądarce
Aplikacja dostępna jest w twojej sieci lokalnej pod adresem:

[https://ais-dom:8123](https://ais-dom:8123)

# uruchomienie komendy głosowej

Naciśnij mikrofon na górze strony, aby uruchomić konwersację z Asystentem domowym.

![Uruchomienie konwersacji w przeglądarce](/AIS-docs/img/en/bramka/conversation_in_browser.png)
