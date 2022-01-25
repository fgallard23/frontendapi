# use node.js base image available in the container
FROM node:14

# directory in container
WORKDIR /app

# copy file into our working directory
COPY package.json .

# install all dependencies
RUN npm install

# install all dependencies
RUN node server.js

# copy rest of code
COPY . .

# port expose outside container
EXPOSE 3000

# execute node.js con node command
CMD [ "node", "App.js" ]
