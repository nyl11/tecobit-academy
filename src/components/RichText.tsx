import React from 'react'

export const RichText: React.FC<{ content: any }> = ({ content }) => {
    if (!content) return null

    // For Lexical rendering, we ideally want to use a proper converter.
    // Since we don't have a complex one here, we'll implement a basic one
    // or at least make it look like a real document.

    const renderNodes = (nodes: any[]) => {
        return nodes?.map((node, i) => {
            if (node.type === 'text') {
                let text = node.text;
                if (node.format & 1) text = <strong key={i}>{text}</strong>;
                if (node.format & 2) text = <em key={i}>{text}</em>;
                return text;
            }
            if (node.type === 'paragraph') {
                return (
                    <p key={i} style={{ textAlign: node.format || 'left' }}>
                        {renderNodes(node.children)}
                    </p>
                );
            }
            if (node.type === 'heading') {
                const Tag = node.tag as any;
                return <Tag key={i}>{renderNodes(node.children)}</Tag>;
            }
            if (node.type === 'list') {
                const Tag = node.listType === 'number' ? 'ol' : 'ul';
                return <Tag key={i}>{renderNodes(node.children)}</Tag>;
            }
            if (node.type === 'listitem') {
                return <li key={i}>{renderNodes(node.children)}</li>;
            }
            if (node.type === 'quote') {
                return <blockquote key={i}>{renderNodes(node.children)}</blockquote>;
            }
            return null;
        });
    };

    return (
        <div className="prose dark:prose-invert max-w-none prose-orange">
            {content?.root?.children ? renderNodes(content.root.children) : null}
        </div>
    )
}
