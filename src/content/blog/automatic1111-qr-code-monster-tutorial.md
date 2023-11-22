---
author: Jordain Perreault-Joyce
pubDate: 2023-09-20T09:30:00Z
title: Automatic1111 QR Code Monster Tutorial
postSlug: automatic1111-qr-code-monster-tutorial
featured: true
draft: false
tags:
  - Stable_Diffusion
  - Automatic1111
  - ControlNet
  - AI
heroImage: "/Auto1111BasicShapeMaskThumbnail3.png"
description:
  Learn how to create visual patterns using masks.
---
## Table of contents

## Masks

Download these masks and try them out 
<div class="grid grid-cols-4 gap-2">
<!-- ![Circle Mask](@assets/images/automatic1111-qr-code-monster-tutorial/CircleMask.jpg=200w300h "Circle Mask") -->
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/CircleMask.jpg" alt="Circle Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/SquareMask.jpg" alt="Square Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/DiamondMask.jpg" alt="Diamond Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/TrainglesMask.png" alt="Traingles Mask" width="300" height="200">
</div>
<div class="grid grid-cols-4 gap-2">
<!-- ![Circle Mask](@assets/images/automatic1111-qr-code-monster-tutorial/CircleMask.jpg=200w300h "Circle Mask") -->
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/SwirlMask.png" alt="Swirl Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/CheckerBoardMask.jpg" alt="Checker Board Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/TeethMask.png" alt="Teeth Mask" width="300" height="200">
<img src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/ColumnsMask.png" alt="Columns Mask" width="300" height="200">
</div>

