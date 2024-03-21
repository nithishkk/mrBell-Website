FROM node
WORKDIR "/src/index.js"
COPY . .

RUN npm install
EXPOSE 8080
CMD [ "npm","run","dev","start" ]