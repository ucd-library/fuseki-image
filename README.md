# Jena Fuseki 2 docker image with HDT support

* Docker image: [stain/jena-fuseki](https://hub.docker.com/r/stain/jena-fuseki-hdt/)
* Base images:  [java](https://hub.docker.com/r/_/openjdk):9-jre-slim
* Source: [Dockerfile](https://github.com/stain/jena-docker/blob/master/jena-fuseki-hdt/Dockerfile), [Apache Jena Fuseki](http://jena.apache.org/download/)

This is a [Docker](https://www.docker.com/) image for running
[Apache Jena Fuseki 2](https://jena.apache.org/documentation/fuseki2/),
which is a [SPARQL 1.1](http://www.w3.org/TR/sparql11-overview/) server with a
web interface, backed by the
[Apache Jena TDB](https://jena.apache.org/documentation/tdb/) RDF triple store
extended with support for
[HDT Files](https://github.com/rdfhdt/hdt-java) files.

## Usage

```bash
docker run --name fuseki -p 3030:3030  us-west1-docker.pkg.dev/aggie-experts/docker/fuseki:1.0.1
```

