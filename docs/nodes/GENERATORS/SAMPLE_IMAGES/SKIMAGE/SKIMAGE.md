---
title: SKIMAGE
description: Explore Python-powered image data generation with Flojoy's SklearnImage generator nodes designed to load example images from scikit-image.
keywords: [Python, Generate, SklearnImage generator, Sample image data generation, Python image data simulation, Image dataset generation, Flojoy generator nodes, AI/ML image datasets, SklearnImage examples, Synthetic image data, Image data for training, Image data augmentation]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/SKIMAGE/examples/EX1/output.jpeg
---

[//]: # (Custom component imports)

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # (Docstring)

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='GENERATORS/SAMPLE_IMAGES/SKIMAGE/SKIMAGE.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='SKIMAGE'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />
  
    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/GENERATORS/SAMPLE_IMAGES/SKIMAGE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/GENERATORS/SAMPLE_IMAGES/SKIMAGE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/GENERATORS/SAMPLE_IMAGES/SKIMAGE/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/GENERATORS/SAMPLE_IMAGES/SKIMAGE)
