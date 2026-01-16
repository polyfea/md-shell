

# build md-shell
FROM node:24 AS fea-build

WORKDIR /workspace

COPY package.json  package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build
RUN npm run precompress
RUN find . -type f -name '*.map' -delete

# create minimalistic httpd image
FROM ghcr.io/polyfea/spa-base AS md-shell

EXPOSE 7105

COPY --from=fea-build /workspace/dist/ /spa/public/
# include common libs for import maps
COPY --from=fea-build /workspace/node_modules/@lit/context/ /spa/public/imports/@lit/context/
COPY --from=fea-build /workspace/node_modules/@lit/localize/ /spa/public/imports/@lit/localize/
COPY --from=fea-build /workspace/node_modules/@lit/reactive-element/ /spa/public/imports/@lit/reactive-element/
COPY --from=fea-build /workspace/node_modules/@material/web/ /spa/public/imports/@material/web/
COPY --from=fea-build /workspace/node_modules/lit-html/ /spa/public/imports/lit-html/
COPY --from=fea-build /workspace/node_modules/lit-element/ /spa/public/imports/lit-element/
COPY --from=fea-build /workspace/node_modules/lit/ /spa/public/imports/lit/


ENV OTEL_SERVICE_NAME=polyfea-md-shell
ENV SPA_BASE_FALLBACK_DISABLED=true
ENV SPA_BASE_JSON_LOGGING=true

LABEL org.opencontainers.image.authors="Polyfea Contributors"
LABEL org.opencontainers.image.url="https://github.com/polyfea/md-shell/blob/main/readme.md"
LABEL org.opencontainers.image.source="https://github.com/polyfea/md-shell.git"
LABEL org.opencontainers.image.vendor="Polyfea Team"
LABEL org.opencontainers.image.licence="Apache-2.0"
LABEL org.opencontainers.image.title="Polyfea Material Design Shell"
LABEL org.opencontainers.image.description="Material Design application shell for Polyfea ecosystem"
