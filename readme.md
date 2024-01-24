## A brief overview of secrets on github pages 

1. it is not possible to mask secrets or api keys solely usinig js on github pages, it gets exposed through the network headers 
2. in order to leverage an api , what i did was host it on a different server using nodejs and then called the link on which it was hosted through the frontend.
3. the one that i created using nodejs uses .env variables to mask the api keys when committed on github.
4. dont forget to add the .env in gitignore.