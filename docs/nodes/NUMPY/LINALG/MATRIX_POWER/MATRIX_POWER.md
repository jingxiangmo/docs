---
title: MATRIX_POWER
description: Raise a square matrix to the (integer) power `n`. For positive integers `n`, the power is computed by repeated matrix squarings and matrix multiplications. If ``n == 0``, the identity matrix of the same shape as M is returned. If ``n < 0``, the inverse is computed and then raised to the ``abs(n)``.  .. note Stacks of object matrices are not currently supported.
keywords: [numpy, linear algerbra, linalg, np.linalg, numpy.linalg, numpy.linalg.matrix_power]
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
<PythonCode GLink='NUMPY/linalg/MATRIX_POWER/MATRIX_POWER.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='NUMPY/linalg/MATRIX_POWER'
  nodeLabel='MATRIX_POWER'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/NUMPY/linalg/MATRIX_POWER/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/NUMPY/linalg/MATRIX_POWER/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/NUMPY/linalg/MATRIX_POWER/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/NUMPY/LINALG/MATRIX_POWER)
