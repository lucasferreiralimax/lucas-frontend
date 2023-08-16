/// <reference types='vitest/globals' />

import '@testing-library/jest-dom';
import { vi } from 'vitest'

global.fetch = vi.fn();
