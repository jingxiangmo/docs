---
title: GZSCORE
description: Compute the geometric standard score. Compute the geometric z score of each strictly positive value in the sample, relative to the geometric mean and standard deviation. Mathematically the geometric z score can be evaluated as      gzscore = log(a/gmu) / log(gsigma)  where ``gmu`` (resp. ``gsigma``) is the geometric mean (resp. standard deviation).
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.stats.gzscore]
image: https://docs.scipy.org/doc/scipy/reference/stats.html
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
<PythonCode GLink='SCIPY/stats/GZSCORE/GZSCORE.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='SCIPY/stats/GZSCORE'
  nodeLabel='GZSCORE'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/GZSCORE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/GZSCORE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/GZSCORE/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/SCIPY/STATS/GZSCORE)
