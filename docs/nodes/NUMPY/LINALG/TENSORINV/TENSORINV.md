---
title: TENSORINV
description: Compute the 'inverse' of an N-dimensional array. The result is an inverse for `a` relative to the tensordot operation ``tensordot(a, b, ind)``, i. e., up to floating-point accuracy, ``tensordot(tensorinv(a), a, ind)`` is the "identity" tensor for the tensordot operation.
keywords: [numpy, linear algerbra, linalg, np.linalg, numpy.linalg, numpy.linalg.tensorinv]
image: https://numpy.org/doc/stable/reference/routines.linalg.html
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
<PythonCode GLink='NUMPY/linalg/TENSORINV/TENSORINV.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='NUMPY/linalg/TENSORINV'
  nodeLabel='TENSORINV'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/NUMPY/linalg/TENSORINV/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/NUMPY/linalg/TENSORINV/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/NUMPY/linalg/TENSORINV/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/NUMPY/LINALG/TENSORINV)


