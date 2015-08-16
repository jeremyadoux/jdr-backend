#!/bin/bash
sudo apt-get update
sudo curl -sSL https://get.docker.com/ubuntu/ | sudo sh

sudo mkdir /home/vagrant/mongodb

sudo docker build -t saleskapital/sailsjs /vagrant/Docker/sailsjs
sudo docker pull mongo

sudo docker rm $(docker ps -a -q)

sudo cp /vagrant/.bash_aliases ~/.bash_aliases
sudo . ~/.bashrc

sudo docker run -d -p 27017:27017 -v /data/db:/home/vagrant/mongodb --name mongodb mongo