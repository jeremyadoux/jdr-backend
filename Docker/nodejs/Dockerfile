FROM ubuntu:trusty
MAINTAINER Adoux J�r�my

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get update --fix-missing
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup | sudo bash -

RUN apt-get install -y supervisor nodejs imagemagick git openssl make node-gyp
RUN npm install -g npm@latest
RUN npm install -g express-generator bower mocha sinon should assert grunt-cli gulp 
RUN apt-get update --fix-missing

RUN mkdir -p /var/log/supervisor

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN apt-get autoremove -y

ADD ./config/supervisord.conf /etc/supervisor/conf.d/supervisord-nodejs.conf

RUN ln -s /usr/bin/nodejs /usr/local/bin/node

RUN npm install -g sails

EXPOSE 80
EXPOSE 1337
EXPOSE 3000

WORKDIR /var/www

CMD ["/usr/bin/supervisord", "-n"]