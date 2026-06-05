$url = Read-Host "Paste your Framer MCP URL (from MCP plugin in Framer)"
if (-not $url) { Write-Error "No URL provided."; exit 1 }
[Environment]::SetEnvironmentVariable("FRAMER_MCP_URL", $url, "User")
$env:FRAMER_MCP_URL = $url
Write-Host "FRAMER_MCP_URL saved. Restart Cursor, then refresh MCP servers in Settings > MCP."
