# ajaxgoogleapis_ynh
A mirror of ajax.googleapis.com for YunoHost

## Why this app
This apps is for people who want visit website including script from ajax.googleapis.com without using the real ajax.googleapis.com. Indeed, you could preferer use your own copy of jquery, angular etc... With this app you can avoid (in certain case) to send to google which websites you visit or simply that you are connected.

## Caution 
It doesn't work with https due to ssl verification (hsts "sec_error_unknown_issuer" #3). You should install your CA.crt in your browser. In firefox, delete cert8.db and cert_override.txt in your ~/.mozilla/firefox/XXXXX/ directory could fix this issue.

## How to use it
You need to add firstly the domain ajax.googleapis.com in your yunohost instance. You can do it on the web admin or with this command line:
```shell
sudo yunohost domain add 'ajax.googleapis.com'
```

Next you can install this apps  like that:
```shell
sudo yunohost app install https://github.com/zamentur/ajaxgoogleapis_ynh/
```

You can decide to restrict the usage to connected users, but in this case, you need to be connected when you visit a website with a scripts from ajax.googleapis.com...

After the installation on your server, you need to add this line in your /etc/hosts file:

```ini
  IP_OF_YOUR_YUNOHOST_INSTANCE ajax.googleapis.com
```

If you don't know the ip of your instance try this command to obtain it:
```shell
ping your-yunohost-domain.tld
PING your-yunohost-domain.tld (IP_OF_YOUR_YUNOHOST_INSTANCE) 56(84) bytes of data.
```


