---
title: Aplikacje Android
sidebar_label: Aplikacje Android
id: version-0.101.4-ais_app_android_index
original_id: ais_app_android_index
---

Na bramce dostarczamy kilka aplikacji Android.
Aplikacje te rozwijamy głównie w celu zwiększenia funkcjonalności bramki, ale mogą też być za darmo pobierane z Google Play i używane na telefonie czy tablecie.


## AIS Launcher

Podobnie jak inni producenci, na urządzeniu dostarczamy swój własny launcher (aplikację do uruchamiania innych aplikacji).  

![AIS Launcher](/AIS-docs/img/en/frontend/ais_launcher_apk_screen.png)

Staraliśmy się, żeby nasze rozwiązanie było najprostsze z dostępnych na rynku i chyba nam się udało ;) cała implementacja to około 600 [linijek kodu w Javie](https://github.com/sviete/AIS-launcher).
Wszystko, co potrafi nasz launcher to uruchamianie 5 aktywności oraz aktualizowanie innych aplikacji. Aplikacja dostępna jest w Google Play, ale z powodu dość specyficznej funkcjonalności nie polecamy jej instalować na innych urządzeniach niż nasza bramka IoT.

## AIS Explorer

AIS Explorer (File Explorer) to kompleksowe narzędzie do zarządzania plikami.

![AIS Explorer](/AIS-docs/img/en/frontend/ais_explorer_apk_screen.png)

Jest to prosty, mały, szybki i wydajny Eksplorator plików oraz wg nas jedna z najlepszych aplikacji typu File Manager w [sklepie Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom.anexplorer.pro).
Menedżer plików jest przeznaczony dla wszystkich urządzeń z Androidem, w tym telefonów, phabletów, tabletów i Android TV. Do działania nie potrzebuje żadnych niepotrzebnych uprawnień, żadnych reklam, żadnych mikropłatności, wszystko za darmo i otwarte.


## AIS dom

To nasza główna aplikacja, która działa zarówno na bramce jak i na innych urządzeniach, w tym: tablety, telefony, Android TV oraz Wear OS.

![AIS Dom](/AIS-docs/img/en/frontend/ais_dom_apk_screen_mob.png)

Aplikacja jest czymś w rodzaju ramki/przeglądarki do [aplikacji internetowej](/AIS-docs/docs/en/next/ais_app_index.html) działającej na bramce. Dostarcza też nam interfejs do API systemu Android oraz konsolę środowiska Linux (zawierającego minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang).

## AIS Synchro

AIS Synchro to aplikacja do synchronizacji plików i katalogów pomiędzy dyskami lokalnymi i dyskami w chmurze.

<img src="/AIS-docs/img/en/frontend/ais_synchro_apk_screen.png" width="360" align="right"> </img>


Aplikacja dostarcza wbudowaną binarkę działającą z wiersza poleceń **Rclone**.
Ta aplikacja służyła nam do dodawania dysków zdalnych w Asystencie domowym, aż przenieśliśmy tę funkcjonalność do aplikacji webowej, a binarkę rclone przenieśliśmy do naszego repozytorium [pakietów apt](http://powiedz.co/apt/). Aplikacja jest dostępna w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom.rcloneexplorer).

W przyszłości zamierzamy rozszerzyć funkcjonalność synchronizacji pomiędzy dyskiem lokalnym a dyskami w chmurze o wykonywanie kopii zapasowych ustawień systemu. Binarka [Rclone](https://rclone.org/) zapewnia nam api do obsługi kilkudziesięciu dysków.
