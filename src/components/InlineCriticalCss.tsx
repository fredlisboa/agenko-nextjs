import { readFileSync } from 'fs';
import path from 'path';

export const InlineCriticalCss = () => {
  const cssPath = path.join(process.cwd(), 'public', 'assets', 'critical.css');
  const criticalCss = readFileSync(cssPath, 'utf-8');
  return <style dangerouslySetInnerHTML={{ __html: criticalCss }} />;
};