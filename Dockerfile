FROM node:8.12.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

# RUN apt-get mysql

RUN npm install --only=production

# RUN npm run seed

EXPOSE 3004

CMD [ "npm", "start" ]









# What image do you want to start building on?

# Make a folder in your image where your app's source code can live

# Tell your container where your app's source code will live

# What source code do you what to copy, and where to put it?

# Does your app have any dependencies that should be installed?

# What port will the container talk to the outside world with once created?

# How do you start your app?
