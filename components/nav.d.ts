import { StyleProps } from '@p-lc/react-shared';
import { FC } from 'react';
/**
 * 导航属性
 */
export interface NavProps extends StyleProps {
    /**
     * 标题打开
     */
    titleOpen?: boolean;
    /**
     * 展示文档，默认为 true
     */
    docs?: boolean;
}
/**
 * 导航
 */
export declare const Nav: FC<NavProps>;
/**
 * 内部：导航
 */
export declare const InternalNav: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
//# sourceMappingURL=nav.d.ts.map