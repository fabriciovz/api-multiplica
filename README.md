# Api-Multiplica

This is an api developed in NodeJS/Express with Layer oriented architecture and Domain Driven Development (DDD).

### Installation

If you want to initialize the project, use this command (you'll create an image and container, then it run the docker container):
```sh
$ make application-init
```

If you only want to run the container, use this one:
```sh
$ make application-start
```

If you only want to stop the container, use this one:
```sh
$ make application-stop
```

### Something went wrong?

If you want to reset the container:
```sh
$ make api-reset
```

If you want to uninstall the api:
```sh
$ make api-uninstall
```

For more information, please have a look at the Makefile