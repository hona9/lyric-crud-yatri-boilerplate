FROM node:12-alpine

WORKDIR '/app'

COPY ./package.json ./
COPY ./yarn.lock ./

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN yarn install

COPY . .

EXPOSE 5004

CMD ["yarn", "start"]
