/// <reference types="vitest/globals" />

import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { vi } from 'vitest'

global.fetch = vi.fn();
