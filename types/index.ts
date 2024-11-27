export interface ComponentProps {
    [key: string]: string | number | boolean | object;
}

export interface TranspilationResult {
    code: string;
    error?: string
}

export interface CodeEditorProps {
    code: string | undefined;
    onChange: (value: string | undefined) => void;
    language?: string;
}

export interface PreviewProps {
    code: string;
    props?: ComponentProps
}