# wanCodeSpace

Vite + React personal-info demo. This repo is set up for GitHub Actions + Dokploy CI/CD: every push to `main` builds and pushes a Docker image to GHCR, then requests a Dokploy deployment once the required secrets are configured.

## ✨ Features

- 💻 Vite + React (Framer Motion, Lucide)
- 📦 Multi-stage Dockerfile (`node:22-alpine` build → `nginx:alpine` serve)
- 🚀 GitHub Actions: build + push to GHCR
- 🐳 Dokploy: pulls `ghcr.io/wanmixc/wancodespace:latest` and deploys

## 📦 Installation

```bash
git clone https://github.com/Wanmixc/wanCodeSpace.git
cd wanCodeSpace
npm install
npm run dev
```

## 🛠️ Local build (no Docker)

```bash
npm run build   # vite build -> dist/
npm run preview
```

## ☸️ CI/CD with GitHub Actions + Dokploy

### How it works

```
push to main
  └─ GitHub Actions: build and push image → request Dokploy deployment
       └─ Dokploy pulls the image and serves it on port 80
```

### Setup

The checked-in workflow builds and publishes the image, then requests a Dokploy
deployment. Follow [the CI/CD setup guide](docs/cicd-setup.md) to configure
Dokploy and the required GitHub repository secrets.

## 📁 Layout

```
.github/workflows/deploy.yml   # GitHub Actions pipeline
.dockerignore
Dockerfile                      # node build → nginx serve
nginx.conf                      # static site + SPA fallback
README.md                       # this file
```

## 🔎 Troubleshooting

See the [CI/CD setup guide](docs/cicd-setup.md#9-troubleshooting) for build,
registry, and deployment troubleshooting.

## 📜 Notes

- Konfigurasi CI/CD ini memakai **GitHub Actions** sebagai builder, **GHCR** sebagai registry, dan **Dokploy** sebagai deployer.
- `concurrency` groups builds by workflow and ref; the job runs only on `main`.
- Repository ini adalah contoh minimal — repository nyata biasanya punya test, lint, dan smoke-test sebelum image push.
