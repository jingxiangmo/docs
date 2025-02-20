---
title: TEXT_DATASET
description: The TEXT_DATASET node loads the 20 newsgroups dataset from scikit"-"learn. The data is returned as a dataframe with one column containing the text and the other containing the category.
keywords: [Python, Generate, Text dataset generator, Sample text datasets, Flojoy generator nodes, Synthetic text data, Text dataset examples, Text data simulation, Text dataset generation, Data simulation for NLP, Text data analysis tools, Text dataset for training]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/TEXT_DATASET/examples/EX1/output.jpeg
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
<PythonCode GLink='GENERATORS/SAMPLE_DATASETS/TEXT_DATASET/TEXT_DATASET.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='TEXT_DATASET'
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

<AppendixSection index={0} folderPath='nodes/GENERATORS/SAMPLE_DATASETS/TEXT_DATASET/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/GENERATORS/SAMPLE_DATASETS/TEXT_DATASET/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/GENERATORS/SAMPLE_DATASETS/TEXT_DATASET/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/TEXT_DATASET)
