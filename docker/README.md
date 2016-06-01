Le script pour configurer le service est celui ci

```
#!/bin/bash
#chkconfig: 345 95 50
#description: Starts xvfb on display 99
if [ -z "$1" ]; then
  echo "`basename $0` {start|stop}"
  exit
fi

case "$1" in
  start)
     /usr/bin/Xvfb :99 -screen 0 1280x1024x24  -ac +extension RANDR +render -noreset &
  ;;

  stop)
     killall Xvfb
  ;;
esac

```

Ce script doit être exécutable

```
chmod +x /etc/init.d/xvfb
```

Pour activer le service

```
chkconfig xvfb on
```

Ensuite vous pouvez faire un `sudo service xvfb start` ou `sudo service xvfb stop`
