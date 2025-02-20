---
title: CONDITIONAL
description: The CONDITIONAL node compares two given DataContainer inputs and enqueues nodes connected with true or false output based on the comparison result.
keyword: [Python, Flow, Logic gates, Conditional, Conditional logic gates, Python logic gates, Data analysis with conditionals, Streamline logical operations, Condition"-"based transformations, Conditional statements in Python, Python data manipulation, Accurate data insights, Logical operations using conditionals, Data processing using CONDITIONAL logic gates]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOGIC_GATES/CONDITIONALS/CONDITIONAL/examples/EX1/output.jpeg
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
<PythonCode GLink='LOGIC_GATES/CONDITIONALS/CONDITIONAL/CONDITIONAL.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='CONDITIONAL'
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

<AppendixSection index={0} folderPath='nodes/LOGIC_GATES/CONDITIONALS/CONDITIONAL/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOGIC_GATES/CONDITIONALS/CONDITIONAL/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOGIC_GATES/CONDITIONALS/CONDITIONAL/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/LOGIC_GATES/CONDITIONALS/CONDITIONAL)
