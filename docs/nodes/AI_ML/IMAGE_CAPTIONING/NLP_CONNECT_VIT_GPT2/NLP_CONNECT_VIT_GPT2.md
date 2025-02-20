---
title: NLP_CONNECT_VIT_GPT2
description: Enhance image captioning using Python with the NLP_CONNECT_VIT_GPT2 node that captions an input image and produces an output string wrapped in a dataframe.
keywords: [AI, Python, DataFrame, Image Caption, Machine Learning, ML]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/examples/EX1/output.jpeg
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
<PythonCode GLink='AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/NLP_CONNECT_VIT_GPT2.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='NLP_CONNECT_VIT_GPT2'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

## Appendix

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

<AppendixSection index={0} folderPath='nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2)
