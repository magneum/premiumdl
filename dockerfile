FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    wget \
    ffmpeg \
    bpm-tools \
    opus-tools \
    python3-pip \
    python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y 
RUN npm i -g yarn 
RUN git clone --branch render https://github.com/magneum/premiumdl
RUN cd premiumdl
WORKDIR /premiumdl
RUN yarn global add spotify-dl spdl-core forever
RUN rm -f yarn.lock && yarn install 
CMD [ "yarn", "start" ]
