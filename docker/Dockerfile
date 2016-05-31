FROM centos:centos6.6

MAINTAINER Guillaume Ehret <guillaume@dev-mind.com>

RUN yum install -y curl tar

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
RUN yum install -y which

RUN mkdir -p /data
WORKDIR /data

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN yum install -y epel-release

# Install Node.js and npm
RUN yum install -y nodejs npm
RUN npm install -g gulp

RUN git clone https://github.com/Dev-Mind/devmind-xvfb
WORKDIR /data/devmind-xvfb

CMD ["/bin/bash"]