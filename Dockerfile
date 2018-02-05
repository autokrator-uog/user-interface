FROM node:carbon

COPY . .

RUN npm install

CMD npm start
