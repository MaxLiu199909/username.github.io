#!/bin/bash

# 确保 icons 目录存在
mkdir -p public/icons

# 生成不同尺寸的图标
convert public/icons/icon.svg -resize 512x512 public/icons/icon-512x512.png
convert public/icons/icon.svg -resize 192x192 public/icons/icon-192x192.png
convert public/icons/icon.svg -resize 180x180 public/icons/apple-touch-icon.png
convert public/icons/icon.svg -resize 32x32 public/icons/favicon-32x32.png
convert public/icons/icon.svg -resize 16x16 public/icons/favicon-16x16.png

# 生成 Safari 固定标签页图标
convert public/icons/icon.svg -resize 180x180 -background none public/icons/safari-pinned-tab.svg

echo "图标生成完成！"
echo "已生成以下图标："
ls -lh public/icons/
