#!/usr/bin/env bash
set -euo pipefail

# Load .env into environment variables
set -a
source .env
set +a

docker compose up -d

cat > postgres-language-server.jsonc <<EOF
{
  "\$schema": "https://pg-language-server.com/0.21.0/schema.json",
  "db": {
    "host": "${PGHOST}",
    "port": ${PGPORT},
    "username": "${PGUSER}",
    "password": "${PGPASSWORD}",
    "database": "${PGDATABASE}",
    "connTimeoutSecs": 10,
    "allowStatementExecutionsAgainst": ["localhost/*"]
  }
}
EOF
