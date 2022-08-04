FROM node:12.18.1 AS ui-build
WORKDIR /usr/src/app
COPY pacientesapp/ ./pacientesapp/
RUN cd pacientesapp && npm install && npm run build

FROM node:12.18.1 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/pacientesapp/build ./pacientesapp/build
COPY backendPacientes/package*.json ./backendPacientes/
RUN cd backendPacientes && npm install
COPY backendPacientes/bd.js ./backendPacientes/
COPY . .

EXPOSE 8000

CMD ["node", "./backendPacientes/bd.js"]