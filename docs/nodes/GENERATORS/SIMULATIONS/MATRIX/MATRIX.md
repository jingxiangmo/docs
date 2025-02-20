---
title: MATRIX
description: Master random matrix simulations with Python using the MATRIX generator node from Flojoy. The MATRIX node takes row and col arguments as input and generates a random matrix where the integers inside the matrix are between 0 and 19.
keywords: [Python, Simulations, Python Matrix simulations, Matrix manipulation techniques, Flojoy generator nodes, Dynamic matrix modeling, Matrix simulation examples, Python simulation tools, Matrix manipulation in Python, Matrix-based simulations, Dynamic system modeling, Python matrix generator, Random matrix generator]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SIMULATIONS/MATRIX/examples/EX1/output.jpeg
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
<PythonCode GLink='GENERATORS/SIMULATIONS/MATRIX/MATRIX.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='MATRIX'
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

<AppendixSection index={0} folderPath='nodes/GENERATORS/SIMULATIONS/MATRIX/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/GENERATORS/SIMULATIONS/MATRIX/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/GENERATORS/SIMULATIONS/MATRIX/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/GENERATORS/SIMULATIONS/MATRIX)
