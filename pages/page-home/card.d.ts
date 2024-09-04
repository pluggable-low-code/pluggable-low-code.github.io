import { StyleProps } from '@p-lc/react-shared';
import { FC, ReactNode } from 'react';
/**
 * 卡片属性
 */
export interface CardProps extends StyleProps {
    /**
     * 图标
     */
    icon: ReactNode;
    /**
     * 标题
     */
    title: string;
    /**
     * 内容
     */
    content?: string;
    /**
     * 跳转链接
     */
    to?: string;
}
/**
 * 卡片
 */
export declare const Card: FC<CardProps>;
/**
 * 内部：卡片容器
 */
export declare const InternalCardContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    /**
     * 跳转链接
     */
    to?: string;
}>> & string;
//# sourceMappingURL=card.d.ts.map