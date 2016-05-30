FROM centos:centos6.6

MAINTAINER Guillaume Ehret <guillaume@dev-mind.com>

RUN yum install -y curl

ENV JDK_VERSION 8u60
ENV JDK_BUILD_VERSION b27
RUN \
	curl -LO "http://download.oracle.com/otn-pub/java/jdk/$JDK_VERSION-$JDK_BUILD_VERSION/jdk-$JDK_VERSION-linux-x64.rpm" -H 'Cookie: oraclelicense=accept-securebackup-cookie' && \
	rpm -i jdk-$JDK_VERSION-linux-x64.rpm && \
	rm -f jdk-$JDK_VERSION-linux-x64.rpm && \
	yum clean all

ENV JAVA_HOME /usr/java/default

RUN yum install -y git
RUN yum install -y firefox
RUN yum install -y Xvfb
RUN yum install -y libXfont Xorg

# Install Node.js
RUN curl --silent --location https://rpm.nodesource.com/setup | bash -
RUN yum install -y nodejs

RUN npm install -g grunt-cli
RUN npm install -g gulp

RUN mkdir -p /data
WORKDIR /data

RUN git clone https://github.com/Dev-Mind/devmind-xvfb
WORKDIR /data/devmind-xvfb

RUN npm install

CMD ["/bin/bash"]