## Download Links
- [QR Code Monster SD V1.5](https://civitai.com/models/111006/qr-code-monster)
- [QR Code Monster SDXL](https://huggingface.co/monster-labs/control_v1p_sdxl_qrcode_monster)
- [SD V1.5 Model](https://huggingface.co/runwayml/stable-diffusion-v1-5/blob/main/v1-5-pruned-emaonly.safetensors)
- [SDXL Model](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
- [Realistic Vision V5.1](https://civitai.com/models/4201?modelVersionId=130072)
- [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [ControlNet](https://github.com/lllyasviel/ControlNet)

## Video Tutorial

<iframe width="100%" height="414" src="https://www.youtube.com/embed/CmIxW_VOo8U?si=JRoJMzrRa4B2huCb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Examples

When copying the prompts make sure you click on the blue button in Automatic1111 to apply all filters.

<div class="grid grid-cols-2 gap-2">
<!-- Example 1 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example1.png" alt="Original Image - Middle East Busy Market" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/Example11.png" alt="Hover Image - Triangle Dot Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content1')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content1" class="collapsible-content" style="display: none;">

  ```
[[[A bustling street market]]] in the middle east in the style of a crayon drawing
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 518053974, Size: 1024x1024, Model hash: 15012c538f, Model: realisticVisionV51_v51VAE, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 1.34, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
<!-- Example 2 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example2.png" alt="Original Image - Toyko Cross walk" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/CheckerBoardMask.jpg" alt="Hover Image - Checker Board Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content2')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content2" class="collapsible-content" style="display: none;">

  ```
Shibuya Scramble Crossing, amid neon lights and towering skyscrapers
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 2315655974, Size: 1024x1024, Model hash: 15012c538f, Model: realisticVisionV51_v51VAE, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 0.9, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0

  ```

</div>
  </div>
</div>


<div class="grid grid-cols-2 gap-2">
<!-- Example 3 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example3.png" alt="Original Image - Venice City" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/TeethMask.png" alt="Hover Image - Teeth Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content3')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content3" class="collapsible-content" style="display: none;">

  ```
A serene Venetian canal at sunset, style of Paul Gustav Fischer
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 4265991580, Size: 1024x1024, Model hash: 879db523c3, Model: dreamshaper_8, ControlNet 0: "Module: invert (from white bg & black line), Model: qrCodeMonster_v20 [5e5778cb], Weight: 1.35, Resize Mode: Just Resize, Low Vram: False, Processor Res: 512, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
<!-- Example 4 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example4.png" alt="Original Image - Cuba city cars" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/ColumnsMask.png" alt="Hover Image - Columns Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content4')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content4" class="collapsible-content" style="display: none;">

  ```
Vibrant streets filled with vintage cars, colorful buildings, bright blue sky, oil on canvas, style of Lisa Frank
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 1414350202, Size: 1024x1024, Model hash: 879db523c3, Model: dreamshaper_8, ControlNet 0: "Module: invert (from white bg & black line), Model: qrCodeMonster_v20 [5e5778cb], Weight: 1, Resize Mode: Just Resize, Low Vram: False, Processor Res: 512, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
</div>


<div class="grid grid-cols-2 gap-2">
<!-- Example 5 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example5.png" alt="Original Image - Bangkok busy night market" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/Example55.png" alt="Hover Image - Circle In Triangle Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content5')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content5" class="collapsible-content" style="display: none;">

  ```
A bustling night market in Bangkok with street vendors cooking
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 1, Seed: 3914164603, Size: 1024x1024, Model hash: 15012c538f, Model: realisticVisionV51_v51VAE, ControlNet 0: "Module: invert (from white bg & black line), Model: qrCodeMonster_v20 [5e5778cb], Weight: 1.25, Resize Mode: Just Resize, Low Vram: False, Processor Res: 512, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
<!-- Example 6 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example6.png" alt="Original Image - Petra Ancient City" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/Example66.png" alt="Hover Image - 4 Tri Squares" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content6')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content6" class="collapsible-content" style="display: none;">

  ```
far away shot of The mystical atmosphere of Petra, as the ancient city's rock-carved facades light up with candles during a twilight tour.
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 240584625, Size: 1024x1024, Model hash: 15012c538f, Model: realisticVisionV51_v51VAE, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 1.4, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
</div>



<div class="grid grid-cols-2 gap-2">
<!-- Example 7 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example7.png" alt="Original Image - Northern Lights" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/SwirlMask.png" alt="Hover Image - Swirl Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content7')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content7" class="collapsible-content" style="display: none;">

  ```
Northern Lights dancing over a snowy mountainous valley, with a meadow with a small village, oil, landscape, painting, in the style of Alois Arnegger
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 2628807148, Size: 1024x1024, Model hash: aadddd3d75, Model: deliberate_v3, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 0.8, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
<!-- Example 8 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example8.png" alt="Original Image - Chinese tea ceremony" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/DiamondMask.jpg" alt="Hover Image - Diamond Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content8')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content8" class="collapsible-content" style="display: none;">

  ```
A traditional Chinese tea ceremony in a tranquil garden in Suzhou, with tea leaves swirling in delicate porcelain cups
Negative prompt: stairs
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 1169833288, Size: 1024x1024, Model hash: 879db523c3, Model: dreamshaper_8, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 0.8, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
</div>



<div class="grid grid-cols-2 gap-2">
<!-- Example 9 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example9.png" alt="Original Image - Rio de Janeiro Carnival" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/SquareMask.jpg" alt="Hover Image - Square Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content9')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content9" class="collapsible-content" style="display: none;">

  ```
Rio de Janeiro Carnival parade in the style of Candido Portinari
Negative prompt: dancer
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 3293325695, Size: 1024x1024, Model hash: 879db523c3, Model: dreamshaper_8, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 1.2, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
<!-- Example 10 -->
  <div class="image-container">
    <img class="original-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/Examples/Example10.png" alt="Original Image - Indonesia farmers" width="600" height="500">
    <img class="hover-image" src="/blog/images/automatic1111-qr-code-monster-tutorial/masks/CircleMask.jpg" alt="Hover Image - Circle Mask" width="600" height="500" alt="">

<!-- Collapsible Button -->
<button class="btn" onclick="toggleCollapse('collapsible-content10')">Toggle Prompt</button>

<!-- Collapsible Content -->
<div id="collapsible-content10" class="collapsible-content" style="display: none;">

  ```
A serene sunrise over the tranquil rice terraces of Bali, Indonesia, with farmers tending to their fields in the style of Fernando Amorsolo
Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 717610666, Size: 1024x1024, Model hash: 879db523c3, Model: dreamshaper_8, ControlNet 0: "Module: none, Model: qrCodeMonster_v20 [5e5778cb], Weight: 0.9, Resize Mode: Just Resize, Low Vram: False, Guidance Start: 0.23, Guidance End: 0.5, Pixel Perfect: True, Control Mode: Balanced", Version: v1.6.0
  ```

</div>
  </div>
</div>

