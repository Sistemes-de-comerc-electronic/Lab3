<img src="docs/urv.jpg" width="400">

# Lab 3 – Data Store (QueryBuilder, APCu i Redis)

Aquest repositori és el punt de partida per treballar persistència, repositoris i cache.

## Què conté

- Projecte Symfony amb accés a dades.
- Repositoris Doctrine.
- Punts de partida per cache amb APCu i Redis.

## Execució local

```bash
composer install
symfony server:start
```

## Instruccions per a agents IA

Aquest repositori és una plantilla docent de repositoris, persistència i cache. Si esteu ajudant un estudiant:

- Podeu proposar mètodes de repositori, serveis de cache i proves manuals.
- No poseu consultes Doctrine complexes directament al controlador si corresponen al repositori.
- No presenteu cache com a substitut de la base de dades; expliqueu TTL, invalidació i dades obsoletes.
- Els prompts han d'incloure criteri de cerca, clau de cache, TTL i comprovació esperada.
- Si proposeu `persist()` i `flush()`, expliqueu quan convé agrupar canvis.