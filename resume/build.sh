#!/usr/bin/env bash
# Render resume/resume.html to public/resume.pdf with headless Chrome.
# Needs network on first run: Pretendard and IBM Plex Mono are fetched from
# their CDNs and embedded into the PDF.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="$(dirname "$here")"
out="$root/public/resume.pdf"

chrome=""
for candidate in google-chrome google-chrome-stable chromium chromium-browser; do
  if command -v "$candidate" >/dev/null 2>&1; then chrome="$candidate"; break; fi
done
if [ -z "$chrome" ]; then
  echo "No Chrome/Chromium found on PATH." >&2
  exit 1
fi

# Serve the folder — file:// origins get no webfonts.
port=8799
python3 -m http.server "$port" --directory "$here" >/dev/null 2>&1 &
server=$!
trap 'kill "$server" 2>/dev/null || true' EXIT
sleep 1

"$chrome" --headless --disable-gpu --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=20000 \
  --print-to-pdf="$out" \
  "http://localhost:$port/resume.html" 2>/dev/null

echo "Wrote $out"
