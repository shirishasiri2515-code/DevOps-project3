# DevOps Project 3 — CI/CD Pipeline Basics
**DecodeLabs Industrial Training Kit | Batch 2026**

## Goal
Understand and implement the concept of Continuous Integration (CI) and
Continuous Deployment (CD) using GitHub Actions.

## What this project does
A minimal Node.js app with an automated pipeline that runs on every `git push`:

1. **Build** — installs dependencies and runs the build step.
2. **Test** — runs an automated test suite (Jest). If any test fails, the
   pipeline stops and blocks deployment (the "quality gate").
3. **Deploy** — only runs once build + test succeed, simulating a deployment
   to a live server.

## Project structure
```
.
├── .github/workflows/ci-cd.yml   # The pipeline definition (YAML)
├── app.js                        # Application code
├── tests/app.test.js             # Automated tests
├── package.json                  # Scripts + dependencies
└── README.md
```

## Key concepts demonstrated
- **CI (Continuous Integration):** merging code + running automated tests
  to answer "does this break the app?"
- **CD (Continuous Deployment):** shipping verified code without manual steps
- **Pipeline stages:** Input (git push) → Process (build/test) → Output
  (verified artifact / deployment)
- **Quality gate:** the hard stop rule — one failed test blocks deployment
- **Secrets management:** production credentials (e.g. `EC2_HOST`,
  `EC2_USER`, `EC2_PRIVATE_KEY`) should live in GitHub Secrets, never
  hardcoded in the repo

## How to run locally
```bash
npm install
npm test
npm start
```

## How the pipeline is triggered
Every push or pull request to `main` automatically triggers the workflow
in `.github/workflows/ci-cd.yml`. You can see the run and its result (green
checkmark ✅ or red ❌) under the **Actions** tab of the GitHub repo.
