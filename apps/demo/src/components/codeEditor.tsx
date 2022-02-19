import React from 'react';
import type { IAceEditorProps } from 'react-ace';
import dynamic from 'next/dynamic';

const AceEditor = dynamic(async () => {
  const ace = await import('react-ace');
  require(`ace-builds/src-noconflict/mode-json`);
  require(`ace-builds/src-noconflict/theme-github`);
  return ace;
});

interface IProps extends Omit<IAceEditorProps, 'setOptions'> {}

export default function CodeEditor(props: IProps) {
  return (
    <AceEditor
      theme="github"
      fontSize="14"
      highlightActiveLine
      showGutter
      showPrintMargin
      setOptions={{
        tabSize: 2,
        showLineNumbers: true,
        useWorker: false,
      }}
      editorProps={{ $blockScrolling: true }}
      width="100%"
      {...props}
    />
  );
}
