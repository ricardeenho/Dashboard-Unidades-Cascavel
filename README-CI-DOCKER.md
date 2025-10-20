# CI/CD e Docker — MMG Dashboard

## 📦 CI/CD — GitHub Actions + Vercel
O arquivo `.github/workflows/deploy-vercel.yml` automatiza o deploy para a **Vercel**.

### Configuração de Segredos
Antes do primeiro deploy, adicione no repositório GitHub:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Com isso, a cada push no branch `main` ou `master`, o dashboard será automaticamente publicado.

---

## 🐳 Docker
O arquivo `Dockerfile` permite rodar o projeto localmente ou em servidor próprio.

### Build e Execução
```bash
docker build -t mmg-dashboard .
docker run -p 3000:3000 mmg-dashboard
```

Abra: http://localhost:3000

O container inclui todas as dependências (Next.js, Tailwind, Recharts, etc).
Atualização de teste — 20/10/2025
