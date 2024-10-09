## dev
### config

Make sure to check [symfony requirements](https://symfony.com/doc/current/setup.html) , and install and start [docker desktop](https://www.docker.com/products/docker-desktop/).

### quick setup

### step-by-step setup

```shell
# 1. (always) start docker
docker compose up -d
# 2(one-time-required) install dependencies
docker compose exec phpfpm composer install
# start node services
npm run dev
```
####  open site
[Open horse-shoes-site ](http://calendertest.local.itkdev.dk/)
```shell
# 5 (optional) mac terminal command
open http://horseshoes.local.itkdev.dk/
```

### helpful commands
```shell
## to miggrate new data to database
docker compose exec phpfpm bin/console doctrine:migration:migrate
## to initiate 
 
```

### helpful tips 
- syntax when install is always= docker compose exec phpfpm composer <command> <command>
- syntax when running command in docker is always dockker compose exec phpfpm bin/console <command> <command>

