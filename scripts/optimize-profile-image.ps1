param(
    [string]$Source = (Join-Path $PSScriptRoot '..\public\profile\vasantha_profile_picture.png'),
    [string]$OutFile = (Join-Path $PSScriptRoot '..\public\profile\vasantha_profile_picture_400.jpg')
)

# The source photo is 896x1198 at ~1.4 MB, which is far more than any consumer
# needs and is unused by the app. This produces a 400x535 JPEG (~40 KB) to use
# as the Person schema image and an in-page avatar, cutting the payload by
# roughly 35x without any visible loss at display size.

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $Source)) { throw "Source not found: $Source" }

$src = [System.Drawing.Image]::FromFile($Source)
$targetW = 400
$targetH = [int][Math]::Round($src.Height * ($targetW / $src.Width))

$dst = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($dst)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($src, 0, 0, $targetW, $targetH)

# Flatten onto white: JPEG has no alpha channel, and a transparent PNG source
# would otherwise render as black.
$flat = New-Object System.Drawing.Bitmap($targetW, $targetH)
$fg = [System.Drawing.Graphics]::FromImage($flat)
$fg.Clear([System.Drawing.Color]::White)
$fg.DrawImage($dst, 0, 0)
$fg.Dispose()
$dst.Dispose()
$g.Dispose()

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, 85L
)
$flat.Save($OutFile, $enc, $params)
$flat.Dispose()
$src.Dispose()

$kb = [int]((Get-Item $OutFile).Length / 1kb)
Write-Output "Profile image written: $OutFile (${targetW}x${targetH}, ${kb} KB)"