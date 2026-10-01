param(
    [string]$OutFile = (Join-Path $PSScriptRoot '..\public\og-image.png')
)

Add-Type -AssemblyName System.Drawing

$W = 1200
$H = 630
$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# --- Background: deep navy vertical gradient -------------------------------
$bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($W, $H)),
    [System.Drawing.Color]::FromArgb(11, 15, 23),
    [System.Drawing.Color]::FromArgb(8, 34, 51)
)
$g.FillRectangle($bg, 0, 0, $W, $H)

# --- Decorative dot grid --------------------------------------------------
$dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 34, 211, 238))
for ($y = 0; $y -lt $H; $y += 26) {
    for ($x = 0; $x -lt $W; $x += 26) {
        $g.FillEllipse($dotBrush, $x, $y, 2, 2)
    }
}

# --- Ambient glow ---------------------------------------------------------
$glow = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(700, 0)),
    (New-Object System.Drawing.Point($W, 200)),
    [System.Drawing.Color]::FromArgb(60, 34, 211, 238),
    [System.Drawing.Color]::FromArgb(0, 34, 211, 238)
)
$g.FillRectangle($glow, 640, 0, 560, 260)

# --- Fonts ----------------------------------------------------------------
# Requested families are not guaranteed to exist on every machine, so fall back
# to a family that always resolves. System.Drawing throws on a missing family.
function New-Font {
    param([string[]]$Families, [float]$Size, [System.Drawing.FontStyle]$Style)
    foreach ($fam in $Families) {
        try {
            $f = New-Object System.Drawing.Font($fam, $Size, $Style, [System.Drawing.GraphicsUnit]::Pixel)
            if ($f.Name -eq $fam) { return $f }
            $f.Dispose()
        } catch { }
    }
    return New-Object System.Drawing.Font('Arial', $Size, $Style, [System.Drawing.GraphicsUnit]::Pixel)
}

$Bold   = [System.Drawing.FontStyle]::Bold
$Reg    = [System.Drawing.FontStyle]::Regular
$sans   = @('Segoe UI', 'Arial')
$nameFont = New-Font $sans 62 $Bold
$roleFont = New-Font $sans 30 $Bold
$metaFont = New-Font $sans 22 $Reg
$chipFont = New-Font $sans 20 $Bold
$monoFont = New-Font @('Consolas', 'Courier New', 'Arial') 18 $Bold

$white   = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 250, 252))
$cyan    = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(34, 211, 238))
$slate   = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(148, 163, 184))
$emerald = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(52, 211, 153))
$chipBg  = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(18, 30, 46))
$chipLine = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(70, 34, 211, 238), 1)

$left = 80
$top  = 150

# Middle-dot separator built from its code point so the script stays pure ASCII
# and can never be corrupted by a file-encoding mismatch.
$dot = [string][char]0x00B7
$stackLine = 'Power BI  ' + $dot + '  SQL / MySQL  ' + $dot + '  Tableau  ' + $dot + '  Advanced Excel'
# --- Cyan accent bar ------------------------------------------------------
$accent = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point($left, 0)),
    (New-Object System.Drawing.Point(($left + 420), 0)),
    [System.Drawing.Color]::FromArgb(34, 211, 238),
    [System.Drawing.Color]::FromArgb(52, 211, 153)
)
$g.FillRectangle($accent, $left, ($top - 58), 130, 8)

# --- Name -----------------------------------------------------------------
$g.DrawString('Lourdu Vasantha', $nameFont, $white, $left, $top)
$nameSize = $g.MeasureString('Lourdu Vasantha', $nameFont)
$g.DrawString('Polishetti', $nameFont, $cyan, $left, ($top + $nameSize.Height - 6))

$roleY = $top + ($nameSize.Height * 2) + 18
$g.DrawString('DATA ANALYST', $roleFont, $white, $left, $roleY)
$g.DrawString($stackLine, $metaFont, $slate, $left, ($roleY + 56))

# --- Credential chips -----------------------------------------------------
$chips = @(
    @{ T = 'NASSCOM Data Analyst'; C = $cyan },
    @{ T = '5 BI Dashboards';      C = $emerald },
    @{ T = 'Hyderabad, India';     C = $slate }
)
$cx = $left
$chipY = $roleY + 108
foreach ($chip in $chips) {
    $size = $g.MeasureString($chip.T, $chipFont)
    $padX = 18
    $w = $size.Width + ($padX * 2)
    $h = 42
    $rect = New-Object System.Drawing.RectangleF($cx, $chipY, $w, $h)
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $r = 10
    $path.AddArc($rect.X, $rect.Y, ($r * 2), ($r * 2), 180, 90)
    $path.AddArc(($rect.Right - ($r * 2)), $rect.Y, ($r * 2), ($r * 2), 270, 90)
    $path.AddArc(($rect.Right - ($r * 2)), ($rect.Bottom - ($r * 2)), ($r * 2), ($r * 2), 0, 90)
    $path.AddArc($rect.X, ($rect.Bottom - ($r * 2)), ($r * 2), ($r * 2), 90, 90)
    $path.CloseFigure()
    $g.FillPath($chipBg, $path)
    $g.DrawPath($chipLine, $path)
    $g.DrawString($chip.T, $chipFont, $chip.C, ($cx + $padX), ($chipY + 10))
    $cx += $w + 14
}

# --- Footer strip ---------------------------------------------------------
$g.FillRectangle($accent, 0, ($H - 10), $W, 10)
$g.DrawString('lourduvasanthapolishetti.github.io', $monoFont, $slate, $left, ($H - 62))

# --- Decorative bar-chart motif (right) -----------------------------------
$barColors = @(
    [System.Drawing.Color]::FromArgb(45, 212, 191),
    [System.Drawing.Color]::FromArgb(45, 212, 191),
    [System.Drawing.Color]::FromArgb(56, 189, 248),
    [System.Drawing.Color]::FromArgb(34, 211, 238),
    [System.Drawing.Color]::FromArgb(52, 211, 153)
)
$baseX = 950
$baseY = 430
$bw = 34
$gap = 16
$heights = @(70, 110, 150, 190, 240)
for ($i = 0; $i -lt $heights.Count; $i++) {
    $hh = $heights[$i]
    $bBrush = New-Object System.Drawing.SolidBrush($barColors[$i])
    $bx = $baseX + ($i * ($bw + $gap))
    $g.FillRectangle($bBrush, $bx, ($baseY - $hh), $bw, $hh)
    $bBrush.Dispose()
}
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 51, 65))), ($baseX - 18), ($baseY + 6), 300, 3)

# --- Save -----------------------------------------------------------------
$dir = Split-Path -Parent $OutFile
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
$bmp.Save($OutFile, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
Write-Output "OG image written to $OutFile"