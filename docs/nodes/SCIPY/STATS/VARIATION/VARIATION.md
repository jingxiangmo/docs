---
title: VARIATION
description: Compute the coefficient of variation. The coefficient of variation is the standard deviation divided by the mean.  This function is equivalent to      np.std(x, axis=axis, ddof=ddof) / np.mean(x)  The default for ``ddof`` is 0, but many definitions of the coefficient of variation use the square root of the unbiased sample variance for the sample standard deviation, which corresponds to ``ddof=1``.  The function does not take the absolute value of the mean of the data, so the return value is negative if the mean is negative.
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.stats.variation]
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
<PythonCode GLink='SCIPY/stats/VARIATION/VARIATION.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='SCIPY/stats/VARIATION'
  nodeLabel='VARIATION'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/VARIATION/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/VARIATION/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/VARIATION/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/SCIPY/STATS/VARIATION)
