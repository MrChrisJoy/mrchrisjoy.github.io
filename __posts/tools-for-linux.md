---
layout: post
title:  "[Test Post] Tools to Maintain your Linux Servers"
date:   2017-01-26 19:45:31 +1000
author: "Chris Joy"
categories: sysadmin
published: true
image: 
---

This post is just a sample post, used to test my blog.

Please ignore it.

Here are my 3 favorite tools I use in order to monitor and maintain my private linux cluster:

## 1. Ganglia
![](http://cdn.swcdn.net/creative/images/dnsStuff/freesms/ganglia.jpg){:style="float: right; width:50%"}
Ganglia is an open source software package designed to monitor high performance cluster.
The Titan super computer cluster uses Ganglia to monitor their cluster. It's architure was
designed to be scalable from the very begining and is based on hierarchical design, targeted at a
federation of clusters.

## 2. Webmin
![](http://www.tecmint.com/wp-content/uploads/2014/05/Install-Webmin-in-Linux.png){:style="float: right; width:50%"}
Webmin is also another open source tool for managing server configuration files. It lets you administer
your server through a web interface via a web interface rather using a SSH client. Webmin's brother
"Usermin" allows you to run other applications such as webmail and other user-level tasks, rather than
admin-level task.

## 3. Puppet (Open Source)
![](https://anturis.com/blog/11-awesome-tools-for-linux-sysadmins/1.png){:style="float: right; width:50%"}
Puppet is a software package that allows system administrators automate, orchestrate and report various
server processes. Puppet allows you to automate tasks using universal cron tasks. Instead of writing backup
scripts on each of your nodes, you could write once and deploy it throughout your cluster.
