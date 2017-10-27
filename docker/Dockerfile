FROM mhart/alpine-node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Environment Variables
ENV PORT=9080
ENV NAME=localhost

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "node", "index.js" ]
